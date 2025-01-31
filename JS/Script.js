let GetData = {
  Name: "Ashkan",
  Family: "Shasadeghi",
  Age: Date().slice(11, 15),
  Section: "Engineer",
  Job: ["Web Developer", "Dsigner", "Trader"],
  Description: `
    Hello my name is Ashkan.
    i live in the Semnan City that is in the norv of Iran
    i can maker web project by html, css and java script.
    and i know making projects by framewoks xample of React jS and Next JS.
    `,
  Call: {
    Print: "+98 (903) 651 - 5293",
    Number: "+989036515293"
  },
  VC: "./file/Resume/Ashkan Shasadeghi.pdf",
  Cart: {
    Number: "6037 6975 6595 3541",
    IR: "IR 7101 900 0000 021 6080 39 3006",
    Account: "021 6080 39 3006"
  },
  Address: {
    Telegram: "https://t.me/Ashkan_Shasadeghi",
    Email: "AshkanSadeghi023.as@gmail.com",
    Instagram: "https://instagram.com/Ashkan.Shasadeghi",
    WhatsApp: "https://wa.me/989036515293",
    LinkeDin: "https://www.linkedin.com/in/ashkan-shasadeghi-349996247/",
    Github: "https://github.com/AshkanShasadeghi"
  }
};

function ShowModal(Action) {
  console.log("Hello");

}

function Information() {
  let Navigation = document.querySelector("header nav.Information");

  let ABOUT = document.createElement("button");
  let GITHUB = document.createElement("a");

  GITHUB.setAttribute('href', GetData.Address.Github)
  GITHUB.target = "_blank"
  ABOUT.addEventListener("click", () => {
    ShowModal(true);
  });

  GITHUB.innerHTML = "github";
  ABOUT.innerHTML = "About Us";

  [ABOUT, GITHUB].map(r => {
    Navigation.appendChild(r);
  });
}

Information();

function Article() {
  let Article = document.querySelector("container article");

  let SECTION = document.createElement("p");
  let FULLNAME = document.createElement("h1");
  let JOB = document.createElement("strong");

  SECTION.setAttribute("class", "lobster-regular");
  FULLNAME.setAttribute("class", "oleo-script-bold");
  JOB.setAttribute("class", "caveat");

  let Output = "";

  SECTION.innerHTML = GetData.Section;
  FULLNAME.innerHTML = `${GetData.Name} ${GetData.Family} `;

  GetData.Job.map((r, index) => {
    Output += r;
    if (index + 1 !== GetData.Job.length) {
      Output += ","
    }
  });

  JOB.innerHTML = Output;

  [SECTION, FULLNAME, JOB].map(r => {
    Article.appendChild(r)
  })
}

Article();