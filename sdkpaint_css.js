var headTag = document.getElementsByTagName('head')[0]
const linkforCSSfile = document.createElement("link");
linkforCSSfile.href = 'sdkpaint_css.css' 
linkforCSSfile.type = 'text/css'
linkforCSSfile.rel = 'stylesheet'
headTag.appendChild(linkforCSSfile);
document.body.appendChild(headTag);
//htps://jinxcade.github.io/endpoint-projects/sdkpaint_css.css