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
      copy(state.resp);
      setCopyText(state.resp);
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
        defaultValue={state.resp}
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
