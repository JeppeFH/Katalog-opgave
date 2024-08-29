// Template functions - hver function opfører sig som en HTML template.
export const playerListTmpl = (player) => `
  <div class="player-card">
    <div class="slider-container">
      <div class="slider-inner">
        <div class="player-img-container">
          <img class="player-img" src="${player.picture}">
          
        </div>

        <div class="slider-info">
          <p><span>Name: </span> ${player.name}</p>
          <p><span>Country: </span> ${player.birthPlace}</p>
          <p><span>Age: </span> ${player.birthYearShort}</p>
          <p><span>Position: </span> ${player.position}</p>
          <p><span>Team: </span> ${player.team} <img src="${player.teamLogo}">  </p>
        </div>
      </div>
      <div class="slider-dots">
        <div class="dot dot-left active"></div>
        <div class="dot dot-right"></div>
      </div>
    </div>
    <div class="logo-rank">
      <img src="${player.ballondorLogo}">
      <p>${player.ranking}<span>nd</span></p>
    </div>
    <a class="player-btn" href="players-page.html?id=${player.id}">
      <img class="img-button" src="${player.button}">
    </a>
  </div>
`;

export const profileGridTmpl = (player) =>
  ` <section class="team-grid">
    <div class="team-profile">
        <img src="${player.playerPageImg}">
        <p>${player.name}</p>
        <p>${player.team}</p>
        <p>${player.birthPlace}</p>
        <p>${player.birthYearShort}</p>
        <p>${player.position}</p>
        
      </div>
      </section>
`;

export const playerPageTmpl = (player) =>
  `
<div class="player-page-grid">

 <div class="grid-1">

    <figure>
    <img src="${player.playerPageImg}">
    <img src="${player.teamLogo}">
    </figure>

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
<img src="${player.pictureGallery}">
<img src="${player.pictureGallery}">
<img src="${player.pictureGallery}">
<img src="${player.pictureGallery}">
 </div>
  </div>
  
  </div> 
          `;
