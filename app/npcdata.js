import*as fs from"fs";export function CreateTrainersArray(){var r=new Array;return fs.readFileSync("/mnt/assets/resources/trainers.json","json").forEach((e,s)=>{r.push(createTrainer(e))}),r};function createTrainer(r){var e=new Object;return e.id=r.id,e.name=r.name,e.battleSteps=r.steps,e.wins=0,e.losses=0,e}