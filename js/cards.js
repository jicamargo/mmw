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
      cardTitle: 'Musician conferences',
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
  
  const cardcnt = document.getElementById('cards-cnt');
  let div = null;
  let card = null;
  
  for (let i = 0; i < arrCards.length; i += 1) {
    card = arrCards[i];
  
    div = document.createElement('div');
    div.classList = 'card mb-1';
    div.id = card.id;

    div.innerHTML = `<div class="card mb-1">
        <div class="row g-1">
          <div class="col-2 col-md-12 img-cnt p-0">
            <img src="${card.img}" class="img-fluid ms-2 ms-md-0" alt="${card.cardTitle} icon.">
          </div>
          <div class="card-body col-4 col-md-12 text-center align-self-center">
            <h5 class="card-title">${card.cardTitle}</h5>
          </div>
          <div class="col-6 col-md-12 py-4 px-2 text-center">
            <p class="card-text">${card.cardText}</p>
          </div>
        </div>
      </div>` 
    cardcnt.appendChild(div);  
  }
  

/**************************** SPEAKERS **********************************/

const arrSpeakers = [
  {
    id: 'speaker-0',
    name: 'Adam Shomer',
    title: 'Vice President, Business Development, Create Music Group',
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
    img: './images/adam-shomer-250x250.jpg'
  },
  {
    id: 'speaker-1',
    name:"Adam Rogers",
    title: "Head of Studio and VP of Creative , Departure Lounge",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
    img: './images/adam-rogers-250x250.jpg'
  },
  {
    id: 'speaker-2',
    name:"Adesegun Adeosun",
    title: "Founder & CEO and Co-Founder of Afro Nation, Smade Entertainment Group",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
    img: './images/adesegun-250x250.jpg'
  },
  {
    id: 'speaker-3',
    name:"Alex Branson",
    title: "SVP of Music Services, Beatport",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
    img: './images/alex-branson-250x250.jpg'
  },
  {
    id: 'speaker-4',
    name:"Anna Ruddick",
    title: "Music Industry & Client Services Manager, The Unison Fund",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
    img: './images/anna-buddick-250x250.jpg'
  },
  {
    id: 'speaker-5',
    name:"Anne McKinnon",
    title: "CEO, Ristband",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam",
    img: './images/anne-mckinnon-250x250.jpg'
  }
]

const speakers = document.getElementById('speakers-cnt');


for (let i = 0; i < arrSpeakers.length; i += 1) {
  card = arrSpeakers[i];

  div = document.createElement('div');
  div.classList = 'card border-0';
  div.id = card.id;
  div.innerHTML = 
    `<div class="row g-4">
      <div class="col-4 img-cnt p-0">
        <img src="${card.img}" class="img-fluid" alt="${card.name} photo.">
      </div>
      <div class="card-body col-8 text-left">
        <h5 class="spk-card-name">${card.name}</h5>
        <h5 class="spk-card-title">${card.title}</h5>
        <div class="spk-short-line"></div>
        <p class="spk-card-text">${card.bio}</p>
      </div>
    </div>` 
  speakers.appendChild(div);  
}

