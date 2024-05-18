function bold() {
    let bold = document.getElementById('para')
     bold.style.fontFamily = ("IBM Plex Sans, sans-serif")
     bold.style.fontStyle = ("normal")
     bold.style.fontWeight = ("600") 

}

function italic() {
    let italic = document.getElementById('para')
     italic.style.fontFamily = ("IBM Plex Sans, sans-serif")
     italic.style.fontStyle = ("italic")
     italic.style.fontWeight = ("600") 

    
}

function underline() {
    let underline = document.getElementById('para')
    underline.style.textDecoration = ("underline")
}

function overline() {
    let overline = document.getElementById('para')
    overline.style.textDecoration = ("line-through")
}

function center() {
    let centerPara = document.getElementById('para')
    centerPara.style.textAlign = "center";
    
}

function corner() {
    let cornerPara = document.getElementById('para')
    cornerPara.style.textAlign = "right";
    
}

function start() {
    let startPara = document.getElementById('para')
    startPara.style.textAlign = "left";
    
}

