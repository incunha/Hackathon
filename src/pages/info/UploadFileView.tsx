import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Dropzone from "react-dropzone";

import "./UploadFileview.scss";
import uploadIcon from "../../assets/upload_icon.png";

function UploadFileView({onSuccess, OnError, onProcessing}: {onSuccess: (results: {rep?: string}) => void, OnError: (error?: Error) => void, onProcessing: () => void}) {
  const [file, setFiles] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      uploadFile(file);
    }
  }
  , [file]);

  const uploadFile = async (file: File) => {
    if (file) {
      onProcessing();
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("file", file);

      try {
        // Enviar o arquivo para o servidor
        const result = await fetch("http://localhost:8000/plot", {
          method: "POST",
          body: formData,
        });

        // Verificar o tipo de resposta
        const contentType = result.headers.get("Content-Type");

        // Se a resposta for uma imagem PNG
        if (contentType && contentType.includes("image/png")) {
          const imageBlob = await result.blob(); // Pegar a resposta como binário (blob)

          // Criar uma URL local para exibir a imagem no frontend
          const imageURL = URL.createObjectURL(imageBlob);
          setImage(imageURL);
          // Exibir a imagem, exemplo de como usá-la
          // const imgElement = document.createElement('img');
          // imgElement.src = imageURL;
          // document.body.appendChild(imgElement);  // Adiciona a imagem no corpo da página

          onSuccess({rep: imageURL});
        } else {
          // Se a resposta for JSON ou outro formato
          const data = await result.json();
          console.log("Response data:", data);
          onSuccess({});
        }
      } catch (error) {
        OnError(error as Error);
        console.error("Error:", error);
      }
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles[0]);
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <h3 className="info_title">Upload your file</h3>
      <h5 className="info_description">Here you can upload your .mseed file</h5>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <div style={{ display: "flex", flexDirection: "column", width: "200px", height: "140px", alignItems: "center" }}>
                <img src={uploadIcon} style={{ width: "70px", height: "60px" }}></img>
                <p className="dropzone_title">Drag 'n' drop files or Browse</p>
                <p style={{color: "white", marginTop: "auto", marginBottom: 0}}>Supported formats: .mseed</p>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </Container>
  );
}

export default UploadFileView;