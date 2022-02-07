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
        currentlyWorking: false
    },
    ]);

    const generateRandomId = () => {
        return Math.floor(Math.random() * 100000);
    }

    const handleInputChange = (e, dataId) => {
        const { id, value, checked } = e.target;
        let list = [...data];
        list.forEach(x => {
            //checking for switch, because value coming from checked propery.
            // you can reafactor this better for switches
            if (x.id === dataId && id !== 'currentlyWorking') {
                x[id] = value;
            }
            else if (x.id === dataId && id === 'currentlyWorking') {
                x[id] = checked;
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
                        keyy={index}
                        data={item}
                        handleInputChange={handleInputChange}
                        handleRemoveClick={handleRemoveClick}
                    />
                })
            }
        </div>

    </div>;
};
