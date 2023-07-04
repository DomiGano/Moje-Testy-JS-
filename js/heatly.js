let hpBar = document.querySelector("#redbar");
let mainhpBar = document.querySelector("#hpBar");
let dmgText = document.querySelector(".profDMG");

let hp = 100;
let dmgMin = 1;
let dmgMax = 10;

function moreDMG(x) {
    dmgMax = dmgMax + x;
    document.querySelector(".actualDMG").innerText = "AKTUALNE MAX DMG: " + dmgMax;
}

function lessDMG(x) {
    if(dmgMax < 0) {
        dmgMax = 0;
        document.querySelector(".actualDMG").innerText = "AKTUALNE MAX DMG: " + dmgMax;
    } else {
        dmgMax = dmgMax - x;
        document.querySelector(".actualDMG").innerText = "AKTUALNE MAX DMG: " + dmgMax;
    }
}

function dmg() {
    let dmg = Math.floor(Math.random() * (dmgMax - dmgMin +1) +1);

    hp = hp - dmg
    
    if(hp > 0) {
    document.querySelector(".redbar").style.width = hp + "%";
    mainhpBar.querySelector("p").innerText = "HP " + hp + "%";
    dmgText.style.color = "red";
    dmgText.style.padding = "5px";
    dmgText.innerText = "-" + dmg +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },3000);
    } else {
        dmg = dmg + hp;
        hp = 0;
        document.querySelector(".redbar").style.width = 0 + "%";
        mainhpBar.querySelector("p").innerText = "RIP";
        document.querySelector("#myDiv").classList.add("grave");
        if(dmg > 0) {
            dmgText.style.color = "red";
            dmgText.style.padding = "5px";
            dmgText.innerText = "-" + dmg +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },4000);
        }
    }

}

function heal(x) {
    let beforeHeal = hp
    hp = hp + x;
    

    if(hp <= 100) {
    document.querySelector(".redbar").style.width = hp + "%";
    mainhpBar.querySelector("p").innerText = "HP " + hp + "%"
    document.querySelector("#myDiv").classList.remove("grave");
    dmgText.style.color = "green";
    dmgText.style.padding = "5px";
    dmgText.innerText = "+" + x +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },4000);
    } if(hp > 100) {
        hp = 100;
        document.querySelector(".redbar").style.width = hp + "%";
        mainhpBar.querySelector("p").innerText = "HP " + hp + "%";
        if(beforeHeal < 100){
        dmgText.style.color = "green";
        dmgText.style.padding = "5px";
        dmgText.innerText = "+" + (hp - beforeHeal) +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },4000);        
    }
}

}

function autoHeal(value, time) {
    setInterval(function(){
        heal(value)
    },time * 1000)
}

