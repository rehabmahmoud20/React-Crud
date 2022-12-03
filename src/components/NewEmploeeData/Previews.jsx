import  {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


const Previews = (props)=> {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div className='thumb w-16 h-16 mx-2 ' key={file.name}>
      <div  className='flex overflow-hidden'>
        <img
          src={file.preview}
          className='block h-full '
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="h-fit">
      <div {...getRootProps({className: 'dropzone '})}>
        <input {...getInputProps()} />
        <p className='mx-auto '>drag image here</p>
      </div>
      <aside  className='flex flex-row flex-wrap mt-4 justify-center'>
        {thumbs}
      </aside>
    </section>
  );
}

export default Previews;

