const btn = document.getElementById("btn");

btn.onclick = function () {
    let age = document.getElementById("age").value;
    console.log(age);

    let m = " "

    if (age <= 12) {
        m = "You still a lil baby"
        if (age < 12) {
    if (age < 12) {

    let kidMessages = [
        "You still a lil baby 😂",
        "Go drink milk 🥛",
        "Homework waiting for you 😭",
        "Bedtime at 8 PM 😎"
    ];

    let randomIndex =
      Math.floor(Math.random() * kidMessages.length);

    m = kidMessages[randomIndex];

}
    // document.getElementById("result").style.color = "blue";
}
    }

    else if (age <= 18){
        m = "You can have a boyfriend or girlfrien now lol"
    }
    else if (age <= 22) {
     

    let teenMessages = [
        "Still figuring life out 😭",
        "TikTok professional detected 📱",
        "Sleep schedule destroyed 💀",
        "You probably want a sports car 😎"
    ];

    let randomIndex =
      Math.floor(Math.random() * teenMessages.length);

    m = teenMessages[randomIndex];

}
    
    else if (age <= 31) {
        m = "WhAtArURpLAnSForUrFuTuRe?"
    }
    else if (age <= 40) {
          let adultMessages = [
        "Taxes incoming 💸",
        "Coffee dependency unlocked ☕",
        "Trying to survive adulthood 😂",
        "Maybe it's time for a vacation 🏖️",
        "What are you doinggggggggg?"
    ];

    let randomIndex =
      Math.floor(Math.random() * adultMessages.length);

    m = adultMessages[randomIndex];
    }

    else if (age <= 60) {
       let seniorM = ["Are you old ?",
        "How many grandkids you have?",
        "Can you Still F*** jeje",
        "Live has been fun ah!"
       ];

       let randomIndex =
       Math.floor(Math.random() * seniorM.length);

       m = seniorM[randomIndex]
    }
    else {
        m = "You still on this planet ? Shiiiiiii"
    }
    let days = age * 365; 

    if (!age) {
        document.getElementById("result").textContent = "Please enter your age"
        return;
    }

    console.log(days);
    document.getElementById("result").textContent = "you have been alive for " + days + " days! " + m;

}; 

const ageInput = document.getElementById("age");

ageInput.onkeydown = function(event) {
    if (event.key === "Enter") {
        btn.click()
    }
}