console.log("welcome to spotify")
//intialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgresBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Dile ummid toda hai",filePath:"songs/1.mp3",coverPath:"img/1.jpg"},
    {songName:"Lag jawe na najar",filePath:"songs/2.mp3",coverPath:"img/2.jpg"},
    {songName:"Khwab ankho me ab",filePath:"songs/3.mp3",coverPath:"img/3.jpg"},
    {songName:"Chhor aaye hum bo",filePath:"songs/4.mp3",coverPath:"img/4.jpg"},
    {songName:"temp",filePath:"songs/5.mp3",coverPath:"img/5.jpg"},
    {songName:"temp",filePath:"songs/6.mp3",coverPath:"img/6.jpg"},
    {songName:"temp",filePath:"songs/7.mp3",coverPath:"img/7.jpg"},
    {songName:"temp",filePath:"songs/8.mp3",coverPath:"img/8.jpg"},
    {songName:"temp",filePath:"songs/9.mp3",coverPath:"img/9.jpg"},
]


songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songText')[0].innerText=songs[i].songName;

});

//handle play pause
masterPlay.addEventListener('click',()=>
{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause'); 
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
      
}
});


//listen to events
audioElement.addEventListener('timeupdate',()=>{
console.log('timeUpdate');
//seekbar update
progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
myProgresBar.value=progress;
})

myProgresBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgresBar.value*audioElement.duration)/100);
});

const makeAllplay=()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     makeAllplay();
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-circle-pause');
     songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause'); 
        masterPlay.classList.remove('fa-play-circle');
    }
    )
});

document.getElementById('previous').addEventListener(('click'),()=>{
 if (songIndex>0){
 songIndex -=1;
 } 
 else{
    songIndex=0;
 }
 audioElement.src=`songs/${songIndex+1}.mp3`;
 audioElement.currentTime=0;
 audioElement.play();
 masterPlay.classList.add('fa-circle-pause'); 
 masterPlay.classList.remove('fa-play-circle');
})
 document.getElementById('next').addEventListener(('click'),()=>{
    if (songIndex>9){
        songIndex=0;
  
    } 
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause'); 
    masterPlay.classList.remove('fa-play-circle');
})
