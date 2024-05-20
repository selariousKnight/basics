import './list.css';
import {useState} from 'react';
let lableArr = ["Animals","Cars","Humans","Buildings","Aliens"];
function ListOfCheckBoxes() {
  let [state,changeState] = useState(false);
  let [allState,allStateCheck] = useState(new Array(4).fill(false));

  let allChangeCheckbox = (e)=>{
    changeState(e.target.checked);
    allStateCheck(allState.fill(e.target.checked))

  }
 
  let individualChange=(index,e)=>{
    const updateBox = [...allState];
    updateBox[index] = e.target.checked;
    changeState(updateBox);

    allStateCheck(updateBox.every(isChecked => isChecked)|| !updateBox.some(isChecked => isChecked));
  }
  // function changeCheckBox(){
  //   changeState(!state);
  //   allStateCheck(!allState)
    
  // }
  return(
    <>
    <input type = "Checkbox" onChange = {allChangeCheckbox} /><label htmlFor='finalCheckBox'>All</label>
    {lableArr.map(ele=> <div><input onChange={individualChange} type = "checkbox" isChecked = {allState} /><lable htmlFor = {ele}>{ele}</lable></div>)}
    </>
  )
}

export default ListOfCheckBoxes;