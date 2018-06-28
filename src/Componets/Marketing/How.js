import React from 'react'


const how = () => {
 return(<div className="how">
    <div className="container"> 
        <h5>Πως δουλέυει</h5>
        <div className="divider"></div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-s-12 col-xs-12">
                <span className="how-title">Βήμα 1</span>
                <p>Βάζεις την περιοχή ή τον ταχυδρομικό κωδικό που σε ενδιαφέρει</p>
                <img src="../../img/step1.png" alt="step1" height="80px" />
            </div> 
            <div className="col-lg-4 col-md-4 col-s-12 col-xs-12">
                <span className="how-title">Βήμα 2</span>
                <p>Περιγράφεις την συσκευή και το πρόβλημα που έχεις</p>
                <img src="../../img/step2.png" alt="step2" height="80px" />
            </div> 
            <div className="col-lg-4 col-md-4 col-s-12 col-xs-12">
                <span className="how-title">Βήμα 3</span>
                <p>Επιλέγεις έναν τεχνικό απο την λίστα βάση βαθμολογίας ή απόστασης</p>
                <img src="../../img/step3.png"  alt="step3" height="80px" />
            </div>  
        </div>
    </div>
</div>)
}

export default how;