import React from 'react';


function Form(props){
    const {values, onInput, onSubmit} = props;
    
    return (
    <form className='form-container'  onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Add a Team Member</h2>
            <button>Submit</button>
        </div>

        <div className='form-group inputs'>
            <h4>General Information</h4>

            <div className="name-container">
            <label>Name:&nbsp;

            <input type='text' 
            placeholder="Type a name" 
            maxLength="10" 
            name="name"
            value={values.name}
            onChange={onInput}
            ></input>
            </label>
            </div>
            

            <div className="email-container">
            <label>Email:&nbsp;
            <input type='text'
            placeholder="Type a name" 
            maxLength="30" 
            name ="email"
            value={values.email}
            onChange={onInput}
            >
            </input>
                
            </label>
            </div>

            <div className="role-container">
            <label>Role:&nbsp;
            <select name='role' value={values.role} onChange={onInput}>
                <option values=''>Select a Role</option>~
                <option values='Software'>Software Engineer</option>
                <option values='Project'>Project Manager</option>
                <option values='Dev'>FullStack Developer</option>

            </select>

            </label>
            </div>
            
        </div>
    </form>
    )
};

export default Form;
