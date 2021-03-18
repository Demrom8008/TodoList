import React, {useState} from "react";
import './Modal.css';

function Modal() {
    const [btn, setBtn] = useState(false)

    return (
        <React.Fragment>
            <button onClick={() => setBtn(true)}>Open modal</button>

            {btn && (
                <div className={'modal'}>
                    <div className={'modal-body'}>
                        <h1>Modal title</h1>
                        <p>Hello from modal!</p>
                        <button onClick={() => setBtn(false)}>Close modal</button>
                    </div>
                </div>)}
        </React.Fragment>
    )
}

export default Modal;