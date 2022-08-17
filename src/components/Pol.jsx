import React,{ useState,useEffect,useContext } from 'react';
import Modal from 'react-modal';
import Line from 'rc-progress';

import { PollContext } from './PollContext';
import styles from './pollStyles';

const Pol = () => {
    const {
        question,
        setQuestion,
        answers: voteData,
        setAnswers,
        isModalOpen,
        setIsModalOpen,
    } = useContext(PollContext)
    const [totalVotes, setTotalVotes] = useState(0)
    const [voted, setVoted] = useState(false)

    const closeModal = () => {
        setIsModalOpen(false)
        setTotalVotes(0)
        setVoted(false)
        setQuestion('')
        setAnswers([
            {option:'', votes:0},
            {option:'', votes:0},
            {option:'', votes:0},
            {option:'', votes:0},
        ])
    }

    return (
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        content="Pol Modal"
        style={styles.customStyles}
        >
            <div>
                <h1>{question}</h1>
                <div style={styles.flexColumn}>

                </div>
            </div>
        </Modal>
    )
}

export default Pol