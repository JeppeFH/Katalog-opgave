// Template functions - hver function opfører sig som en HTML template.
export const playerListTmpl = (player) =>
  ` 
<div class="player-card">
  <div class="player-img-container">
  <figure><img src="${player.picture}"></figure>

  <p class="player-name" >${player.name}</p>

  <div class="logo-rank">
  <img src="${player.ballondorLogo}">
  <p>${player.ranking}</p>
  </div>
  </div>
                
  <div class="player-info">
  <div>
  <p>${player.birthPlaceShort}</p>
  <p>${player.birthYearShort}</p>
  </div>
  <img src="${player.teamLogo}">
  <p>${player.team}</p>
  <p>${player.positionName}</p>
  </div>

  <button class="player-btn"><a href="players-page.html?id=${player.id}"></a><img src="${player.button}${player.id}"></button> 

<div>

  `;

export const playerPageTmpl = (player) =>
  `
<div class="player-page-grid">

 <div class="grid-1">
 
    <figure><img src="${player.picture}"></figure>

  <div class="grid-1-container"
    <p class="player-name" >${player.name}</p>

    <p>Position</p>
    <p>Place of birth</p>

    <p>${player.position}</p>
    <p>${player.birthPlace}</p>

    <p>Height</p>
    <p>Date of birth</p>

    <p>${player.height}</p>
    <p>${player.birthYear}</p>
  </div>
</div>

  <div class="grid-2">
    <p>Games</p>
    <p>Goals</p>

    <p>${player.games}</p>
    <p>${player.goals}</p>

    <p>Assists</p>
    <p>${player.assists}</p>
  </div>

  <div class="grid-3">
   <p>Tackles</p>
   <p>${player.tackles}</p>
  </div>

  <div class="grid-4">
   <p>Fouls</p>
   <p>${player.fouls}</p>
  </div>

  <div class="grid-5">
   <p>Highlights</p>
   <video src="${player.highlightVideo}">
  </div>
  
  <div class="grid-6">
  <img src="${player.yellowCardsPicture}">
  <p>Yellow cards</p>
  <p>${player.yellowCards}</p>
  </div>

  <div class="grid-7">
  <img src="${player.redCardsPicture}">
  <p>Red cards</p>
  <p>${player.redCards}</p>
  </div>

  <div class="grid-8">
  <p>Trophies</p>
  <p>${player.trophies}</p>
  </div>

  </div> 
          `;
