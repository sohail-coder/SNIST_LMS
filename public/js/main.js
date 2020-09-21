const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

document.getElementById("teacher").onclick = function(){
	location.href="./teacherlogin.html"
};
document.getElementById("student").onclick = function () {
	location.href = "./studentlogin.html"
};
document.getElementById("login1").onclick = function () {
	location.href = "index.html"
};
document.getElementById("login2").onclick = function () {
	location.href = "index.html"
};