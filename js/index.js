/*
* @Author: Administrator
* @Date:   2018-07-21 15:34:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-22 13:59:53
*/
window.onload=function(){
 $("#remen1").mouseenter(function(){
     $("#remen").css({"display":"block"});
     $("#chuxing").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#chuxing1").mouseenter(function(){
     $("#chuxing").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#jiankang1").mouseenter(function(){
     $("#jiankang").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#chuxing").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#kuwan1").mouseenter(function(){
     $("#kuwan").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#chuxing").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#luyouqi1").mouseenter(function(){
     $("#luyouqi").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#chuxing").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
 });

  // 倒计时开始
   var second=document.querySelector("#second");
   var nub=second.innerHTML;
   var min=document.querySelector("#minute");
   var aub=min.innerHTML;
   var minute=document.querySelector("#hour");
   var rub=minute.innerHTML;
   var time=document.querySelector(".time");

  
   setInterval(function(){
    var tody = new Date();
    rub=tody.getHours();
    console.log(rub);
    if(rub>=0&&rub<10){
      time.innerHTML="10:00 场";
          nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=9-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    if(rub>=10&&rub<12){
      time.innerHTML="12:00 场";
          nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=11-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=12&&rub<16){
     time.innerHTML="16:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=15-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=16&&rub<18){
     time.innerHTML="18:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=17-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=18&&rub<20){
     time.innerHTML="20:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=19-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=20&&rub<22){
      time.innerHTML="22:00 场";
      nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=21-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }

    }
    else if(rub>=22&&rub<=23) {
     time.innerHTML="00:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=23-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
   },1000)
   // 倒计时结束
   // logom 选项卡
  let logo=document.getElementsByClassName("logo1");
  let lis=document.getElementsByClassName("lis");
  for (let i = 0; i <logo.length; i++) {
    // console.log(logo[i]);
    logo[i].onmouseenter=function(){
      for(let j=0 ;j<lis.length;j++){
        lis[j].style.display="none";
      }
      lis[i].style.display="block";
     }
    }
    function bian(num) {
        let chanping1=document.getElementsByClassName("chanping1")[num];
        let li=chanping1.getElementsByTagName("li");
        let kzq=chanping1.getElementsByClassName("kzq");
        let dd=chanping1.getElementsByClassName("dd");
        let flag=true;
        let now=0;
        let next=0;
        let w=parseInt(getComputedStyle(li[0],null).width);

        function move() {
            next++;
            if (next==li.length){
                now=next-1;
                next=next-1;
                return;
            }
            for(let i=0;i<dd.length;i++){
                dd[i].style.background="#b0b0b0";
                dd[i].style.border=0;
            }
            dd[next].style.background="transparent";
            dd[next].style.border="2px solid #ffac13";
            li[now].style.left=0;
            li[next].style.left=w+"px";
            animate(li[next],{left:0});
            animate(li[now],{left:-w},function () {flag=true});
            now=next;
        }
        function movej() {
            next--;
            if (next<0){
                next=0;
                now=0;
                return;
            }
            for(let i=0;i<dd.length;i++){
                dd[i].style.background="#b0b0b0";
                dd[i].style.border=0;
            }
            dd[next].style.background="transparent";
            dd[next].style.border="2px solid #ffac13";
            li[now].style.left=0;
            li[next].style.left="-296px";
            animate(li[next],{left:0});
            animate(li[now],{left:w},function () {flag=true});
            now=next;

        }
        kzq[0].onclick=function () {
            if (flag==false){
                return
            }else{
                flag=false;
                movej();
                console.log(next);
            }

        }
        kzq[1].onclick=function () {
            if (flag==false){
                return
            }else{
                flag=false;
                move();
                console.log(next);
            }
        }
        for(let i=0;i<dd.length;i++){
            dd[i].onclick=function () {
                for(let i=0;i<dd.length;i++){
                    dd[i].style.background="#b0b0b0";
                    dd[i].style.border=0;
                }
                dd[i].style.background="transparent";
                dd[i].style.border="2px solid #ffac13";
                if(i==now){
                    return
                }
                if (i>now){
                    if (flag==false){return}
                    else {
                        flag=false;
                        li[i].style.left=w+"px";
                        li[now].style.left=0;
                        animate(li[i],{left:0});
                        animate(li[now],{left:-w},function () {
                            flag=true
                        });
                    }

                }
                if (i<now){
                    if (flag==false){return}
                    else {
                        flag=false;
                        li[i].style.left="-296px";
                        li[now].style.left=0;
                        animate(li[i],{left:0});
                        animate(li[now],{left:w},function () {
                            flag=true;
                        });
                    }
                }
                next=now=i;
            }
        }
    }
 for (let i=0;i<4;i++){
      bian(i);
 }
}