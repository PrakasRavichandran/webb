/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Multi-Page Portfolio",
    cardImage: "assets/images/project-page/portfolio-1.png",
    Previewlink: "http://prakashravichandran.me/web/",
    
  },
  {
    title: "Single Page 3D Portfolio 1",
    cardImage: "assets/images/project-page/portfolio-2.png",
    Previewlink: "http://prakashravichandran.me/webbie/",
    
  },
  {
    title: "Single Page Portfolio 1",
    cardImage: "assets/images/project-page/portfolio-3.png",
    Previewlink: "http://prakashravichandran.me/website/",
   
  },
  {
    title: "Single Page Portfolio 2",
    cardImage: "assets/images/project-page/portfolio-4.png",description: "Exercise tracker built using basic redux.",
    Previewlink: "http://prakashravichandran.me/WEBBB/",
    
  },
  {
    title: "Neomorphism Portfolio",
    cardImage: "assets/images/project-page/portfolio-5.png",
    Previewlink: "#",
    
  },
  {
    title: "Glassmorphism Portfolio",
    cardImage: "assets/images/project-page/portfolio-6.png",
    Previewlink: "http://prakashravichandran.me/Glasso/",
    
  },
  {
    title: "Coloured Portfolio",
    cardImage: "assets/images/project-page/portfolio-7.png",
    Previewlink: "http://prakashravichandran.me/webie/",
    
  },
  {
    title: "Single Page 3D Portfolio 2",
    cardImage: "assets/images/project-page/portfolio-8.png",
    Previewlink: "http://prakashravichandran.me/adv/",
   
  },
  {
    title: "Project Website",
    cardImage: "assets/images/project-page/portfolio-9.png",
    Previewlink: "http://prakashravichandran.me/SmartClassroom/",
   
  },
  {
    title: "Profile Card",
    cardImage: "assets/images/project-page/portfolio-10.png",
    Previewlink: "",
    
  },
  {
    title: "Event Website",
    cardImage: "assets/images/project-page/portfolio-11.png",
    Previewlink: "https://krct-eee.github.io/VOLTRON-2K21/",
    
  },
  {
    title: "Music Web App",
    cardImage: "assets/images/project-page/portfolio-12.png",
    Previewlink: "http://prakashravichandran.me/Fav10Songs/",
    
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
