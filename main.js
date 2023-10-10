const clickme = document.getElementById("clickme")
const narration = document.getElementById("narration")
const clickmeCounter = [0]

// Create the button
var btn = document.createElement('button');
btn.innerHTML = 'BUBBLES!';

btn.addEventListener('click', function() {
    // Create the firework element
    var firework = document.createElement('div');
    firework.className = 'firework';

    // Random horizontal position
    var xPosition = Math.random() * window.innerWidth;
    firework.style.left = xPosition + 'px';

    // Append to body
    document.body.appendChild(firework);

    // Remove after animation
    setTimeout(function() {
        document.body.removeChild(firework);
    }, 1000); // 1s matches the animation duration
});


clickme.addEventListener("click", function(){
    if(clickmeCounter[0] == 0){
        console.log("hello")
        alert("GOODJOB, click me agian but no more popups i promise")
        document.body.style.backgroundColor = "lightblue";
        document.body.style.fontFamily = "Arial"
        clickmeCounter[0] = 1
        document.body.style.backgroundColor = "lightblue";
        document.body.style.fontFamily = "Arial"
        const parent = document.getElementById("center")
        narration.innerHTML = "I will stop harrasing you with popups and talk to you via this text box from now on"
    
        parent.removeChild(clickme)
        createDescription()


        // Append the button to the body
        document.body.appendChild(btn);

        return
    }




})


function createDescription(){
    //create description of me
    const div = document.createElement("div")


    const name = document.createElement("ul")
    name.id = "name"
    name.innerHTML = "Name: Lim Qing Chuan"


    const about = document.createElement("ul")
    about.id = "about"
    about.innerHTML = "About: Year 4 Computer Science student at Nanyang Technological University"


    const portfolio = document.createElement("ul")
    portfolio.id = "portfolio"
    portfolio.innerHTML = "Portfolio: you're looking at it, to skip to the end click here"


    const contact = document.createElement("ul")
    contact.id = "Contact"
    contact.innerHTML = "Email: chrislim.qc@gmail.com"

    div.appendChild(name)
    div.appendChild(about)
    div.appendChild(portfolio)
    div.appendChild(contact)
    

    document.body.appendChild(div)
}