import React , {Component} from 'react' ;
import Student from './containers/Student/Student' ;

export default class App extends Component {
  render(){
    return(
      <div>
        <h1 style={{textAlign : 'center'}}>Student Details : </h1>
        <Student />
      </div>

    );
  }
}