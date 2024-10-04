import { Container } from "react-bootstrap";
import "./Info.scss";
import Dropzone from "react-dropzone";
import { useState } from "react";

import uploadIcon from "../../assets/upload_icon.png";

function Info() {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  const uploadFile = async (file: File) => {
    if (file) {
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

          console.log("PNG image received and displayed");
        } else {
          // Se a resposta for JSON ou outro formato
          const data = await result.json();
          console.log("Response data:", data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
    uploadFile(acceptedFiles[0]);
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
      {image && <img src={image}></img>}
    </Container>
  );
}

export default Info;
