function SendMail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_wql36zu", "template_i451r4t", params).then(function (res) {
        alert("Your message has been sent. " + res.status);
    })
}