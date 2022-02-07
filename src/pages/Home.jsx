import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddButton } from '../components/AddButton/AddButton';
import { InputComponent } from '../components/InputComponent/InputComponent';
import { addJob, handleInputChange } from '../store/jobs';


export const Home = () => {

    const storageDatas = useSelector(state => state.jobs.data);
    const dispatch = useDispatch();


    return <div>

        <AddButton onClick={() => dispatch(addJob())} />

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {
                storageDatas.map((item, index) => {
                    return <InputComponent
                        key={index}
                        data={item}
                    />
                })
            }
        </div>

    </div>;
};
