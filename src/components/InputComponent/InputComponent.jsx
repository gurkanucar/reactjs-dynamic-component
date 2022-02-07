import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob, handleInputChange, removeById } from '../../store/jobs';
import "./InputComponent.css";

export const InputComponent = (props) => {

    const { data, } = props;
    const [currentlyWorking, setCurrentlyWorking] = useState(data.currentlyWorking);

    const dispatch = useDispatch();

    const handleRemoveClick = (id) => {
        dispatch(removeById(id));
    }

    const onChange = (e) => {
        const { name, value, checked } = e.target;
        const tmp = { name, value, checked, dataID: data.id }
        dispatch(handleInputChange(tmp));
    }



    return <div id='root-div' className="root-div fadeIn">
        <div className='remove-btn-div'>
            <button onClick={() => handleRemoveClick(data.id)} type="button" className="remove-btn">X</button>
        </div>
        <div className='row justify-content-start'>

            <div className="mt-3 col-6">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    value={data.company}
                    onChange={e => onChange(e)}
                    className="form-control"
                />
            </div>

            <div className="mt-3 col-6">
                <label htmlFor="role" className="form-label">Role</label>
                <input
                    id="role"
                    name="role"
                    type="text"
                    className="form-control"
                    value={data.role}
                    onChange={e => onChange(e)}
                />
            </div>

            <div className="mt-3 col-12">
                <label htmlFor="jobDescription" className="form-label">Job Description</label>
                <textarea
                    id="jobDescription"
                    name="jobDescription"
                    type="text-area"
                    className="form-control text-area"
                    value={data.jobDescription}
                    onChange={e => onChange(e)}
                    placeholder="Job Description" />
            </div>

            <div className="mt-3 col-sm-6 col-md-6 col-lg-4 mb-3">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    className="form-control"
                    value={data.startDate}
                    onChange={e => onChange(e)}
                />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
            </div>

            <div className="mt-3 col-sm-6 col-md-6 col-lg-4 mb-3">
                <label htmlFor="endDate" className="form-label">End Date</label>
                <input type="date"
                    id="endDate"
                    name="endDate"
                    disabled={currentlyWorking}
                    value={data.endDate}
                    text={data.endDate}
                    onChange={e => onChange(e)}
                    className="form-control"
                />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
            </div>

            <div className="mt-3 col-sm-6 col-md-4 col-lg-4 mb-3">
                <label htmlFor="job-description" className="form-label">Job Status</label>
                <div className="form-check form-switch mt-2">
                    <input
                        id="currentlyWorking"
                        name="currentlyWorking"
                        className="form-check-input"
                        type="checkbox"
                        checked={data.currentlyWorking}
                        onChange={e => {
                            setCurrentlyWorking(e.target.checked);
                            onChange(e);
                        }}
                        role="switch"
                    />
                    <label className="form-label" htmlFor="currentlyWorking">I'm currently working</label>
                </div>
            </div>

        </div>

    </div>;
};
