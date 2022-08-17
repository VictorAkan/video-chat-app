import React,{ createContext } from "react";
import { useState } from "react";

export const PollContext = React.createContext()

const PollContextProvider = ({ children }) => {
    const [question, setQuestion] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [answers, setAnswers] = useState([
        {option:'', votes:0},
        {option:'', votes:0},
        {option:'', votes:0},
        {option:'', votes:0},
    ])

    return (
        <PollContext.Provider value={{ 
            question,setQuestion,answers,setAnswers
        }}
        >
            { children }
        </PollContext.Provider>
    )
}

export default PollContextProvider