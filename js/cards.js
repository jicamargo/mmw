   const arrCards = [
    {
      id: 'card-0',
      cardTitle: 'Music festival',
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
      img: './images/icon-concert-1.png',
      imgHover: './images/icon-concert-2.png'
    },
    {
      id: 'card-1',
      cardTitle: 'Awards shows',
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
      img: './images/icon-award-1.png',
      imgHover: './images/icon-award-2.png'
    },
    {
      id: 'card-2',
      cardTitle: 'Conferences',
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
      img: './images/icon-conference-1.png',
      imgHover: './images/icon-conference-2.png'
    },
    {
      id: 'card-3',
      cardTitle: 'Networking',
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
      img: './images/icon-networking-1.png',
      imgHover: './images/icon-networking-2.png'
    },
    {
      id: 'card-4',
      cardTitle: 'Trade exposition',
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
      img: './images/icon-merch-1.png',
      imgHover: './images/icon-merch-2.png'
    }
  ];
  
  const program = document.getElementById('cards-cnt');
  let div = null;
  let card = null;
  
  for (let i = 0; i < arrCards.length; i += 1) {
    card = arrCards[i];
  
    div = document.createElement('div');
      div.innerHTML = `
        <div class="card mb-1" >
          <div class="row g-1">
            <div class="col-2 col-md-12 img-cnt p-0">
              <img src="${card.img}" class="img-fluid " alt="${card.cardTitle} icon.">
            </div>
            <div class="card-body col-3 col-md-12">
              <h5 class="card-title">${card.cardTitle}</h5>
            </div>
            <div class="col-7 col-md-12">
              <p class="card-text">${card.cardText}</p>
            </div>
          </div>
        </div>` 

      console.log("entre ");
    program.appendChild(div);
    
  }
  