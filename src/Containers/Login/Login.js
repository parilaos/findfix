import React, { Component } from 'react';
import Input from '../../Componets/UI/input/input';
import Button from '../../Componets/UI/Button/Button';
import Spinner from '../../Componets/UI/Spinner/Spinner';
import axios from '../../axios-api';
import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const cookies = new Cookies();

class Login extends Component {


state = {
    partner : {
        email: {elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'Email'
                },
                value : ''
            },
        password: {elementType : 'input',
        elementConfig : {
            type : 'password',
            placeholder : 'Κωδικός'
        },
        value : ''
    }

    },
    loading: false,
    error : false,
    errorMessage : null,
}

orderHandler = ( event ) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const formData = {};
    for (let formElementIdentifier in this.state.partner) {
        formData[formElementIdentifier] = this.state.partner[formElementIdentifier].value;
    }
    const signup = {
        email: formData.email,
        password: formData.password,
    }
    axios.post( '/partner/login', signup )
        .then( response => {
            this.setState( { loading: false } );
            cookies.set('token', response.data.token, {maxAge:  24 * 60 * 60 * 1000}); 
            this.props.history.replace('/dashboard')
        } )
        .catch( error => {
            this.setState( { loading: false, error : true,
                errorMessage : error.response.data.message});
        } );
}


inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.partner
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({partner: updatedOrderForm});

}

render () {
    let error = null;
    if(this.state.error) {
       error = <div className="alert alert-warning" role="alert" >{this.state.errorMessage}</div>
    }

    const formElementsArray = [];
    for (let key in this.state.partner) {
        formElementsArray.push({
            id: key,
            config: this.state.partner[key]
        });
    }
    let form = (
        <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            ))}
               <Button btnType="Success">Σύνδεση</Button>

        </form>
    );
    if ( this.state.loading ) {
        form = <Spinner />;
    }
    return (
        <div>
            <div className="container">
                <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-s-12 col-xs-12">
                    <h4>Σύνδεση</h4>
                    {error}
                    {form}
                    <Link to="/forgot"><p>Ξέχασες τον κωδικό σου;</p></Link>
                </div>
            </div>
        </div>
    );
}
}

  export default Login;