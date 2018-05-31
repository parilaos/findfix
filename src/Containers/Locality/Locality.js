import React, { Component } from 'react';
import MainInput from '../../Componets/UI/input/MainInput';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

sessionStorage.clear();

class Locality extends Component {
    state= {
           locality: ''
       }

    localityHandler = (event) => {
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
                <div className="container">
                    <div className="col-lg-6 offset-lg-3 col-md-12  col-s-12 col-xs-12">
                        <h4>Βρες τεχνίκο για τον υπολογιστή ή το κινητό σου.</h4>
                            <MainInput changed={this.localityHandler}  placeholder="Βάλε την πόλη σου για να ξεκινήουμε" id='locality'/>
                    </div>
                </div>
            </div>
        );
    }
    }
    
export default Locality;