var entry=document.querySelector(".add-button")
var popup=document.querySelector(".popup")
var box=document.querySelector(".box")

entry.addEventListener("click",function(){
	popup.style.display="block";
	box.style.display="block";
})
//select cancel button
var cancel=document.getElementById("cancelpage");

cancel.addEventListener("click",function(event){
	event.preventDefault();
	popup.style.display="none";
	box.style.display="none";
})

//select container,add button as well as fields
 var container=document.querySelector(".Container");
 var add=document.getElementById("add-book")
 var input1=document.getElementById("input1");
 var input2=document.getElementById("input2");
 var input3=document.getElementById("input3");
 var ans=false;
 add.addEventListener("click",function(event){
	 event.preventDefault();
	 var div=document.createElement("div")
	 div.setAttribute("class","Container-2")
	 div.innerHTML=`<h2>${input1.value}</h2>
					<h4>Author: ${input2.value}</h4>
					<p>${input3.value}</P>
					<button onclick="deletebtn(event)">Delete</button>`
	container.append(div)
	input1.value="";
	input2.value="";
	input3.value="";
	 popup.style.display="none";
	box.style.display="none";
	ans=true;
 })

//select delete button
function deletebtn(event){
	event.target.parentElement.remove()
}
