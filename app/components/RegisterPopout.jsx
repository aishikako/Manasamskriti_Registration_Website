import Dropdown from './Dropdown';
import React, { useState } from 'react';

import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';  // Ensure correct import path


const RegisterPopout = ({visible, onClose}) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [parentName, setParentName] = useState('');
    const [parentEmail, setParentEmail] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [district, setDistrict] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');

    const handleOnClose = (e) => {
        if(e.target.id == 'container') onClose();
    };

    const handleSubmit = async () => {

        try {
            // Add a new document with the form data to Firestore
            await addDoc(collection(db, "registrations"), {
                parentName,
                parentEmail,
                studentName,
                studentEmail,
                district,
                school,
                grade,
                selectedDate
                // parentName: parentName,
                // parentEmail: parentEmail,
                // studentName: studentName,
                // studentEmail: studentEmail,
                // district: district,
                // school: school,
                // grade: grade,
                // selectedDate: selectedDate
            });
            console.log("Registration information uploaded to Firebase");
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        // Close the pop-up after submission
        onClose();
      };

    if(!visible) return null;

    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white p-6 rounded w-auto">
                <h1 className="p-3 pb-5 font-semibold text-center text-xl text-red-800">Register For A Test</h1>
                

                <div className="flex flex-col">

                    <div className='flex flex-row space-x-4'>
                        <div className='flex flex-col w-1/2'>
                            <p className="text-gray-700 p-2">Parent First+Last Name</p>
                            <input
                                type="text"
                                className="border border-gray-700 p-2 rounded mb-5"
                                placeholder="First Last"
                                value={parentName}
                                onChange={(e) => setParentName(e.target.value)}
                            />
                        </div>
                        
                        <div className='flex flex-col w-1/2'>
                            <p className="text-gray-700 p-2">Parent Email Address</p>
                            <input
                                type="text"
                                className="border border-gray-700 p-2 rounded mb-5"
                                placeholder="parent@email.org"
                                value={parentEmail}
                                onChange={(e) => setParentEmail(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    
                    
                    <div className='flex flex-row space-x-4'>
                        <div className='flex flex-col w-1/2'>
                            <p className="text-gray-700 p-2">Student First+Last Name</p>
                            <input
                                type="text"
                                className="border border-gray-700 p-2 rounded mb-5"
                                placeholder="First Last"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                            />
                        </div>
                        
                        <div className='flex flex-col w-1/2'>
                            <p className="text-gray-700 p-2">Student Email Address</p>
                            <input
                                type="text"
                                className="border border-gray-700 p-2 rounded mb-5"
                                placeholder="student@email.org"
                                value={studentEmail}
                                onChange={(e) => setStudentEmail(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    
                    <div className='flex flex-row space-x-4'>
                        <div className='flex flex-col w-1/2'>
                            <p className="text-gray-700 p-2">Student School District</p>
                            <input
                                type="text"
                                className="border border-gray-700 p-2 rounded mb-5"
                                placeholder="School District"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                        </div>
                        
                        <div className='flex flex-col w-1/2'>
                            <p className="text-gray-700 p-2">Student High School</p>
                            <input
                                type="text"
                                className="border border-gray-700 p-2 rounded mb-5"
                                placeholder="School Name"
                                value={school}
                                onChange={(e) => setSchool(e.target.value)}
                            />
                        </div>
                        

                    </div>
                    
                    <div className='flex flex-row space-x-4'>
                        <p className="text-gray-700 p-2">Student Grade</p>
                        <input
                            type="text"
                            className="border border-gray-700 p-2 rounded mb-5"
                            placeholder="9"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                        />
                    </div>
                    
                    <div className='flex flex-row space-x-4'>
                        <p className="text-gray-700 p-2">Pick A Test Date</p>
                        <div className="flex items-center mb-5">
                            <div>
                                <Dropdown selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                                {/* {selectedDate && <p className="mt-4 text-lg">Selected Date: {selectedDate}</p>} */}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-row space-x-4'>
                        <button onClick={handleSubmit} className="px-5 py-2 bg-red-900 text-white rounded">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPopout
