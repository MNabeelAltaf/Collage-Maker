import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ handleFileChange }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  React.useEffect(() => {
    handleFileChange(files);
  }, [files])

  const { getRootProps, getInputProps, isDragActive,
    isFocused,
    isDragAccept,
    isDragReject

  } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'image/webp': ['.webp'],
    }, multiple: true,
  });

  const style = React.useMemo(() => ({
    ...styleForThisDropBox.baseStyle,
    ...(isFocused ? styleForThisDropBox.focusedStyle : {}),
    ...(isDragAccept ? styleForThisDropBox.acceptStyle : {}),
    ...(isDragReject ? styleForThisDropBox.rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div style={styleForThisDropBox.previewContainer}>
        {files.map((file, index) => (
          <div key={index} style={styleForThisDropBox.imageContainer}>
            <img
              src={file.preview}
              alt={`preview-${index}`}
              style={styleForThisDropBox.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const styleForThisDropBox = {
  baseStyle: {
    cursor: "pointer",
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 5,
    borderRadius: 2,
    borderColor: '#444',
    borderStyle: 'dashed',
    backgroundColor: '#eee',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  },

  focusedStyle: {
    borderColor: '#2196f3'
  },

  acceptStyle: {
    borderColor: '#00e676'
  },

  rejectStyle: {
    borderColor: '#ff1744'
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  imageContainer: {
    margin: '10px',
    width: '150px',
    height: '150px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default FileUpload;
