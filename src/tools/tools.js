export const truncateText=({text,length=60})=>{
  const ret=text.length > length ? '...' : '';
  text=text.substr(0,length)+ret;
  return text;
}

export const calcAverage=(votes)=>{
  const totalVotes=votes.length;
  const sum=votes.reduce((accum,current)=>accum+current);
  const average = totalVotes ? (sum/totalVotes).toFixed(2) : 0;
  return {
    average,
    totalVotes
  }
}


const keyMaster='appnovation';
export const saveLocal=(obj2Save)=>{
  let saved=localStorage.getItem(keyMaster);
  saved = saved ? JSON.parse(saved) : {};
  const obj=Object.assign(saved,obj2Save);
  localStorage.setItem(keyMaster,JSON.stringify(obj));
}

export const readLocal=(key)=>{
  let saved=localStorage.getItem(keyMaster);
  if(!saved) {
    return {};
  }
  saved=JSON.parse(saved);
  return saved[key];
}
