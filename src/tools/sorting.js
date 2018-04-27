import {calcAverage} from './tools';

export default (photos,sorting)=>{
  const {image,description,rate}=sorting;
  if(!image && !description && !rate) {
    return photos;
  }


  const array=Array.from(photos);

  array.sort((a,b)=>{
    if(rate) {
      const averageA=parseFloat(calcAverage(a.votes).average);
      const averageB=parseFloat(calcAverage(b.votes).average);
      // console.log(a.votes,b.votes);
      
      if(rate==='up') {
        return averageA > averageB;
      } else {
        return averageA < averageB;
      }
    } else if(description) {
      if(description==='up') {
        return a.description > b.description;
      } else {
        return a.description < b.description;
      }
    } else if(image) {
      if(image==='up') {
        return a.image.toString() > b.image.toString()
      } else {
        return a.image.toString() < b.image.toString()
      }
    }
    return 1;
  });

  return array;
}