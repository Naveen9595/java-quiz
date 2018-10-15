function Answers()
{
var question1=document.quiz.q1.value;
var question2=document.quiz.q2.value;
var question3=document.quiz.q3.value;
var question4=document.quiz.q4.value;
var question5=document.quiz.q5.value;
var question6=document.quiz.q6.value;
var question7=document.quiz.q7.value;
var question8=document.quiz.q8.value;
var question9=document.quiz.q9.value;
var question10=document.quiz.q10.value;
var correct=0;
if(question1==""||question2==""||question3==""||question4==""||question5==""||
	question6==""||question7==""||question8==""||question9==""||question10=="")
{
alert("please answer all the questions");

}
else{
	if(question1=="b")
 {
correct++;

 }
if(question2=="c")
 {
 correct++;

 } 
if(question3=="d")
 {
 correct++;

 }
if(question4=="b")
 {
 correct++;

 }
if(question5=="a")
{
 correct++;

}
if(question6=="a")
{
 correct++;

}
if(question7=="a")
{
 correct++;

}
if(question8=="d")
{
 correct++;

}
if(question9=="a")
{
 correct++;

}
if(question10=="c")
{
 correct++;

}
var b="you got 2 correct out of 10";
var a="you got 1 correct out of 10";
var c="you got 3 correct out of 10";
var d="you got 4 correct out of 10";
var e="you got 5 correct out of 10";
var f="you got 6 correct out of 10";
var g="you got 7 correct out of 10";
var h="you got 8 correct out of 10";
var i="you got 9 correct out of 10";
var j="you got 10 correct out of 10";

var message=["full wrong",a,b,c,d,e,f,g,h,i,j];
var giveno;

if(correct<1)
{
	giveno=0;
}
if(correct==1)

{
	giveno=1;
}
if(correct==2)

{
	giveno=2;
}
if(correct==3)

{
	giveno=3;
}
if(correct==4)

{
	giveno=4;
}
if(correct==5)

{
	giveno=5;
}
if(correct==6)

{
	giveno=6;
}
if(correct==7)

{
	giveno=7;
}
if(correct==8)

{
	giveno=8;
}
if(correct==9)

{
	giveno=9;
}
if(correct==10)

{
	giveno=10;
}
document.getElementById("comment").style.visiblity="visible";
document.getElementById("comment").innerHTML=message[giveno];
}
}
