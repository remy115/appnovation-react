
export const votes=({id,photoId,stars})=>{
  // console.log({type:'VOTES',photoId,stars});
  return {
    type:'VOTE',
    id,
    photoId,
    stars
  }
}
