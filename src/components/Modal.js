import React from 'react'
import { ReactComponent as Close } from '../assets/icon/close.svg'

const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modal'>
            <div className='modal-content'>
                <Close onClick={props.onClose} />
                <div className='modal-header'>
                    <h4 className='modal-title'>modal title</h4>
                </div>
                <div className='modal-body'>
                    this is modal content
                </div>
            </div>
        </div>
    )
}

export default Modal