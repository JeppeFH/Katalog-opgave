// Template functions - hver function opfører sig som en HTML template.
export const playerListTmpl = (player) =>
  ` 
<div class="player-card">
  <div class="player-img-container">
  <figure><img src="${player.picture}"></figure>
  
  <p class="player-name" >${player.name}</p>

  <a player-btn href="players-page.html?id=${player.id}"><img src="${player.button}"></a>
  
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

<div>
  `;

export const playerPageTmpl = (player) =>
  `
<div class="player-page-grid">

 <div class="grid-1">

    <figure><img src="${player.picture}"></figure>

  <div class="grid-1-container">

    <p id="player-name">${player.name} ${
    player.id === 0 ? '<i class="fa-solid fa-crown"></i>' : ""
  } <br> <span>Season 22/23</span></p>
    
    <p class="headline">Position</p>
    <p class="headline">Place of birth</p>

    <p>${player.position}</p>
    <p>${player.birthPlace}</p>

    <p class="headline">Height</p>
    <p class="headline">Date of birth</p>

    <p>${player.height}</p>
    <p>${player.birthYear}</p>
  </div>
</div>

  <div class="grid-2">
  <div class="grid-2-container">
    <p class="headline">Games</p>
    <p class="headline">Goals</p>

    <p>${player.games}</p>
    <p>${player.goals}</p>

    <p class="headline">Assists</p>
    <p class="headline">G/A</p>
    <p>${player.assists}</p>
    <p>${player.GA}</p>
  </div>
  </div>

  <div class="grid-3">
    <p class="headline">Tackles</p>
    <p>${player.tackles}</p>
  </div>

  <div class="grid-4">
    <p class="headline">Fouls</p>
    <p>${player.fouls}</p>
  </div>

  <div class="grid-5">
    <img src="${player.yellowCardsPicture}">
    <p class="headline">Yellow cards</p>
    <p>${player.yellowCards}</p>
  </div>

  <div class="grid-6">
    <img src="${player.redCardsPicture}">
    <p class="headline">Red cards</p>
    <p>${player.redCards}</p>
  </div>

  <div class="grid-7">
    <p class="headline">Club Trophies</p>
    <p>${player.trophies}</p>
  </div>
  

  <div class="grid-8">
    <p class="headline highlights">Highlights <i class="fa-solid fa-video"></i></p>
    <div>
    <video src="${player.highlightVideo1}"></video>
    <video src="${player.highlightVideo2}"></video>
    </div>
  </div>

   <div class="grid-9">
   <p class="headline highlights">Gallery <i class="fa-solid fa-camera"></i></p>
 <div>
<img src="${player.picture}">
<img src="${player.picture}">
<img src="${player.picture}">
<img src="${player.picture}">
 </div>
  </div>
  
  </div> 
          `;
