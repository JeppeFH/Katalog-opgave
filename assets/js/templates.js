// Template functions - hver function opfører sig som en HTML template.
export const playerListTmpl = (player) =>
  `
      <img src="${player.picture}${player.id}">
                <div><p>${player.ranking}</p></div>
                <div><p>${player.name}</p></div>
                <p><b>${player.title}</b></p>
                <p><i>${player.price} kr</i></p>
                <label class="read-more-btn" ><a>Læs mere om produkt</a></label>
                <div class="read-more">  
                <p>${player.info1}</p>
                 <p>${player.info2}</p>
                  <p>${player.info3}</p>
                </div>
            <button class="product-btn"><a href="page.html?id=${player.id}">Se produkt</a></button> 
             
            </div>
            `;

export const playerPageTmpl = (player) =>
  `
              <div class="product-list-display">
              <p><i>${player.description} kr</i></p>
              <p><b>${player.title}</b></p>
              <p><i>${player.price} kr</i></p>
              <img src="${player.image}${player.id}">
          <button><a href="index.html">Tilbage</a></button> 
          </div> 
          `;
