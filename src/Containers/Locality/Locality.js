import React, { Component } from 'react';
import MainInput from '../../Componets/UI/input/MainInput';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();



class Locality extends Component {
    state= {
           locality: ''
       }

    localityHandler = (event) => {
        
        sessionStorage.clear();
        const google = window.google;
        let place;
        let componentForm = {
            locality: 'long_name'
        };

    
        let input = document.getElementById('locality');
        let options = {
            componentRestrictions: {
            country: 'gr'
                }
            };
    
            let autocomplete = new google.maps.places.Autocomplete(input, options);
    
            google.maps.event.addListener(autocomplete, 'place_changed',  () => {
    
            place = autocomplete.getPlace();    

            for (var component in componentForm) {
              document.getElementById(component).value = '';
              document.getElementById(component).disabled = false;
            }
    
            // Get each component of the address from the place details
            // and fill the corresponding field on the form.
            for (var i = 0; i < place.address_components.length; i++) {
              var addressType = place.address_components[i].types[0];
              if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];
                this.setState({locality : val});
                sessionStorage.setItem('locality', val); 
                this.props.history.replace('/search')
                console.log(this.state.locality);
              }
            }

            });       
    };

    render () {
    
     
        return (
            <div>
                <div className="photo">
                    <div className="container"> 
                        <h4 id="photo">Βρες τεχνικό για τον υπολογιστή ή το κινητό σου.</h4>
                        <div className="col-lg-6 offset-lg-3 col-md-12  col-s-12 col-xs-12 align-middle" id="photo">   
                            <MainInput changed={this.localityHandler}  placeholder="Βάλε την πόλη σου για να ξεκινήουμε" id='locality'/>
                        </div>
                    </div>
                </div>
                <div className="container"> 
                    <div className="how">
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
                </div>
                <div className="container"> 
                    <div className="partner">
                            <div className="col-lg-4 offset-lg-8 col-md-4 offset-md-8 col-s-12 col-xs-12">
                                <p>είσαι τεχνικός υπολογιστών και κινητών και θέλεις να προωθήσεις την δουλειά σου; <br /> κάνε εγγραφή στο <strong>FindFix</strong> και απέκτησε περισσοτερους πελάτες.</p>
                            </div>  
                    </div>
                </div>
            </div>
        );
    }
    }
    
export default Locality;