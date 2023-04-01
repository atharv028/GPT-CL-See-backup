import React, { useState, ChangeEvent } from "react";

type Props = {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
};

const FileUploader = ({ selectedFile, setSelectedFile }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const fileType = file.type;
    if (fileType !== "application/pdf") {
      setErrorMessage("Please select a PDF file.");
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      setErrorMessage(null);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          htmlFor="file-upload"
          className="block w-max rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-gray-100 bg-indigo-600 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-800 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2"
        >
          Upload PDF
        </label>
        {selectedFile && (
          <div style={{ color: "green", marginLeft: "10px" }}>
            {selectedFile.name} uploaded successfully.
          </div>
        )}
      </div>
      <input
        id="file-upload"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <div style={{ color: "red" }}>{errorMessage}</div>
      <div className="text-xs text-gray-800 dark:text-gray-300"> *Upload a PDF of Your CV/Resumé</div>
    </div>
  );
};

export default FileUploader;
