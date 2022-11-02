function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Icone ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Icone ${player2}">
  </li>
  `
}

function createCard(date, day ,games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span> </h2>
      <ul>
        ${games}
      </ul>
    </div>  
      `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW"/>
  </header>
  <main id="cards">
    ${createCard("20/11", "domingo",
      createGame("brazil","16:00","serbia")
    )}
    ${createCard("21/11", "segunda", 
      createGame("brazil","16:00","serbia")
    )}    
    ${createCard("22/11", "terça", 
      createGame("brazil","16:00","serbia")
    )}    
    ${createCard("23/11", "quarta", 
      createGame("brazil","16:00","serbia")
    )}      
  </main>
`
