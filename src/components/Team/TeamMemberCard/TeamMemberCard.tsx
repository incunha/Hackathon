import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamMemberCard.scss'; 

const TeamMemberCard = ({ name, role, description, image }) => {
    return (
        <div className="card mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} alt={name} className="img-fluid rounded-circle" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle">{role}</h6>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
