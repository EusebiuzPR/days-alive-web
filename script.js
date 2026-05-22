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
            "Still scared of the dark a little huh 👀",
             "Your biggest responsibility is homework 😭",
            "You probably run after turning the lights off 💀",
            "Cartoons still solve all your problems 📺",
            "You ask 'why?' 900 times a day 🤔",
            "You're basically powered by sugar 🍭",
            "Bedtime is still your biggest enemy 🌙",
            "You probably think being 13 means adulthood 😎",
            "Your Roblox career is going strong 🎮",
            "You cry over things you'll forget tomorrow 😂",
            "You probably have sticky fingers from snacks 🍟",
            "One small fall and suddenly the whole world must know 😭",
            "You still think monsters move when the lights go off 👀",
            "Your entire mood depends on getting the tablet 📱",
            "You probably got beef with bedtime 💀",
            "Professional hide-and-seek athlete detected 🏃"
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
            "Homework still chasing you 📚",
             "You probably think you're grown already 😭",
            "Homework still owns your soul 📚",
            "Your attention span got destroyed by TikTok 📱",
            "You probably stay awake for absolutely no reason 🌙",
            "Your room is either spotless or a warzone 💀",
            "You say 'I'm bored' while holding a whole phone 😭",
            "Your entire mood depends on WiFi speed 📶",
            "You probably laugh at the dumbest things 😂",
            "You think sleeping at 3AM is normal 😎",
            "One bad grade can ruin your whole week 📉",
            "You probably have 20 alarms and ignore all of them ⏰",
            "You're either gaming or scrolling endlessly 🎮",
            "You still panic when talking to adults sometimes 👀",
            "Your future self is begging you to focus 😭",
            "You're running purely on snacks and vibes 🍟"
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
        "You probably want a sports car 😎",
        "Your entire personality is probably memes 😭",
        "You survive on snacks and bad decisions 🍕",
        "Your screen time should be illegal 📱",
        "You probably say 'bro' every 2 seconds 😎",
        "Your sleep schedule is completely destroyed 💀",
        "You think you're mature until taxes are mentioned 💸",
        "One minor inconvenience ruins your whole day 😂",
        "You probably have music playing 24/7 🎧",
        "Your attention span lasts 3 business seconds 🧠",
        "You act confident but panic ordering food 😭",
        "Your future self is watching in disappointment 👀",
        "You probably have 40 unfinished goals 📝",
        "You still don't know what you're doing with life 🌎",
        "Your wallet is fighting for survival 💳",
        "You're basically a professional procrastinator 🛌"

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
            "Responsibility DLC unlocked 📦",
              "You're old enough to know better but still do dumb stuff 😭",
            "Bills are spawning faster than enemies now 💸",
            "You probably pretend to have your life together 😎",
            "Your back randomly starts hurting for no reason 💀",
            "You're one motivational video away from changing your whole life 🎥",
            "You wake up tired even after sleeping 8 hours 😴",
            "Your childhood feels like 3 business days ago 👴",
            "You probably drink coffee like it's life support ☕",
            "You're slowly becoming the adult you used to make fun of 😂",
            "You get excited over discounts now 🛒",
            "Your knees started making Windows XP sounds 🦵",
            "You say 'I'm too old for this' way too often 😭",
            "Responsibility hit you like a truck 🚛",
            "You probably have an existential crisis at 2AM 🌌",
            "At this point you're surviving purely on vibes 💀"
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
        "What are you doinggggggggg?",
        "Your sleep schedule is a horror movie 😭",
        "You open the fridge just to stare at it 👀",
        "Your back hurts from existing 💀",
        "You're one inconvenience away from becoming a monk 🧘",
        "You probably say 'I'm tired' 40 times a day ☕",
        "Your metabolism retired early 🍔",
        "At this age hangovers hit like a truck 🚛",
        "You buy things online and forget instantly 📦",
        "You get excited when plans get cancelled 😂",
        "Your knees make sound effects now 🦵",
        "You're starting to understand why adults were always angry 😭",
        "You probably have 17 tabs open right now 🌐",
        "Your idea of fun is staying home 😎",
        "You sit down for 5 minutes and accidentally nap 🛌",
        "Your body updates with new bugs every year 🐛"
    ];

    let randomIndex =
      Math.floor(Math.random() * adultMessages.length);

    m = adultMessages[randomIndex];
    }

    else if (age <= 60) {
       let seniorM = ["Are you old ?",
        "Back pain entered the chat 💀",
        "Your favorite hobby might be sitting down now 🪑",
        "At this point water is stronger than alcohol 🚰",
        "You unlocked premium wisdom 🧠",
        "You sneeze and suddenly your whole back hurts 💀",
        "You probably make noises when standing up 😭",
        "You probably say 'back in my day...' sometimes 👴",
        "Random naps hit different now 🛌",
        "How many grandkids you have?",
        "Can you Still F*** jeje",
        "Live has been fun ah!"
       ];

       let randomIndex =
       Math.floor(Math.random() * seniorM.length);

       m = seniorM[randomIndex]
    }
    else {
        let ancientM =  [

        "You unlocked legendary status 👑",
        "Bro witnessed dinosaurs firsthand 💀",
        "You're basically a historical artifact 📜",
        "Still alive? Respect honestly 😭",
        "Your knees probably sound like popcorn 🍿",
        "You probably remember when phones had wires ☎️",
        "At this point every birthday is a boss battle 🎂",
        "You're running on pure experience points now 🧠",
        "You survived every cringe phase somehow 😎",
        "Your back probably has trust issues 💀",
        "You might actually know what life means 👀",
        "You reached max level 🎮",
        "Earth DLC veteran detected 🌎",
        "Still standing after all these years... impressive 🫡",
        "You and the pyramids were built around the same time 😂"

    ];

        let randomIndex = Math.floor(Math.random() * ancientM.length);

        m = ancientM[randomIndex]
    }
    let days = age * 365; 

    if (!age) {
        document.getElementById("result").textContent = "Please enter your age"
        return;
    }
      if (age <= 0) {
        document.getElementById("result").textContent = "cOmE On,ReaLlY ?"
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


// POPUP

const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

closeBtn.onclick = function() {
    popup.classList.add("hide"); 

    setTimeout(() => {
        popup.style.display = "none";
    }, 300)
}
