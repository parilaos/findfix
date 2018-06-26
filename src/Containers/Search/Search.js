import React, { Component } from 'react';
import axios from '../../axios-api';

import Loader from '../../Componets/UI/Loader/Loader';
import InputButton from '../../Componets/UI/input/InputButton';
import History from '../../Componets/History/History';
import Stepper from '../../Componets/UI/Stepper/Stepper';
import { Category } from '../../Config/Category';
import { Brands } from '../../Config/Brands';
import { Issues } from '../../Config/Issues';


class Search extends Component {
  state= {
      searchItems : {
      locality : sessionStorage.getItem('locality'),
      category : sessionStorage.getItem('category') ,
      brand : sessionStorage.getItem('brand') ,
      issue: sessionStorage.getItem('issue') ,
      },
    errorStatus : false,
    loader : false,
    stepper :[{text : 'Περιοχή', stepperClass : 'complete'},
              {text : 'Είδος', stepperClass : 'active'},
              {text : 'Μάρκα', stepperClass : 'disabled'},
              {text : 'Πρόβλημα', stepperClass : 'disabled'}],
}



categoryHandler = (event) => {
  
const stepperClassChange = [...this.state.stepper];
stepperClassChange[1].stepperClass = 'complete';
stepperClassChange[2].stepperClass = 'active';
this.setState({ searchItems : {...this.state.searchItems, category : event.target.value}});

sessionStorage.setItem('category',event.target.value);
} 

brandHandler = (event) => {

  const stepperClassChange = [...this.state.stepper];
  stepperClassChange[2].stepperClass = 'complete';
  stepperClassChange[3].stepperClass = 'active';
  this.setState({searchItems : {...this.state.searchItems, brand : event.target.value}});
  sessionStorage.setItem('brand',event.target.value);
  } 

componentDidUpdate() {
  if (document.getElementById('issues')) {
    document.getElementById('issues').value = '';}
}

issueHandler = (event) => {
  const stepperClassChange = [...this.state.stepper];

  stepperClassChange[3].stepperClass = 'complete';
  this.setState({searchItems : {...this.state.searchItems, issue : event.target.value}});
  sessionStorage.setItem('issue',event.target.value);

  } 

  issueButtonHandler = () => {

    const stepperClassChange = [...this.state.stepper];
    stepperClassChange[3].stepperClass = 'complete';

    this.setState({searchItems : {...this.state.searchItems, issue : this.issueValue.value}});
    sessionStorage.setItem('issue',this.issueValue.value);

    } 
  

 
  deleteHandler = id => () => {
    const stepperClassChange = [...this.state.stepper];
    const searchData = {...this.state.searchItems}; //copy the state
   
    const searchKeys = Object.keys(searchData); //get object keys

   for (var i = id ; i<searchKeys.length; i++) {
    const searchToDelete = searchKeys[i]; //find the key we ar searching for from the id

    if (searchToDelete === 'locality') {
      this.props.history.replace('/');
    }
    
    stepperClassChange[(i)].stepperClass = 'disabled';
   
    searchData[searchToDelete]= null; //set to null
  }
  stepperClassChange[id].stepperClass = 'active';
    this.setState({searchItems :  searchData}); //setState to delete (rerender)
  }

searchHandler = () => {
  const data = sessionStorage.getItem('locality');
  this.setState({loader : true});
  axios.get('/search/locality/'+data)
  .then(response => {
    
    sessionStorage.setItem('shops', JSON.stringify(response.data));
    this.props.history.replace('/shops');
  })
  .catch( (error) => {
    // this.props.history.replace('/');  
    this.setState({errorStatus : true, loader: false});
  });
}

render() {
let element =null;
let history = null;
let searchItemsState = this.state.searchItems;


history = Object.values(this.state.searchItems).map((data,id) => {
  if(data) { 
    return (
    
      <div key={id} className="col-xs-3 col-md-3 col-s-3 col-l-3 col-xl-3">
        <History  value={data} delete={this.deleteHandler(id)}/>
      </div>
    )}
})


if (this.state.loader) { element = <Loader />}
else if (this.state.searchItems.category === null) {
    element = (
        <div>
            <p className="lead">Τι θέλεις να επισκευάσεις;</p>                
                {Category.map( Category => {return (<InputButton key={Category} choice={this.categoryHandler} value={Category}/>);})}
        </div>);
} 
else if (this.state.searchItems.brand === null) {
    const categoryName = this.state.searchItems.category;
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
} else if (this.state.searchItems.issue === null) {
  let issueSearch=Issues[searchItemsState.category];
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

let stepperElement = this.state.stepper.map( el => {return <Stepper key = {el.text} text = {el.text} stepperClasses= {el.stepperClass}/>})


return(

          <div className="container">
            <div className="card">
              <div className="card-body">
                {/*************stepper *************/}
                <div className="d-none d-sm-block">
                  <div className="row bs-wizard" >
                    { stepperElement }
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
);
}
}

export default Search;