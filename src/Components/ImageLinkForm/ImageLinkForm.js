import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className="f3 white">
                {'This Magic App can see your face! Give it a try'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className=' f4 pa3 w-70 center' type="text" onChange={onInputChange}  />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-red" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
        
    )
}

export default ImageLinkForm;