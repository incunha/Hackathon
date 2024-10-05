import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FileInfo.scss";
import GlobeView from "./Globe";
import useTypingEffect from "./useTypingEffect"; 

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

  const formatPhaseTime = (timeStr: string) => {
    if (!timeStr) return "N/A";  
    const dateObj = new Date(timeStr);  
    return dateObj.toLocaleString();  
  };

  return (
    <div className="container text-white mt-5">
      <h1 className="infoTitle mb-4 text-center">Your file is ready</h1>
      <p className="mb-4 text-center infoPara">
        Here you can get a preview of the area that will be affected by the earthquakes.
      </p>
      <div className="row mb-4" style={{ maxHeight: "450px" }}>
        <div className="col-md-6 text-center">
          <GlobeView events={info.des ? [info.des] : []} />
        </div>
        <div className="col-md-6 text-center">
          <img src={info.rep} className="img-fluid" />
        </div>
      </div>
      <div style={{ marginTop: "90px", paddingLeft: "30px", paddingRight: "30px" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="info text-left">
              <p><span style={{ fontWeight: 700 }}>Network: </span>{useTypingEffect(info.des?.network ? info.des.network : "N/A", 100)}</p>
              <p><span style={{ fontWeight: 700 }}>Station: </span>{useTypingEffect(info.des?.station ? info.des.station : "N/A", 100)}</p>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                {info.des?.phase_data[0] && (
                  <div className="info text-left">
                    <p><span style={{ fontWeight: 700 }}>Phase</span> {info.des.phase_data[0].phase_type}</p>
                    <p><span style={{ fontWeight: 700 }}>Phase time: </span>{useTypingEffect(formatPhaseTime(info.des.phase_data[0].phase_time), 100)}</p>
                    <p><span style={{ fontWeight: 700 }}>Phase score: </span>{useTypingEffect(info.des.phase_data[0].phase_score.toString(), 100)}</p>
                    <p><span style={{ fontWeight: 700 }}>Delta time: </span>{useTypingEffect(info.des.phase_data[0].dt.toString(), 100)}</p>
                  </div>
                )}
              </div>

              <div className="col-md-6">
                {info.des?.phase_data[1] && (
                  <div className="info text-left">
                    <p><span style={{ fontWeight: 700 }}>Phase</span> {info.des.phase_data[1].phase_type}</p>
                    <p><span style={{ fontWeight: 700 }}>Phase time: </span>{useTypingEffect(formatPhaseTime(info.des.phase_data[1].phase_time), 100)}</p>
                    <p><span style={{ fontWeight: 700 }}>Phase score: </span>{useTypingEffect(info.des.phase_data[1].phase_score.toString(), 100)}</p>
                    <p><span style={{ fontWeight: 700 }}>Delta time: </span>{useTypingEffect(info.des.phase_data[1].dt.toString(), 100)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div> 
    </div>
  );
};

export default FileInfo;
