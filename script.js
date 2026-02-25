const pages = [
  {
    text: "hey pearlo i wanted to talk about something bohot dino se",
    bear: "images/sad-bear.png",
    button: "images/hmm-button.png"
  },
  {
    text: "kuch dino se im getting angry har subha and making you suffer cuz of it and its really my fault by not realising that despite ala your still trying. sometimes i just see your faults only and i js react accordingly not realising youre ina bad condition too and one more thing becuz i dont realise this kavi kavi is ki (and im not giving a bahana ik its my fault) every time im concern about you, u js reassures that youre fine and i do realise ur not but thats your strenght and thats js makes me belive that youre such a strong girl and cuz of that i forgot youre still a lil babbyy, my babbyy ( im referring to aj when i wasnt concerned about your leg pain).",
    bear: "images/hurt-bear.png",
    button: "images/acha-button.png"
  },
  {
    text: "and you have to realise too na ki why im getting angry, ive told you several baar i dont like getting left randomly or being ignored ik those were not your intentions but still i cant read your mind hamesha na baby. remember when tum bhaiya se baat krri thi and didnt know about that but tumhe pareshaan bhi nhi krna tha so i just let go but next subha you kinda teased me about ki 'tum call nhi kr skte the usne kaise kiya' then i kinda snapped about it then tum troll krne lggyi and hasne lgg gyi to bolo gussa nhi ayega pearlo then it made me more mad then maine boldiya tha gusse me then fir tum gussa hgyi. and when im in that state every problem we have rn, the past, things im uncomfortabe with and every thing js remind hojati dimag me and i hate it i js wish koi lobotomy dede mujhe. we cant keep this behaviour na and i can see your really getting affected by it. ",
    bear: "images/angry-bear.png",
    button: "images/huh-button.png"
  },
  {
    text: "remember youve been asking for solutions and me too cuz we dont be like this so ive been thinking for a while and ive realised ki were js ina loop that we keep repeating, for example youll do something unintentionally which will either confuse me or make me unconfortabe ya to ill adress it ya ill keep it to my self then fir kuch argument hoga uspe fir well go shant so it a loop you see and i really wanna break it. so im suggesting one thing, we know future arguments honge and we will hurt each other intentionally ya unintentionally and thats a fact but what i want us to do when that happens its first well calm down not for a whole day but for few minutes or hours and someone has to break the ice and talk about it and well never pretend that that never happend after calming down cuz ignoring the problem wont do anything but well adress about it and share how ech person felt during it and no one will get defensive but will let the other person talk first and then well acknowledge our mistakes and never repeat it i think this will work if we follow it.",
    bear: "images/smart-bear.png",
    button: "images/huh-button.png"
  }
];

let i = 0;

const bear = document.getElementById("bear");
const text = document.getElementById("text");
const btn = document.getElementById("mainBtn");
const windowBox = document.getElementById("window");
const choices = document.getElementById("choices");
const phone = document.getElementById("phone");
const topText = document.getElementById("topText");

function loadPage() {
  text.style.display = "block";
  windowBox.style.display = "block";
  bear.style.display = "block";
  btn.style.display = "block";

  text.innerText = pages[i].text;
  bear.src = pages[i].bear;
  btn.src = pages[i].button;
}

btn.onclick = () => {
  i++;
  if (i < pages.length) {
    loadPage();
  } else {
    showChoice();
  }
};

function showChoice() {
  text.innerText = "so let’s make this relationship our priority";
  bear.src = "images/ill-cry-bear.png";
  btn.style.display = "none";
  choices.style.display = "block";
}

function yes() {
  phone.style.backgroundImage = "url('images/yes-bg.jpg')";
  windowBox.style.display = "none";
  text.style.display = "none";
  choices.style.display = "none";
  bear.style.display = "none";

  topText.innerText = "ik youve been trying in your own ways and know that im trying too and i love you remember that";
  topText.style.display = "block";
}

function no() {
  phone.style.backgroundImage = "url('images/no-bg.jpg')";
  windowBox.style.display = "none";
  text.style.display = "none";
  choices.style.display = "none";
  bear.style.display = "none";
  topText.style.display = "none";
}

loadPage();