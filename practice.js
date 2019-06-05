function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var conpass = document.getElementById("conpassword").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var phone = parseInt(mobile);
    var uname = username.charAt(0);
    var atpos = email.indexOf("@");
    var dotpos = email.indexOf(".");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (username == "" || password == "" || conpass == "" || email == "" || mobile == "") {
        alert("NO BLANKS ALLOWED");
        return false
    }
    if (username.trim() == "" || password.trim() == "" || conpass.trim() == "" || mobile.trim() == "") {
        alert("NOT VALID");
        return false
    }
    if (username.length < 5) {
        document.getElementById("wumsg").innerHTML = "**username too short";
        return false
    } else {
        document.getElementById("wumsg").innerHTML = "";
    }
    if (Number.isInteger(uname) == true) {
        document.getElementById("wumsg").innerHTML = "**Cannot start with a number";
        return false
    } else {
        document.getElementById("wumsg").innerHTML = "";

    }
    if (password.length < 6) {
        document.getElementById("wpmsg").innerHTML = "**password must be of length 6";
        return false
    } else {
        document.getElementById("wpmsg").innerHTML = "";
    }
    if (password != conpass) {
        document.getElementById("wpmsg").innerHTML = "** password doesnot matches";
        document.getElementById("wcmsg").innerHTML = "** password doesnot matches";
        return false
    } else {
        document.getElementById("wpmsg").innerHTML = "";
        document.getElementById("wcmsg").innerHTML = "";

    }
    if (isNaN(phone)) {
        document.getElementById("wmmsg").innerHTML = "only numbers are allowed";
    } else {
        document.getElementById("wmmsg").innerHTML = "";
    }
    if (mobile.length != 10) {
        document.getElementById("wmmsg").innerHTML = "digits must be 10";
        return false
    } else {
        return true
    }
}