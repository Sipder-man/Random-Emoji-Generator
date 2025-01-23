const btn1=document.getElementById("btn");
const emoji1=document.getElementById("p");

const emoji=[];
async function getemoji(){
    let response = await fetch("https://emoji-api.com//emojis?access_key=38cf3d6849269b13e15dd5aee766b0104fd1d7b7");
    data =await response.json();

    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}
getemoji();
console.log(emoji);
btn1.addEventListener("click",()=>{
    const randomNum=Math.floor(Math.random()* emoji.length);
    btn1.innerText=emoji[randomNum].emojiName;
    emoji1.innerText=emoji[randomNum].emojiCode;
    
})