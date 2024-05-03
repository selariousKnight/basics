import {useState} from 'react'
import './App.css';

function CheckBoxRunner(){
  const [isChecked,changeState] = useState(false);
  const [count,totalCount] = useState(0)
  let message;
  let countMsg 
  const CheckedBox=()=>{ 
    changeState(!isChecked);

    totalCount(count+1)
  }
  if(isChecked&& count <= 10){
    message = `Hey Button is Checked!!!!!`;
    
    countMsg = `Your Are On The Right Track`;
  }
  else if(isChecked && count > 21){
    message = `You got Some Penis`;
    countMsg = `You can Fuck this many Chicks ${count}`
  }
  else{
    message = `Hey Button is Not Checked!!!`;
    countMsg = `You Got some bills to Pay You Know!!!`
  }
  return(

    <>
    <lable>Please Check to show the message</lable>
    <input type='checkBox' checked = {isChecked} onChange={CheckedBox}/>
    <p>{count}</p>
    <p>{countMsg }</p>
    <p>{message}</p>
    </>

  )
}



function App() {
  return (
    <CheckBoxRunner/>
  );
}

export default App;
