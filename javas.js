



/*document.getElementById("demo").innerHTML="hello";


window.alert("welcom");
var x;
x="amal"
console.log(x);
console.log(typeof(x));*/

//var userName=document.getElementById("uname");
//var userMail=document.getElementById("umail");
//var userPhone=document.getElementById("uphone");
//var userLocation=document.getElementById("ulocation");
//
//var inpts=document.getElementsByTagName("input");
//var allData=[];
//
//
//function addRecord(){
//    var record={name:userName.value , mail:userMail.value , phone:userPhone.value , location:userLocation.value};
//    
//    allData.push(record);
//    
//    displayData();
//    clearForm();
//}
//
//function clearForm(){
//    for (var i=0;i<inpts.length ;i++){
//        inpts[i].value="";
//    }
//    
//}
//
//var final="";
//function displayData(){
//    for(var i=0;i<allData.length; i++)
//    {
//        
//        final+="<tr> <td>"+allData[i].name+"</td><td>"+allData[i].mail+"</td><td>"+allData[i].phone+"</td<td>"+allData[i].location+"</td></tr>"  
//        
//    }
//
//document.getElementById("tableResult").innerHTML=final;
//    
//    
//}
//
//
//
//
//
//function toggle(){
//    
//    console.log("hello");
//    
//    var form=document.getElementById("form-container");
//    var showHide=document.getElementById("showHide");
//    
//    if( form.style.display == "none"){
//        form.style.display = "block";
//       showHide.innerHTML='hide <i class="fas fa-arrow-circle-up"></i>';
//    }
//    else{
//        form.style.display = "none";
//        showHide.innerHTML='Show <i class="fas fa-arrow-circle-down"></i>';
//    }
//    
//    
//}
//




/*function desgin()
{
    document.getElementById("demo1").className="test";
    
}


function well(){
    var x= document.getElementById("username").value;
    alert("welcome : " + x);
}

var x,y,name ,result;

x=5;
y="5";

if(x===y)
    {console.log(true);}
else{console.log(false);}

var i=0;

while(i<10){
    console.log("hello");
    i++;
}*/



//function validata(){
//    var username=document.getElementById("userName").value
//    var regex=/^[A-Z][a-zA-Z]{3,8}$/
//    
//    if(regex.test(username))
//        {
//            console.log(true)
//        }
//    else{
//        console.log(false)
//    }
//}


/////////////////


var c=document.getElementById("c");
var ctx=c.getContext("2d");
var w=window.innerWidth;
var h=window.innerHeight;
c.width=w;
c.height=h;
ctx.fillStyle="white";
angle=0;
var snowNumber=300;
var snowContainer=[]


    
    for(var i=0;i<snowNumber;i++)
    {
        var s={
            x:Math.random()*w,
            y:Math.random()*h,
            r:Math.random()*2+1,
            d:Math.random()*2+1,
        }
        
       //snowContainer[i]=s;
        snowContainer.push(s);
    }

    
    
    




function drawSnow(){
   ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    
    for(var i=0;i<snowContainer.length;i++){
        var s=snowContainer[i]
        
        ctx.moveTo(s.x,s.y);
        ctx.arc(s.x,s.y,s.r,0,2*Math.PI);
    }
    
    ctx.fill();
    moveSnow();
}


//drawSnow();

function moveSnow(){
    angle +=0.001;
    for(var i=0;i<snowContainer.length;i++){
        
        var s=snowContainer[i];
        s.y +=Math.pow(s.d,2)+1;
        s.x+=Math.sin(angle)*2;
        
        if(s.y>h){
            snowContainer[i]={x:Math.random()*w,y:0,r:s.r,d:s.d}
        }
    }
    
    
    
    
}

setInterval(drawSnow,20)










//for(i=0 ;i<10;i++){
//     console.log("hello");
//}
//
//function avg(x,y){
//    return (x+y)/2;
//    
//}
//
//var w=avg(15,4,3);
//console.log(w);
//
//
//var friends=["amal","aya","hend"];
//
//friends.push("mohammed");
//friends.sort();
//var test=friends.toString();
//console.log(test);
//var test1=friends.join(" ");
//console.log(test1);
//friends.pop();
//for(var i=0;i<friends.length;i++)
//    {
//        console.log(friends[i]);
//    }
//
//
//
//
////var person ={ name:amal ,age : 21,salary:3000};
//
//
//var people=[
//    { name:"amal" ,age : 21,salary:3000},
//    { name:"ahmed" ,age : 22,salary:5000},
//    { name:"mohammed",age : 24,salary:4000},
//    { name:"aya" ,age : 25,salary:2000}
//    
//    
//]
//
//
//
//var final="";
//
//for(var i=0;i<people.length; i++)
//    {
//        
//        final+="<tr> <td>"+people[i].name+"</td><td>"+people[i].age+"</td><td>"+people[i].salary+"</td></tr>"  
//        
//    }
//
//document.getElementById("tableResult").innerHTML=final;*/