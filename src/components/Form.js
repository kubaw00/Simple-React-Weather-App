import React from 'react';

const Form = props => {
    return (  
        <form onSubmit={props.submit}>
            <input 
            onChange={props.change} 
            type="text"
            placeholder="Podaj nazwę miasta"
            value={props.value}
            
            />
           
        </form>  
    );
}
 
export default Form;