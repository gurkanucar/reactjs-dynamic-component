import { createSlice } from '@reduxjs/toolkit'

export const jobs = createSlice({
    name: 'jobs',
    initialState: {
        data: [
            {
                id: Math.floor(Math.random() * 100000),
                company: '',
                role: '',
                jobDescription: '',
                startDate: '',
                endDate: '',
                currentlyWorking: false
            }
        ]
    },

    reducers: {
        addJob: (state) => {
            const newJob = {
                id: Math.floor(Math.random() * 100000),
                company: '',
                role: '',
                jobDescription: '',
                startDate: '',
                endDate: '',
                currentlyWorking: false
            };
            state.data = [...state.data, newJob];
        },
        removeById: (state, action) => {
            const list = [...state.data];
            list.splice(state.data.findIndex(x => x.id === action.payload), 1);
            state.data = list;
        },
        handleInputChange: (state, action) => {
            const { name, value, checked, dataID } = action.payload;
            let list = [...state.data];
            list.forEach(x => {
                if (x.id === dataID) {
                    // checking for switch, because Switch Element's value is coming from "checked" property, not "value"
                    // you can refactor this better for multiple switches
                    name !== 'currentlyWorking' ? x[name] = value : x[name] = checked;
                }
            });
            state.data = list;
        },
    },


})

export const { addJob, removeById, handleInputChange } = jobs.actions
export default jobs.reducer