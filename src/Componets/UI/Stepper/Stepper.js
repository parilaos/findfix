import React from 'react';


const stepper = (props) => {
    return ( <div className={`col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3 bs-wizard-step ${ props.stepperClasses }`}>
            
                <div className="text-center bs-wizard-stepnum">{props.text}</div>
                <div className="progress"><div className="progress-bar"></div></div>
                <div className="bs-wizard-dot"></div>
             </div>)
}


export default stepper;