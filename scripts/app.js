//console.log("hello world");
shownotes();
let addbutton = document.getElementById('addbtn');
addbutton.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let addtitle=document.getElementById("adtitle");
    let title=localStorage.getItem("title");
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesobj = [];
        titleobj=[];
    }
    else {
        notesobj = JSON.parse(notes);
        titleobj=JSON.parse(title);
    }
    notesobj.push(addtxt.value);
    titleobj.push(adtitle.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    localStorage.setItem("title",JSON.stringify(titleobj));
    adtitle.value="";
    addtxt.value = "";
    
    shownotes();

})
function shownotes() {
    let notes = localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    if (notes == null) {
        notesobj = [];
        titleobj=[];
    }
    else {
        notesobj = JSON.parse(notes);
        titleobj=JSON.parse(title);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2 notecard" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">${titleobj[index]}</h5>
            <p class="card-text">${element}</p>
            <button type="submit" id="${index}" onclick="deletenode(${index})" class="btn btn-primary my-2">Delete Note</button>
        </div>
    </div>
       
       
       
       `;

    });
    let dhtml=document.getElementById("notes");
    if(notesobj.length!=0){
        dhtml.innerHTML=html;
    }
    
    else{
        
        dhtml.innerHTML=`<div class="jumbotron">
        <h1 class="display-4">Welcome to magic notes</h1>
        <p class="lead">No notes found</p>
        
      </div>`
    }
    
}
function deletenode(index){
    let delnote=localStorage.getItem("notes");
    let title=localStorage.getItem("title");
    if(delnote==null){
        noteobj=[];
        titleobj=[];
    }
    else{
     noteobj=JSON.parse(delnote);
     titleobj=JSON.parse(title);
    }
    noteobj.splice(index,1);
    titleobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    localStorage.setItem("title",JSON.stringify(titleobj));
    shownotes();
    
}
let search=document.getElementById('searchtxt');
searchtxt.addEventListener("input",function(){
       let val1=search.value.toLowerCase();
       //console.log(val1);
       let notescard=document.getElementsByClassName("notecard");
       Array.from(notescard).forEach(function(element){
           let cardtxt=element.getElementsByTagName("p")[0].innerText;
           if(cardtxt.includes(val1)){
               element.style.display="block";
           }
           else{
               element.style.display="none";
           }
       })

       
})
function clocktime(){
    let time=document.getElementById("time");
    let d=new Date();
    time.innerHTML="TIME: "+  d.toLocaleString('en-US', { hour: 'numeric',minute:'numeric',second:'numeric', hour12: true });
}


setInterval(()=>{
    clocktime();
},1000)