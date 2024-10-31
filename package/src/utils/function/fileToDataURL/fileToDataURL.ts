export const convertFileToDataURL = (file: File) => {
  const selectedFile = file;
  if (!selectedFile) {
    throw new TypeError("No file selected. Please provide a valid file.");
  }
  if (!(selectedFile instanceof File)) {
    throw new TypeError("Invalid file type provided.");
  }
  return new Promise((resolve, reject) => {
    if (!window.FileReader) {
      reject(new Error("FileReader is not supported in this environment."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () =>
      reject(new Error("Failed to read file as data URL."));
    reader.readAsDataURL(selectedFile);
  });
};

// Example: convertFileToDataURL(data.file[0])
//            ?.then((data) => console.log(data))
//            .catch((err) => console.log(err));
