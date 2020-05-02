import React, { Component } from 'react'
import Home from './Home';
import {instance} from '../utils/axiosconfig';
import {Input} from 'reactstrap';

export default class Main extends Component {
    constructor(props) {
        super(props)
    this.createSelectItems=this.createSelectItems.bind(this);
    this.onDropdownSelected=this.onDropdownSelected.bind(this);
        this.state = {
             countries:[],
             confirmed:0,
             death:0,
             recovered:0,
             date:""
        }
    }

    componentDidMount(){
instance.get('/countries')
.then((res) => {
    let country=["Choose Country"];
    for(let a of res.data){
        country.push(a.Slug);
    }
    this.setState({countries:country});
    console.log(this.state.countries);
}).catch(e=>alert("Connect to internet"));
    }


    createSelectItems() {
       let country=this.state.countries;
        let items = [];         
        for (let i of country) {  
             items.push(<option key={i} value={i}>{i.toUpperCase()}</option>);   
        }
        return items;
    }  
   
   onDropdownSelected(e) {
       console.log("inside ...");
     let  country=e.target.value;
       console.log("THE VAL", e.target.value);
       instance.get(`/country/${country}`)
.then((res) => {
    let arr=res.data.splice(-1)[0];
    if(typeof arr!=='undefined'){
        console.log("total confirmed",arr.Confirmed)
        console.log("total recovered",arr.Recovered)
        console.log("total death",arr.Deaths)
        console.log("total death",arr.Date)
        this.setState({...this.state,confirmed:arr.Confirmed,recovered:arr.Recovered,death:arr.Deaths,date:arr.Date});
    }else{
        this.setState({...this.state,confirmed:"NA",recovered:"NA",death:"NA"})
    }
  
       console.log(res.data.splice(-1));
}).catch(e=>alert("Connect to internet"));
       
   }
    
    render() {
        return (
            <div className="container">
                <Home total={this.state.confirmed} recover={this.state.recovered} dead={this.state.death}/>
                <Input type="select" onChange={this.onDropdownSelected} label="Select" className="mt-5" md={5}>
       {this.createSelectItems()}
  </Input>
            </div>
        )
    }
}
