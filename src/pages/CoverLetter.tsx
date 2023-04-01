import { useState } from "react";
import { useLocation } from "react-router-dom";
import copy from "copy-to-clipboard";

function CoverLetter() {
  const { state } = useLocation();
  console.log(state);
  const [copyText, setCopyText] = useState<string | null>(null);
  //   setCopyText(desc);

  const handleCopyText = (e: any) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    if (copyText == null) {
      copy(desc);
      setCopyText(desc);
    } else {
      copy(copyText);
    }
  };
  const [isCopyEnabled, setIsCopyEnabled] = useState(true);
  return (
    <div className="relative bg-white  mx-auto pt-16 py-24 lg:px-8">
      <textarea
        name="company"
        id="company"
        rows={20}
        defaultValue={desc}
        onChange={handleCopyText}
        autoComplete="organization"
        className={`block w-3/4 md:w-1/2 rounded-md border-0 mx-auto py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
          isCopyEnabled ? "hover:" : "bg-white text-gray-800"
        }`}
      />
      <div className="flex mx-auto my-3 w-3/4 md:w-1/2 justify-end">
        <button
          type="button"
          onClick={copyToClipboard}
          className="w-fit text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default CoverLetter;

let desc = `Dear Hiring Manager,

I am excited to submit my application for the position of Mobile Developer in your esteemed company. As an experienced developer with expertise in algorithms, programming, and mobile app development, I believe I can make a great contribution to your team.

With my previous work experience at Appyhigh Technologies, I have developed apps from scratch, some of which have over 50M+ downloads in Play Store. My project "ShareKaro India" has received critical acclaim for its interactive UI and seamless transactions. My experience in cryptography adds another layer of security to the apps I develop.

Apart from my professional experience, I have developed multiple personal projects that showcase my skills in Android development, Flutter, and C++ programming. I have developed an app called "FitAddict" that helps fitness enthusiasts track their calories, discover workouts, and find delicious recipes.

I believe my skills, experience, and past projects make me a perfect fit for this role. I am confident that I can bring value to your organization, and I am excited to contribute to your team's success.

Thank you for your time and consideration.

Best regards,

Atharv Tare`;
