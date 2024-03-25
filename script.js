document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        let cardName = document.getElementById("card-name").value;
        let subject = document.getElementById("subject").value;
        let rollNO = document.getElementById("roll-no").value;

        let nameCard = document.getElementById("name-card");
        let subject2 = document.getElementById("subject-2");
        let noRoll = document.getElementById("no-roll");

        let div1= document.getElementById("div1")
        let div2 = document.getElementById("div2")
        div1.remove();
div2.style.display = `block`
div2.style.display = `flex`
div2.style.justifyContent = `center`
div2.style.alignItems = `center`
        nameCard.innerText = cardName;
        subject2.innerText = subject;
        noRoll.innerText = rollNO;

        console.log("Clicked");
    });
});
function loadimage(event){
    const image =document.getElementById("img");
    image.src = URL.createObjectURL(event.target.files[0]);
}