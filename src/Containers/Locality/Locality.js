import React, { Component } from 'react';
import MainInput from '../../Componets/UI/input/MainInput';


import Partner from '../../Componets/Marketing/Partner';
import How from '../../Componets/Marketing/How';



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
     let x = window.innerWidth;
     console.log(x);
     
        return (
            <div>
                <div className="photo">
                    <div className="container"> 
                        <h4 id="photo">Βρες τεχνικό για τον υπολογιστή ή το κινητό σου.</h4>
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2  col-s-12 col-xs-12">   
                            <MainInput changed={this.localityHandler}  placeholder="Πόλη ή Τ.Κ." id='locality'/>
                        </div>
                    </div>
                </div> 
                <How />
                <Partner />
            </div>
        );
    }
    }
    
export default Locality;