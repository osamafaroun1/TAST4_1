//FISRT(A)
var array=[1,2,3,4,5,6,7,8,9,10];

//The sum of even numbers
var sum_1=0;
for(var index=0 ; index<array.length ; index++){
   if(array[index]%2==0){
    sum_1+=array[index];
   }
}

//on console
console.log(sum_1);

//on browser
document.getElementById("demo").onclick= function(){
    document.getElementById("EvenNumber").innerHTML=sum_1;
 }


//The sum of index<5
var sum_2=0;
for(var index=0 ; index<array.length ; index++){
    if(index<=4){
      sum_2+=array[index];
    }
 } 
 //on console
 console.log(sum_2);

 //on browser
 document.getElementById("osama").onclick= function(){
    document.getElementById("ForIndex").innerHTML=sum_2;
 }

//NEXT (B)
var object={
    name:"osama faroun",
    number:"0991815025",
    age:"26",
    email:"osamafaroun7@gmail.com"
}
//on console
console.log(object);//ALL OBJECT

console.log(object.name , object.number , object.age ,object.email);//FOR ITEMS 


//on browser

//convert from object to string ^_^
var x=JSON.stringify(object);
document.write(x+"<br>");//ALL OBJECT

//FOR ITEMS
document.write(object.name+"<br>");
document.write(object.number+"<br>");
document.write(object.age+"<br>");
document.write(object.email+"<br>");




