import document from"document";import*as screenManager from"./screen.js";export function loadTrainerMenu(){let e=document.getElementById("tm-btn-trainers"),n=document.getElementById("tm-btn-leaders"),t=document.getElementById("tm-btn-elites");e.onclick=function(){screenManager.showTrainers()},n.onclick=function(){screenManager.showLeaders()},t.onclick=function(){screenManager.showElite()}};