var count=0

var songs = ["A.mp3","B.mp3","C.mp3","D.mp3"];
var path = 'C:\\Users\\kundu\\MusicPlayer\\resources\\';
var a=document.getElementById("audio");


function nextSong(){

    if(count==songs.length-1)
    {
        //console.log("ok");
        count=0;
    }else
    count++;

    console.log(count,songs.length-1);
    document.getElementById("audio").src=path+songs[count];
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
    document.getElementById("audio").src=path+songs[count];
    a.load();

}

