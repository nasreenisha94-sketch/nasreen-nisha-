const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const regno = document.getElementById("regno").value;
    const eventName = document.getElementById("event").value;

    message.innerHTML =
        `🎉 Registration Successful!<br>
         Welcome ${name}!<br>
         Register No: ${regno}<br>
         Event: ${eventName}`;

    message.style.color = "green";

    form.reset();
});
