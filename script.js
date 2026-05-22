const btn = document.getElementById("btn");

btn.onclick = function () {
    let age = document.getElementById("age").value;
    console.log(age);

    let m = " "

    if (age <= 12) {
        let kidsM = [

            "Your main workout is running around the house 🏃",
            "Probably asked 'why?' 800 times today 🤔",
            "One cartoon episode can fix your whole mood 📺",
            "You probably have sticky fingers from candy 🍭",
            "Professional Roblox engineer 🎮",
            "You probably run faster after turning the lights off 💀",
            "Still scared of the dark a little huh 👀"
        ];

        let randomIndex = 
        Math.floor(Math.random() * kidsM.length);

        m = kidsM[randomIndex];
    }

    else if (age <= 18){
        let youthM = [
            "You probably say 'bro' every 3 seconds 😎",
            "Probably surviving on snacks and vibes 🍟",
            "School WiFi warrior detected 📶",
            "Your screen time is probably terrifying 📱",
            "Your mood changes depending on the WiFi speed 🌐",
            "Homework still chasing you 📚"
        ];

        let randomIndex =
        Math.floor(Math.random() * youthM.length);

        m = youthM[randomIndex]
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

        let semiAdult = [
            "You're probably tired for no reason 😭",
            "Maybe it's time to drink more water 🚰",
            "Trying to survive adulthood one day at a time 💸",
            "You probably say 'I'm cooked' a lot 😭",
            "You're one random motivation video away from changing your life 💪",
            "Responsibility DLC unlocked 📦"
        ];

        let randomIndex = 
        Math.floor(Math.random() * semiAdult.length);

        m = semiAdult[randomIndex];
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
      if (age <= 0) {
        document.getElementById("result").textContent = "Please enter your age"
        return;
    }


    if (age <= 3) {
        document.getElementById("result").textContent = "Bro you just spawned 😭"
        return;
    }

    console.log(days);
    document.getElementById("result").innerHTML = "you have been on this planet for " + days + " days! <br><br>" + m;

}; 

const ageInput = document.getElementById("age");

ageInput.onkeydown = function(event) {
    if (event.key === "Enter") {
        btn.click()
    }
}