var count=0

var songs = ["A","B","C","D"];
var songPath = 'C:\\Users\\kundu\\MusicPlayer\\resources\\';
var imgPath = 'C:\\Users\\kundu\\MusicPlayer\\resources\\img\\';

var a=document.getElementById("audio");


function nextSong(){

    if(count==songs.length-1)
    {
        //console.log("ok");
        count=0;
    }else
    count++;

    console.log(count,songs.length-1);
    console.log(imgPath+songs[count]+".jpg");
    document.getElementById("songimg").src=imgPath+songs[count]+".jpg";
    document.getElementById("audio").src=songPath+songs[count]+ ".mp3";
    a.load();

}

function prevSong()
{
    if(count==0)
    {
        count=songs.length-1;
    }
    else
    count--;
    console.log(count);
    document.getElementById("audio").src=songPath+songs[count]+".mp3";
    document.getElementById("songimg").src=imgPath+songs[count]+".jpg";
    a.load();

}

function generateRandom(min = 0,max =4)
{
   let difference =max-min;

   let rand = Math.random();

   rand = Math.floor(rand * difference);

   rand = rand + min;

   return rand;

}

function shuffleSong()
{
   let randIndex=generateRandom()
   
   console.log(randIndex);

   document.getElementById("audio").src=songPath+songs[randIndex]+".mp3";
   document.getElementById("songimg").src=imgPath+songs[randIndex]+".jpg";
   count=randIndex;
   a.load();

}

