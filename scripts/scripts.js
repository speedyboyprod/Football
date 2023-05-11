"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

const statesListEl = document.getElementById("statesList");
const submitTeamEl = document.getElementById("submitTeam");

function teamListDropDown() {
  for (let i = 0; i < teams.length; i++) {
    let optionEl = new Option(teams[i].name, teams[i].code);

    statesListEl.appendChild(optionEl);
  }
}

submitTeamEl.onclick = onStatesTeamChange;

function onStatesTeamChange() {
  const currentCode = statesListEl.value;

  let currentTeam;
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    if (team.code === currentCode) {
      currentTeam = team;
    }
  }
  const message = `You've selected ${currentTeam.name}(${currentTeam.code}) who play in ${currentTeam.plays}.`;
  const messageEl = document.getElementById("messagePar");
  messageEl.innerHTML = message;
}

teamListDropDown();
