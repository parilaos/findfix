import React from 'react';


const stepper = (props) => {
    return ( <div className={`step ${ props.stepperClasses }`}>
          
                {/* <div className="text-center bs-wizard-stepnum">{props.text}</div> */}
                {/* <div className="progress"><div className="progress-bar"></div></div> */}
                <div className="step-letter">{props.text}</div>
        
             </div>)
}


export default stepper;