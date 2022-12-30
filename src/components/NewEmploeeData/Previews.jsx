import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { RiCloseCircleLine } from "react-icons/ri";

const Previews = ({ handleImage, editedImage ,handleEditedImg,handleImgReq}) => {


  const removeImage = (e) => {
    e.stopPropagation();
    handleImgReq(true)
    handleEditedImg(null)
    handleImage(null)
  
  };
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      handleImage(acceptedFiles[0]);
    
      handleImgReq(true)

    },
    multiple: false,
  });
  console.log(editedImage);
  const thumbs = files.map((file) => (
    <div className="thumb w-16 h-16 mx-2 " key={file.name}>
      <div className="flex overflow-hidden">
        <img
          src={file.preview}
          className="block h-full "
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className=" flex flex-col h-fit  ">
      <div {...getRootProps({ className: "dropzone " })} >
        {editedImage ? (
          <>

        
            <RiCloseCircleLine onClick={removeImage} className='absolute right-0.5 top-0.5 hover:cursor-pointer text-red-600 text-xl'/>
            <div className="w-1/2 mx-auto">


            <img src={editedImage} />
            </div>
          </>
        ) : (
          <>
            <input
              {...getInputProps()}
             
            />
            <p className="mx-auto hover:cursor-pointer">drag image here</p>
          <div >
          {thumbs} 
          </div>
    
           
          </>
        )}
      </div>
   
    </section>
  );
};

export default Previews;
