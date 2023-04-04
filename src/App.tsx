import React, { useState } from "react";

const App = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const formData = new FormData();

    if (selectedFile) {
      formData.append("file", selectedFile);

      fetch("http://0.0.0.0:8080/upload", {
        method: "POST",
        body: formData,
        mode: 'cors'
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
// https://isentropic-snow-382317.an.r.appspot.com/upload
// http://0.0.0.0:8080/upload
  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default App;
