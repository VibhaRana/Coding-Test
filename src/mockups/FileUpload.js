import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const FileUpload = () => {
    const toast = (innerHTML) => {
      const el = document.getElementById('toast')
      el.innerHTML = innerHTML
      el.className = 'show'
      setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
    }
  
    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta, remove }, status) => {
      if (status === 'headers_received') {
        toast(`${meta.name} uploaded!`)
        remove()
      } else if (status === 'aborted') {
        toast(`${meta.name}, upload failed...`)
      }
    }
  
    return (
      <React.Fragment>
        <div id="toast">Upload</div>
        <Dropzone
         style = {{color : 'green'}}
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          maxFiles={1}
          multiple={false}
          canCancel={false}
          inputContent="Load LiDAR Data, drop files here"
          
          
          styles={{
            dropzone: { width: 800, height: '50' , backgroundColor : 'lightblue', color : 'darkGreen' },
            dropzoneActive: { borderColor: 'green', backgroundColor : 'lightblue' , color : 'darkGreen'},
          }}
        />
      </React.Fragment>
    )
  }
  
  <FileUpload />
  export default FileUpload