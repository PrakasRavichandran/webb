AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "BLOOM ENERGY v1.0",
    cardImage: "assets/images/experience-page/p1.jpg",
    place: "SRM TRP ENGINEERING COLLEGE",
    time: "(February, 2020 )",
    desp: "<b>EVENTS:</b> Technical quiz, Meme Creation and Project.",
  },
  {
    title: "BLOOM ENERGY v1.0.1",
    cardImage: "assets/images/experience-page/p2.jpg",
    place: "IMAYAM COLLEGE OF ENGINEERING",
    time: "(Aug, 2019))",
    desp: "<b>EVENTS:</b> Technical quiz, and Circuit Debugging.",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "TEK-CLUSTER'20",
    cardImage: "assets/images/experience-page/c1.jpg",
    description:
      "",
  },
  {
    title: "TECNOKRATZ'2k21",
    cardImage: "assets/images/experience-page/c2.jpg",
    description:
      "",
  },
  {
    title: "AGRITHON 2k21",
    cardImage: "assets/images/experience-page/c3.jpg",
    description:
      "",
  },
  {
    title: "FAISCA'20",
    cardImage: "assets/images/experience-page/c4.jpg",
    description:
      "",
  },
  {
    title: "ZREYAS'20",
    cardImage: "assets/images/experience-page/c5.jpg",
    description:
      "",
  },
  {
    title: "MESCIA 2021",
    cardImage: "assets/images/experience-page/c6.jpg",
    description:
      "",
  },
  {
    title: "INNOVATION BATTLEFILD",
    cardImage: "assets/images/experience-page/c7.jpg",
    description:
      "",
  },
  {
    title: "HERTZ21'",
    cardImage: "assets/images/experience-page/c8.jpg",
    description:
      "",
  },
  {
    title: "AVENTURO'21",
    cardImage: "assets/images/experience-page/c9.jpg",
    description:
      "",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "WorkShop",
    subtitle: "Kongunadu College Of Engg & Tech",
    image: "assets/images/experience-page/Screenshot (19).png",
    desp: "Innovations in Industrial Automation - TLA Portal Siemens.",
  },
  {
    title: "Poster Designing",
    subtitle: "K.Ramakrishnan College Of Technology",
    image: "assets/images/experience-page/Screenshot (18).png",
    desp: "PARIVARTHAN 2K21",
  },
  {
    title: "Poster Designing",
    subtitle: "K.Ramakrishnan College Of Technology",
    image: "assets/images/experience-page/PRAKASH RAVICHANDRAN POSTER STELLAR-2K21 CERTIFICATE-1.png",
    desp: "Poster Stellar 2K21",
  },
  {
    title: "Innovations from Waste",
    subtitle: "Kongu Engineering College",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ _Time Is What We Want Most_ But What We Use Worst._presentationday _competition _alone _fear _results _happiness _haters__CNIMdrTD20u_6(JPG).jpg",
    desp: "Wealth From JunkYard",
  },
  {
    title: "Oratorial Competition",
    subtitle: "Kongu Engineering College",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ _Time Is What We Want Most_ But What We Use Worst._presentationday _competition _alone _fear _results _happiness _haters__CNIMdrTD20u_4(JPG).jpg",
    desp: "Fresh Fate",
  },
  {
    title: "Meme Creation",
    subtitle: "Kongu Engineering College",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ _Time Is What We Want Most_ But What We Use Worst._presentationday _competition _alone _fear _results _happiness _haters__CNIMdrTD20u_3(JPG).jpg",
    desp: "Meme Battle",
  },
  {
    title: "Advertisement Makking",
    subtitle: "Kongu Engineering College",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ _Time Is What We Want Most_ But What We Use Worst._presentationday _competition _alone _fear _results _happiness _haters__CNIMdrTD20u_2(JPG).jpg",
    desp: "Adzap",
  },
  {
    title: "Techical Quiz",
    subtitle: "New Prince Shri Bhavani College",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ _I_M coming for everything they said i couldn_t have. _presentationday _competition _alone _fear _results _happiness _haters__CG9XJ20DNSh_1(JPG).jpg",
    desp: "",
  },
  {
    title: "Techical Quiz",
    subtitle: "Bannari Amman Institute Of Technology",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ ____tha English enna avan appan veettu soththa _ Nee pesra--_presentationday _confidence _learning _fear__CHh7qjZjFTj_2(JPG).jpg",
    desp: "",
  },
  {
    title: "Photography",
    subtitle: "Bannari Amman Institute Of Technology",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ ____tha English enna avan appan veettu soththa _ Nee pesra--_presentationday _confidence _learning _fear__CHh7qjZjFTj_1(JPG).jpg",
    desp: "",
  },
  {
    title: "Project Presentation",
    subtitle: "Bannari Amman Institute Of Technology",
    image: "assets/images/experience-page/Prakash Ravichandran on Instagram_ ____tha English enna avan appan veettu soththa _ Nee pesra--_presentationday _confidence _learning _fear__CHh7qjZjFTj_0(JPG).jpg",
    desp: "",
  },
  {
    title: "Technical Ideas",
    subtitle: "Kongu Engineering College",
    image: "assets/images/experience-page/c6.jpg",
    desp: "Tech Thoughts",
  },
  {
    title: "Technical Quiz",
    subtitle: "IMAYAM COLLEGE OF ENGINEERING",
    image: "assets/images/experience-page/IMG-20190908-WA0000.jpg",
    desp: "",
  },
  {
    title: "Meme Creation",
    subtitle: "SRM TRP ENGINEERING COLLEGE",
    image: "assets/images/experience-page/118944692_1216565645377766_5221065077491104956_n.jpg",
    desp: "",
  },
  {
    title: "Advertisement Makking",
    subtitle: "Kongu Engineering College",
    image: "assets/images/experience-page/0001.jpg",
    desp: "Ad-Wiz",
  }
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
