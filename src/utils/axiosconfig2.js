import axios from 'axios';


export const instance = axios.create({
    baseURL: 'https://covid19-india-adhikansh.herokuapp.com/',
  //  timeout: 4000,
  //  method: 'POST',
//  headers: {'reqcomingfrom': 'web','Content-Type': 'application/json','lang':'en','accept':'json'}//,'apikey':'ABCD123'}  'Content-Type': 'application/json',  method: 'POST',
// //   
}
);


