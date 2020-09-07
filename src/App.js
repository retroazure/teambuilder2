  import React,  {useState} from 'react';
  import './App.css';
  import Form from './components/Form';
  import { v4 as uuid } from 'uuid';
  import Member from './components/Member';

  const memberValues = [
  {
    id: uuid(),
    name: 'John',
    email: 'johnMaya@gmail.com',
    role: 'Software Engineer',
  },
  ];

  const formValues = [
    {
      name: '',
      email: '',
      role: '',
    },
  ];

function App() {

  const [tmembers, setTmembers] = useState(memberValues);

  const [formValue, setFormValue] = useState(formValues);

  console.log(tmembers);

  const onInputChange = evt => {

    const { name } = evt.target;

    const { value } = evt.target;

    setFormValue({...formValue, [name] : value});
    
 
  }

  const onSubmitChange = evt => {

    evt.preventDefault();

    if(!formValue.name.trim() || !formValue.email.trim() || !formValue.role){
      console.log("Working");
      return;
    }

    const newMember = {...formValue, id:uuid()};
    
    setTmembers([newMember, ...tmembers]);
    setFormValue(formValues);
    
    
  }

  return (
    <div className="App">
      <Form 
      values={formValue}
      onInput = {onInputChange}
      onSubmit = {onSubmitChange}
      />

      {
      tmembers.map(member =>{
        return(
          <Member key={member.id} details={member}/>
        )
      })
      }

    </div>
    
  );
}

export default App;
