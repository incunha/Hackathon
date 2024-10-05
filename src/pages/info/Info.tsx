import { Container } from "react-bootstrap";
import "./Info.scss";
import RippleLoader from "./RippleLoader";
import UploadFileView from "./UploadFileView";
import { useState } from "react";

function Info() {
  const [loading, setLoading] = useState<boolean>(false);
  const [res, setResult] = useState< {rep?: string} | null>(null);

  const onUploadSucess = (results: { rep?: string }) => {
    setResult(results);
    setLoading(false);
    console.log("Upload success:", results);
  };

  const onUploadError = (error?: Error) => {
    setLoading(false);
    console.error("Upload error:", error);
  };

  const onProcessing = () => {
    setLoading(true);
  };

  return (
    <Container
      className="d-flex flex-column align-items-center"
      style={{ flex: 1 }}
    >
      {(!loading && !res) && (
        <UploadFileView
          onSuccess={onUploadSucess}
          OnError={onUploadError}
          onProcessing={onProcessing}
        ></UploadFileView>
      )}
      {loading && <RippleLoader size={250} />}
      {(!loading && res?.rep) && <img src={res.rep}></img>}
    </Container>
  );
}

export default Info;
