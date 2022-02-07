import React, { useEffect, useState } from 'react';
import "./InputComponent.css";

export const InputComponent = (props) => {

    const { data, handleInputChange, handleRemoveClick } = props;
    const [currentlyWorking, setCurrentlyWorking] = useState(data.currentlyWorking);
    

    return <div id='root-div' className="root-div fadeIn">
        <div className='remove-btn-div'>
            <button onClick={() => handleRemoveClick(data.id)} type="button" className="remove-btn">X</button>
        </div>
        <div className='row justify-content-start'>

            <div className="mt-3 col-6">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input type="text"
                    value={data.company}
                    onChange={e => handleInputChange(e, data.id)}
                    className="form-control"
                    id="company" />
            </div>

            <div className="mt-3 col-6">
                <label htmlFor="role" className="form-label">Role</label>
                <input type="text"
                    className="form-control"
                    value={data.role}
                    onChange={e => handleInputChange(e, data.id)}
                    id="role" />
            </div>

            <div className="mt-3 col-12">
                <label htmlFor="jobDescription" className="form-label">Job Description</label>
                <textarea type="text-area"
                    id="jobDescription"
                    className="form-control text-area"
                    value={data.jobDescription}
                    onChange={e => handleInputChange(e, data.id)}
                    placeholder="Job Description" />
            </div>

            <div className="mt-3 col-sm-6 col-md-6 col-lg-4 mb-3">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input type="date"
                    className="form-control"
                    value={data.startDate}
                    onChange={e => handleInputChange(e, data.id)}
                    id="startDate" />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
            </div>

            <div className="mt-3 col-sm-6 col-md-6 col-lg-4 mb-3">
                <label htmlFor="endDate" className="form-label">End Date</label>
                <input type="date"
                    disabled={currentlyWorking}
                    value={data.endDate}
                    text={data.endDate}
                    onChange={e => handleInputChange(e, data.id)}
                    className="form-control"
                    id="endDate" />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
            </div>

            <div className="mt-3 col-sm-6 col-md-4 col-lg-4 mb-3">
                <label htmlFor="job-description" className="form-label">Job Status</label>
                <div className="form-check form-switch mt-2">
                    <input className="form-check-input"
                        type="checkbox"
                        checked={data.currentlyWorking}
                        onChange={e => {
                            setCurrentlyWorking(e.target.checked);
                            handleInputChange(e, data.id);
                        }}
                        role="switch"
                        id="currentlyWorking" />
                    <label className="form-check-label" htmlFor="currentlyWorking">I'm currently working</label>
                </div>
            </div>

        </div>

    </div>;
};
