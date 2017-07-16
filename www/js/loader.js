var username = Cookies.get("username");
console.log(username);

if (username != undefined) {
	window.location = "./index.html";
} else {
	window.location = "./pages/login.html"
}
