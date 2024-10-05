import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import exp from '../../assets/exp.png';
import exp2 from '../../assets/exp2.png';
import './FileInfo.scss';

const FileInfo = () => {
  return (
    <div className="container text-white mt-5">
      <h1 className="infoTitle mb-4 text-center">Your file is ready</h1>
      <p className="mb-4 text-center infoPara">Here you can get a preview of the area that will be affected by the earthquakes. You can also download the file.</p>

      <div className="row mb-4">
      <div className="col-md-6 text-center"> 
          <img 
            src={exp}
            alt="Imagem 1" 
            className="img-fluid" 
          />
        </div>
        <div className="col-md-6 text-center"> 
          <div className="image-button-container"> 
            <img 
              src={exp2}
              alt="Imagem 2" 
              className="img-fluid" 
            />
            <button className="downloadFileButton mb-4">Download File</button> 
          </div>
        </div>
      </div>

      <div className="info text-left"> 
        <p>File name:</p>
      </div>
    </div>
  );
};

export default FileInfo;
