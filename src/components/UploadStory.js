import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const UploadStory = ({ addStory }) => {
  const [files, setFiles] = useState([]);

  const handleProcessFile = (error, file) => {
    if (!error) {
      const newStory = {
        id: new Date().getTime(),
        image: URL.createObjectURL(file.file),
      };
      addStory(newStory);
    }
  };

  return (
    <FilePond
      files={files}
      allowMultiple={false}
      acceptedFileTypes={["image/*"]}
      onupdatefiles={setFiles}
      onprocessfile={handleProcessFile}
    />
  );
};

export default UploadStory;
