import { Container } from "react-bootstrap";
import "./Info.scss";
import RippleLoader from "./RippleLoader";
import UploadFileView from "./UploadFileView";
import { useState } from "react";
import FileInfo from "./FileInfo";

interface GlobeEvent {
  network: string;
  station: string;
  starttime: string;
  latitude: number;
  longitude: number;
  phase_data: {
    phase_time: string;
    phase_score: number;
    phase_type: "P" | "S";
    dt: number;
  }[];
}

function Info() {
  const [loading, setLoading] = useState<boolean>(false);
  const [res, setResult] = useState< {rep?: string, des?: GlobeEvent} | undefined>(undefined);

  const requestData = async () => {
    const result = await fetch("http://localhost:8000/data", {
      method: "GET",
    });
    return result.json();
  }

  const onUploadSucess = async (results: { rep?: string }) => {
    try {
      const data = await requestData();
      setResult({rep: results.rep, des: data});
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setResult({rep: results.rep});
      setLoading(false);
    }
  };

  const onUploadError = (error?: Error) => {
    setLoading(false);
    console.error("Upload error:", error);
  };

  const onProcessing = () => {
    setLoading(true);
  };

  const hasCompleteResponse = () => {
    return res?.rep && res.des;
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ flex: 1 }}
    >
      {(!loading && !hasCompleteResponse()) && (
        <UploadFileView
          onSuccess={onUploadSucess}
          OnError={onUploadError}
          onProcessing={onProcessing}
        ></UploadFileView>
      )}
      {loading && <RippleLoader size={250} />}
      {(!loading && hasCompleteResponse()) && res && <FileInfo info={res}/>}
    </Container>
  );
}

export default Info;
