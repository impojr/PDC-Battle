import document from"document";import*as saveManager from"./save.js";import*as screenManager from"./screen.js";import*as messaging from"messaging";export function loadHome(){var e=saveManager.loadState();document.getElementById("h-player-name").text=e.name,document.getElementById("h-player-image").href="images/trainers/"+e.name+".png",document.getElementById("h-pokemon-image").href="images/trainers/"+e.name+"p.png";var n=document.getElementById("h-no-battle"),t=document.getElementById("h-inprogress"),a=document.getElementById("h-bti"),l=document.getElementById("h-bpi"),s=document.getElementById("h-btname"),i=document.getElementById("h-remaining"),d=document.getElementById("h-results");if(n.style.display="inline",t.style.display="none",a.style.display="none",l.style.display="none",s.style.display="none",i.style.display="none",d.style.display="none",d.onactivate=function(){document.getElementById("spinner").state="enabled",messaging.peerSocket.send(e.lastBattle)},e.lastBattle.InBattle){var m=saveManager.loadTrainers()[e.lastBattle.OpponentIndex];if(n.style.display="none",t.style.display="inline",a.style.display="inline",a.href="images/trainers/"+m.id+".png",l.style.display="inline",l.href="images/trainers/"+m.id+"p.png",s.style.display="inline",s.text="VS "+m.name,i.style.display="inline",d.style.display="inline",new Date(e.lastBattle.BattleEnd)<new Date)i.style.display="none",d.style.display="inline";else{i.style.display="inline",d.style.display="none";var y=new Date(e.lastBattle.BattleEnd).getTime(),o=setInterval(function(){var e=(new Date).getTime(),n=y-e,t=Math.floor(n%36e5/6e4),a=Math.floor(n%6e4/1e3);i.text=t+"m "+a+"s remaining",n<0&&(clearInterval(o),i.style.display="none",d.style.display="inline")},1e3)}}};