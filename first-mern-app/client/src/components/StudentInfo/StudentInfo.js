import React from 'react' ;

const studentInfo = props => {
    return(
        <div style={{border: '1px solid black' , padding : '20px'}}>
            <ul style={{listStyle : 'none'}}>
                <li>Name : {props.name}</li>
                <li>Age : {props.age}</li>
            </ul>
        </div>
    );
}

export default studentInfo ;