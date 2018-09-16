function Answers()
{
var question1=document.quiz.q1.value;
var question2=document.quiz.q2.value;
var correct=0;

if(question1=="a")
{
correct++;

}
if(question1=="c")
{
correct++;

}

var message=["you got 2 correct out of 2","you got 1 correct out of 2","full wrong"];
var giveno;

if(correct<1)
{
	giveno=2;
}
if(correct==1)

{
	giveno=1;
}
if(correct==2)

{
	giveno=0;
}
document.getElementById("scores").style.visiblity="visible";
document.getElementById("comment").innerHTML=message[giveno];

}