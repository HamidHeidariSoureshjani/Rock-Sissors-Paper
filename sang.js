const choices = ["سنگ", "کاغذ", "قیچی"];

const userChoise = prompt ("؟سنگ؟ کاغذ؟ قیچی");
if(userChoise){
    console.log(`انتخاب شما: ${userChoise}`);
} else {
    console.log("تقلب کردی!");
}
const randomNumber = Math.floor(Math.random() * 3);
const pcChoice = choices[randomNumber];
console.log(`انتخاب کامپیوتر: ${pcChoice}`);



if (userChoise === pcChoice){
    console.log("برابر")
} else if (userChoise === "سنگ"){
    if(pcChoice === "قیچی"){
        console.log("بردی!")
    } else {
        console.log("باختی!");
    }
} else if( userChoise === "کاغذ"){
    if(pcChoice === "سنگ"){
        console.log("بردی!")
    } else {
        console.log("باختی!");
    }
} else if(userChoise === "قیچی"){
    if (pcChoice === "کاغذ") {
        console.log("بردی!")
    } else{
        console.log("باختی!");
    }
}