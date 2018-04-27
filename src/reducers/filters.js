import {saveLocal,readLocal} from '../tools/tools';


const initialState={
  image:'',
  description:'',
  rate:''
}
const saveState=readLocal('filter');
const initialState2=Object.assign({},initialState,saveState);

export default (state=initialState2,action)=>{
  const {type}=action;
  if(type==='SET_SORTING') {
    delete action.type;
    const newState=Object.assign({},initialState,action);
    saveLocal({filter:newState});
    return newState;
  }
  return state;
}