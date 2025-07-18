const input = document.getElementById("commandInput")
const output = document.getElementById("output")

const fileSystem = {
    "/":["About me","Thanks by companies","contact","projects"],
    "/About me":["about.txt"],
    "/Thanks by companies":["https://hackerone.com"],
    "contact":["contact.txt"],
    "projects":["project.text"],
    content:{
        "about.txt":"I'm Alok stha, an aspiring cybersecurity researcher",
        "contact.txt":`
        Email:alokshrestha12386@gmail.com
        Github:github.com/alokshresthadev
        Instagram:instagram.com/aroku998
        `,
        "project.txt":"None till now"
    }
};

let currentDir = "/"
let history = []
let historyIndex = -1