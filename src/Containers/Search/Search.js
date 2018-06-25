import React, { Component } from 'react';
import axios from '../../axios-api';

import InputButton from '../../Componets/UI/input/InputButton';
import History from '../../Componets/History/History';
import { Category } from '../../Config/Category';
import { Brands } from '../../Config/Brands';
import { Issues } from '../../Config/Issues';


class Search extends Component {
  state= {
    locality : sessionStorage.getItem('locality'),
    category : sessionStorage.getItem('category') ,
    brand : sessionStorage.getItem('brand') ,
    issue: sessionStorage.getItem('issue') ,
    errorStatus : false
}



categoryHandler = (event) => {
this.setState({category : event.target.value});
sessionStorage.setItem('category',event.target.value);
} 

brandHandler = (event) => {
  this.setState({brand : event.target.value});
  sessionStorage.setItem('brand',event.target.value);
  } 

componentDidUpdate() {
  if (document.getElementById('issues')) {
    document.getElementById('issues').value = '';}
}

issueHandler = (event) => {
  this.setState({issue : event.target.value});
  sessionStorage.setItem('issue',event.target.value);

  } 

  issueButtonHandler = () => {
    this.setState({issue : this.issueValue.value});
    sessionStorage.setItem('issue',this.issueValue.value);

    } 
  

 
  deleteHandler = id => () => {
    const searchData = {...this.state}; //copy the state
    const searchKeys = Object.keys(searchData); //get object keys
    const searchToDelete = searchKeys[id]; //find the key we ar searching for from the id

    if (searchToDelete === 'locality') {
      this.props.history.replace('/');
    }
    searchData[searchToDelete]= null; //set to null

    this.setState(searchData); //setState to delete (rerender)
  }

searchHandler = () => {
  const data = sessionStorage.getItem('locality')
  axios.get('/shop/locality/'+data)
  .then(response => {
    sessionStorage.setItem('shops', JSON.stringify(response.data));
    this.props.history.replace('/shops');
  })
  .catch( (error) => {
    // this.props.history.replace('/');  
    this.setState({errorStatus : true});
  });
  console.log(data);
}

render() {
let element =null;
let history = null;

history = Object.values(this.state).map((data,id) => {
  if(data) { 
    return (
    
      <div key={id} className="col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3">
        <History  value={data} delete={this.deleteHandler(id)}/>
      </div>
    )}
})

if ( this.state.category === null) {
    element = (
        <div>
            <p className="lead">Τι θέλεις να επισκευάσεις;</p>                
                {Category.map( Category => {return (<InputButton key={Category} choice={this.categoryHandler} value={Category}/>);})}
        </div>);
} 
else if (this.state.brand === null) {
    const categoryName = this.state.category;
    let brandSearch = Brands[categoryName];
    if (brandSearch) { 
      element = (
      <div>
      <p className="lead">Επέλεξε Μάρκα</p>                
          {brandSearch.map( brandlName => {return (<InputButton key={brandlName} choice={this.brandHandler} value={brandlName}/>);})}
      </div>) }
    else  { 
     element = (
      <div>
      <p className="lead">Τι μάρκα είναι;</p>                
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="π.χ Apple..." value=""/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.brandHandler}>Επόμενο</button>
        </div>
      </div>
      </div>) }
} else if (this.state.issue === null) {
  let issueSearch=Issues[this.state.category];
  if (issueSearch) {
    element = (
      <div>
      <p className="lead">Επέλεξε βλάβη</p>                
          {issueSearch.map(issueName => {return (<InputButton key={issueName} choice={this.issueHandler} value={issueName}/>);})}
      </div>) }
      else{
        element = (
        <div>
        <p className="lead">Ποιό είναι το πρόβλημα;</p>                
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="π.χ. σπασμένη οθόνη" id="issues" ref= {el => this.issueValue = el} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={ (e) =>{ this.issueButtonHandler();}}>Επόμενο</button>
          </div>
        </div>
        </div>)}
} else { 

  element =(
  <div>
    <input type="button" className="btn btn-outline-info btn-block" onClick={this.searchHandler} value="Αναζήτηση" />  
  </div>
)}

let error = null;
    if(this.state.errorStatus) {
       error = <div className="alert alert-warning" role="alert" >Ουπς! κάτι δεν πηγε καλά. </div>
    }



return(
    
        <div className="starter-template">
          <div className="container">
            <div className="card">
              <div className="card-body">
                {/*************stepper *************/}
                <div className="d-none d-sm-block">
                  <div className="row bs-wizard" >
                  
                    <div className="col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3 bs-wizard-step complete">
                      <div className="text-center bs-wizard-stepnum">Περιοχή</div>
                      <div className="progress"><div className="progress-bar"></div></div>
                      <div className="bs-wizard-dot"></div>
                    </div>
                    
                    <div className="col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3 bs-wizard-step complete">
                      <div className="text-center bs-wizard-stepnum">Είδος</div>
                      <div className="progress"><div className="progress-bar"></div></div>
                      <div className="bs-wizard-dot"></div>
                    </div>
                    
                    <div className="col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3 bs-wizard-step active">
                      <div className="text-center bs-wizard-stepnum">Μάρκα</div>
                      <div className="progress"><div className="progress-bar"></div></div>
                      <div className="bs-wizard-dot"></div>
                    </div>
                    
                    <div className="col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3 bs-wizard-step disabled">
                      <div className="text-center bs-wizard-stepnum">Step 4</div>
                      <div className="progress"><div className="progress-bar"></div></div>
                      <div className="bs-wizard-dot"></div>
                    </div>
                  </div>
                </div>
        
                <div className="row">
                  {history}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                { element }
              </div>
            </div>
                { error }
          </div>
        </div>
);
}
}

export default Search;