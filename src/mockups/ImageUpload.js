import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './ImageUpload.css'
import { useDropzone } from "react-dropzone";
import { Button } from '@material-ui/core';

const baseStyle = {
  // flex: 1,
   display: "flex",
   flexDirection: "row",
   alignItems: "center",
   padding: "1px",
   width : 300,
   height : 100,
   borderWidth: 2,
   borderRadius: 2,
   borderColor: "#eeeeee",
   borderStyle: "solid",
   backgroundColor: "lightblue",
   color: "black",
   outline: "none",
   transition: "border .24s ease-in-out",
   marginLeft : '24em'
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

const thumbsContainer = {
   display: "flex",
   flexDirection: "row",
   flexWrap: "wrap",
   marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
   minWidth: 0,
   overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};



function ImageUpload(props) {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const filepath = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
       
        <div className = 'upload-button' >
        <Button type="button" variant = 'contained'  component="span" onClick={open} style = {{color : 'green', width : 120, height : 50,  textTransform : 'none', textAlign : 'center', backgroundColor : 'lightblue', marginLeft : '2em' }}>
         Select Files ...
        </Button>
      
        </div>
        <p className = 'paragraph' style = {{color : 'gray', font : 'italic', marginLeft : '5em', fontFamily : 'sans-serif', fontSize : '14px'}}> Drop some files here to upload</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{filepath}</ul>
      </aside>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </div>
  );
}

export default ImageUpload
