import React, { useEffect, useState } from 'react';
import { AddButton } from '../components/AddButton/AddButton';
import { InputComponent } from '../components/InputComponent/InputComponent';


export const Home = () => {

    const [data, setData] = useState([{
        id: 1,
        company: '',
        role: '',
        jobDescription: '',
        startDate: '',
        endDate: '',
        currentlyWorking: true
    },
    {
        id: 2,
        company: '',
        role: '',
        jobDescription: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false
    },
    ]);

    const generateRandomId = () => {
        return Math.floor(Math.random() * 100000);
    }

    const onChange = (e, dataId) => {
        const { name, value, checked } = e.target;
        let list = [...data];
        list.forEach(x => {
            if (x.id === dataId) {
                // checking for switch, because Switch Element's value is coming from "checked" property, not "value"
                // you can refactor this better for multiple switches
                name !== 'currentlyWorking' ? x[name] = value : x[name] = checked;
            }
        });
        setData(list);
    };

    const handleRemoveClick = id => {
        const list = [...data];
        list.splice(data.findIndex(x => x.id === id), 1);
        setData(list);
    };

    const handleAddClick = () => {
        setData([...data, {
            id: generateRandomId(),
            company: '',
            role: '',
            jobDescription: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false
        }]);
    };

    return <div>

        <AddButton onClick={handleAddClick} />

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {
                data.map((item, index) => {
                    return <InputComponent
                        key={index}
                        data={item}
                        onChange={onChange}
                        handleRemoveClick={handleRemoveClick}
                    />
                })
            }
        </div>

    </div>;
};
