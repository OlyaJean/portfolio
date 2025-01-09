import education from './../assets/education.png'
import projects from './../assets/projects.png'
import languages from './../assets/languages.png'
import git from './../assets/git.png'
import vscode from './../assets/vscode.png'
import mongo from './../assets/mongo.png'
import firebase from './../assets/firebase.png'


export const assets = {
    education,
    projects,
    languages,
    git,
    vscode,
    mongo,
    firebase,
}
export const myInfo = [
    { icon: assets.languages, title: "Languages", description: "HTML, CSS, JavaScript, React Js, Next Js" },
    { icon: assets.education,title:'Education', description: " B.A. in Human Resources"},
    { icon: assets.projects, title: "Projects", description: "Built more than 5 projects"}
]

export const toolsData = [ 
    assets.vscode, assets.git, assets.firebase, assets.mongo,
]