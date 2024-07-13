var compch,rno,result,usrch,rno2; 
var score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,lose:0,tie:0};
// if(score===null){
//   score={
//     wins:0,lose:0,tie:0
//   };
// }

//ANOTHER WAY TO PLAY BY PRESSING STARTING WORDS(R,P,S) FROM KEYBOARD
// document.body.addEventListener('keydown',(event)=>{
// if(event.key==='r'){}
//  else if(  ==='s'){}
// else {}
// }
// });

  document.querySelector('.rock')
  .addEventListener('click',()=>{
    rno=Math.random();
    comp_assign();
    play('Rock');
  }),addEventListener('keydown',(event)=>{
    if(event.key==='r'){
    rno=Math.random();
    comp_assign();
    play('Rock');}
  });

  document.querySelector('.paper')
  .addEventListener('click',()=>{
    rno=Math.random();
    comp_assign();
    play('Paper');
  }),addEventListener('keydown',(event)=>{
    if(event.key==='p'){
    rno=Math.random();
    comp_assign();
    play('Paper');}
  });

  document.querySelector('.scissor')
  .addEventListener('click',()=>{
    rno=Math.random();
    comp_assign();
    play('Scissor');
  }),addEventListener('keydown',(event)=>{
    if(event.key==='s'){
    rno=Math.random();
    comp_assign();
    play('Scissor');}
  });

  document.querySelector('.reset')
  .addEventListener('click',()=>{
   reset();
   localStorage.removeItem('score');
  });

  document.querySelector('.autoplay')
  .addEventListener('click',()=>{
    stop();
    autoplay();
  });

  scoredisplay();
 
  function comp_assign(){
  rno=Math.random();
  if(rno>0 && rno<0.33){
        compch='Rock';
        console.log('computers choice is:Rock' );
      }
      else if(rno<0.66 && 0.33<rno){ 
        compch='Paper';
        console.log('computers choice is:Paper' );
      }
      else{
        compch='Scissor';
        console.log('computers choice is:Scissor' );
      }
      
  }

  function play(x){
      if(x==='Rock'){
        usrch='Rock';
        if(compch==='Rock'){
            result='Oops!!it is a Tie.';
          }
          else if(compch==='Paper'){
            result='Computer Wins.';
          }
          else{
            result='You Win.';
          }
      }
      else if(x==='Paper'){
        usrch='Paper';
        if(compch==='Rock'){
          result='You Win.';
          }
          else if(compch==='Paper'){
            result='Oops!!it is a Tie.';
          }
          else{
            result='Computer Wins.';
          }
      }
      else{
        usrch='Scissor';
        if(compch==='Rock'){
          result='Computer Wins.';
        }
          else if(compch==='Paper'){
            result='You Win.';
          }
          else{
            result='Oops!!it is a Tie.';
            }

      }
      
      //updating the score
      if(result==='You Win.'){
        score.wins++;
        console.log(score.wins);
      }
      else if(result==='Computer Wins.'){
        score.lose++;
        console.log(score.lose);
      }
      else{
        score.tie++;
      }
      
      //storing score in localstorage
      localStorage.setItem('score',JSON.stringify(score));

      //score
      scoredisplay();
      
      //result
      document.querySelector('.p-result')
      .innerHTML=result;

      //moves
      
      document.querySelector('.moves')
      .innerHTML=`You:
          <img class="move-img" src="images/${usrch}.jpg" alt=" ${usrch}">Computer:
          <img class="move-img" src="images/${compch}.jpg" alt=" ${compch}">`;
  }

  function scoredisplay(){
   document.querySelector('.p-score')
  .innerHTML=`score:\nwins:${score.wins}\nlose:
  ${score.lose}\ntie:${score.tie}`;

  }

  function reset(){
  score.wins=0;score.lose=0;score.tie=0;
  scoredisplay();
  document.querySelector('.moves')
  .innerHTML='';
  }

  let isautoplaying=false,intervalid;

  function autoplay(){
  if(!isautoplaying){
   intervalid=setInterval(`
     comp_assign();
     usrch=compch;
     comp_assign();
     play(usrch);` ,1000)
    
    isautoplaying=true;
  }
  else{
    clearInterval(intervalid);
     isautoplaying =false;
  }
  } 
  function stop(){
    const text=document.querySelector('.autoplay');
    if(text.innerText==='Auto Play'){
      text.innerHTML='Stop';
      text.classList.add('stop');
    }
    else{
      text.innerHTML='Auto Play';
      text.classList.remove('stop');
    }
  }
