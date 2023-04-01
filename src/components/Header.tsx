import gpt_logo from "../assets/gpt_logo.svg";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import {
  useAccount,
  useConnect,
  useSignMessage,
  useDisconnect,
  Address,
} from "wagmi";
import axios from "axios";
import { useState } from "react";

type Props = {
  profileId: string;
  setProfileId: (profileId: string) => void;
};

function Header({ profileId, setProfileId }: Props) {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const handleConnect = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });
    const { data } = await axios.get("https://think-3rba.onrender.com/login", {
      insecureHTTPParser: true,
      params: { address: account, chain_id: chain.id },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message: message });

    const verification = await axios.get(
      "https://think-3rba.onrender.com/verifyLogin",
      {
        params: { message: message, signature: signature },
      }
    );
    console.log(verification.data);
    setProfileId(verification.data.profileId);
  };

  return (
    <header className="body-font bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 dark:text-gray-300 mb-4 md:mb-0">
          <img src={gpt_logo} alt="logo" className="w-10 h-10" />
          <span className="ml-3 text-xl">GPT-CoverLetters</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
        {!profileId && (
          <button
            onClick={handleConnect}
            className="inline-flex items-center text-gray-100 bg-indigo-600 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-800 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2"
          >
            Login
          </button>
        )}
        {profileId && (
          <button className="inline-flex items-center text-gray-100 bg-indigo-600 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-800 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2" />
        )}
      </div>
    </header>
  );
}

export default Header;
