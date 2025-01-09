import education from './../assets/education.png'
import projects from './../assets/projects.png'
import languages from './../assets/languages.png'
import git from './../assets/git.png'
import vscode from './../assets/vscode.png'
import mongo from './../assets/mongo.png'
import firebase from './../assets/firebase.png'
import eCommerce from './../assets/e-commerce.png'
import webDevelopment from './../assets/web-development.png'
import webDesign from './../assets/web-design.png'
import uxUi from './../assets/ux-ui.png'
import arrowRight from './../assets/arrowRight.png'


export const assets = {
    education,
    projects,
    languages,
    git,
    vscode,
    mongo,
    firebase,
    eCommerce,
    webDesign,
    webDevelopment,
    uxUi,
    arrowRight
}
export const myInfo = [
    { icon: assets.languages, title: "Languages", description: "HTML, CSS, JavaScript, React Js, Next Js" },
    { icon: assets.education,title:'Education', description: " B.A. in Human Resources"},
    { icon: assets.projects, title: "Projects", description: "Built more than 5 projects"}
]

export const toolsData = [ 
    assets.vscode, assets.git, assets.firebase, assets.mongo,
]

export const serviceData = [
    { icon: assets.eCommerce, title: 'E-commerce', description: 'E-commerce development involves creating online...', link: ''
    },
    { icon: assets.webDesign, title: 'Web Design', description: 'Web design blends creativity with technical skills to...', link: ''
    },
    { icon: assets.webDevelopment, title: 'Web Development', description: 'Web development involves a combination of...', link: ''
    },
    { icon: assets.uxUi, title: 'UX/UI Design', description: 'UX/UI together ensure that product is visually appealing and...', link: ''
    },
]