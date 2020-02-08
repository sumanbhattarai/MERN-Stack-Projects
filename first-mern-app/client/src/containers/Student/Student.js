import React from 'react' ;
import StudentInfo from '../../components/StudentInfo/StudentInfo' ;
import axios from 'axios' ;

export default class Student extends React.Component{
    state={
        student : [],
        isBusy : true ,
        error : false
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/student')
        .then(response=>{
            const data = response.data ;
            this.setState({
                student : data ,
                isBusy : false
            })
        }).catch(error =>{
            this.setState({
                error : true
            })
        })
    }

    render(){
        if(this.state.isBusy && !this.state.error){
            return(
                <p style={{textAlign:'center'}}>Loading...</p>
            )
        } else if (this.state.error){
            return <p style={{textAlign : 'center'}}>Ops ! Something went wrong.</p>
        } else {
            return (
                <div style={{display : 'flex'}}>
                    {this.state.student.map((student , index)=>{
                        return <StudentInfo key={index} name={student.name} age={student.age} />
                    })}
                </div>
            );
        }
    }
}