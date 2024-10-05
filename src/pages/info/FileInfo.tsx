import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FileInfo.scss";
import GlobeView from "./Globe";

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

const FileInfo = ({ info }: { info: { rep?: string; des?: GlobeEvent } }) => {
  return (
    <div className="container text-white mt-5">
      <h1 className="infoTitle mb-4 text-center">Your file is ready</h1>
      <p className="mb-4 text-center infoPara">
        Here you can get a preview of the area that will be affected by the
        earthquakes. You can also download the file.
      </p>
      <div className="row mb-4" style={{ maxHeight: "450px" }}>
        <div className="col-md-6 text-center">
          <GlobeView events={info.des ? [info.des] : []} />
        </div>
        <div className="col-md-6 text-center">
          <img src={info.rep} className="img-fluid" />
        </div>
      </div>
      <div className="info text-left">
        <p><span style={{fontWeight: 700}}>Netowrk: </span>{info.des?.network ? info.des?.network : "N/A"}</p>
        <p>Station: {info.des?.station ? info.des?.station : "N/A"}</p>
        {info.des?.phase_data.map((phase, index) => (
          <div style={{paddingLeft: "12px"}} key={index}>
            <p>Phase {phase.phase_type}</p>
            <p style={{paddingLeft: "12px"}}>Phase time: {phase.phase_time}</p>
            <p style={{paddingLeft: "12px"}}>Phase score: {phase.phase_score}</p>
            <p style={{paddingLeft: "12px"}}>Delta time: {phase.dt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileInfo;
