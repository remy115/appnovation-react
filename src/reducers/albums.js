import {saveLocal,readLocal} from '../tools/tools';

import jquery from '../images/jquery_logo.gif';
import HTML5_logo from '../images/HTML5_logo.svg';
import logocss3 from '../images/logocss3.png';
import js from '../images/js-logo.png';
import react from '../images/react-logo.svg';
import angular from '../images/angular-logo.jpg';

import mongo from '../images/mongo-logo.png';
import mysql from '../images/mysql-logo.png';
import oracle from '../images/Oracle_12c-logo.png';
import postgres from '../images/postgresql-logo.png';

let initialState=[
  {
    id:'front-end',
    title:'Front-end Logos',
    photos:[
      {
        
        id:'p1',
        image:jquery,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
        votes:[5,4,4,5,4],
    
      },
      {
        id:'p2',
        image:HTML5_logo,
        description:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search`,
        votes:[2,3]
      },
      {
        id:'p3',
        image:logocss3,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
        votes:[1,4]
      },
      {
        id:'p4',
        image:js,
        description:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a`,
        votes:[2,3,1]
      },
      {
        id:'p5',
        image:react,
        description:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem`,
        votes:[2]
      },
      {
        id:'p6',
        image:angular,
        description:`The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        votes:[3]
      },
    ]
  },



  {
    id:'back-end',
    title:'Back-end Logos',
    photos:[
      {
        id:'p1',
        image:mongo,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
        votes:[5,4,4,5,4],
    
      },
      {
        id:'p2',
        image:mysql,
        description:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search`,
        votes:[2,3]
      },
      {
        id:'p3',
        image:oracle,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
        votes:[1,4]
      },
      {
        id:'p4',
        image:postgres,
        description:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a`,
        votes:[2,3,1]
      }
    ]
  }
];

const saveStateLocal=(state)=>{
  const votes=state.map(elem=>{
    const votes=elem.photos.map(elem=>{
      return {
        id:elem.id,
        votes:elem.votes
      }
    });
    return {
      id:elem.id,
      votes
    }
  });
  saveLocal({votes});
}

const savedState=readLocal('votes');
if(savedState && savedState.length) {
  initialState=initialState.map(elem=>{
    const local=savedState.find(elemLocal=>elemLocal.id===elem.id);
    if(local) {
      const savedVotes=local.votes;
      // const initialVotes=elem.photos;
      elem.photos=elem.photos.map(photo=>{
        const photoLocal=savedVotes.find(elem=>elem.id===photo.id);
        return Object.assign(photo,photoLocal);
      });      
    }

    return elem;
  });
}

export default (state=initialState,action)=>{
  const {type}=action;
  // console.log('action',action);
  if(type==='VOTE') {
    const {id,photoId,stars}=action;
    const newState=state.map(elem=>{
      if(id===elem.id) {
        elem.photos=elem.photos.map((elem,index)=>{
          if(elem.id===photoId) {
            const votes=Array.from(elem.votes);
            votes.push(stars);
            elem.votes=votes;
          }
          return elem;
        });
      }
      return elem;
    });
    saveStateLocal(newState);
    return newState;
  }

  return state;
}