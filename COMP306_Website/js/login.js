window.onload = function () {

    $("buttonLogin").keyup(function () {

        var username = $("username").val();
        var password = $("password").val();

        $.post(
            "http://localhost:17854/api/users/login",
            {
                username: username,
                password: password
            },
            function (result) {
                console.log(result);
            }
        );



    };
}

    //getCookie();

    //function getCookie(username) {
    //    var name = cname + "=";
    //    var ca = document.cookie.split(';');
    //    for (var i = 0; i < ca.length; i++) {
    //        var c = ca[i];
    //        while (c.charAt(0) == ' ') {
    //            c = c.substring(1);
    //        }
    //        if (c.indexOf(name) == 0) {
    //            return c.substring(name.length, c.length);
    //        }
    //    }
    //    return "";
    //}

    //function checkCookie() {
    //    var user = getCookie("username");
    //    if (user != "") {
    //        alert("Welcome again " + user);
    //    } else {
    //        user = prompt("Please enter your name:", "");
    //        if (user != "" && user != null) {
    //            setCookie("username", user, 365);
    //        }
    //    }
    //}


};

function login() {

    $.post()

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:17854/api/users/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    

    var json = {
        username: username,
        password: password
    };

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("SUCCESS");
        }
    };

    xhr.onerror = function () {
        console.log(xhr);
    }

    xhr.send(json);
}

