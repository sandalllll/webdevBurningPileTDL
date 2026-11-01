import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
createApp(App).mount('#app')

const theHtml = document.getElementById('theHtml');
const editorDialog = document.getElementById("editorDialog");
const editorTextarea = document.getElementById("editorTextarea");

//page min height fix
addEventListener("scroll", (event) =>
{
    if (event.position)
        theHtml.className = "js-htmlstat";
    else
        theHtml.className = "js-htmldyn";
});
const resizeObserver = new ResizeObserver(() =>
{
    if (theHtml.scrollTop == 0)
        theHtml.className = "js-htmlstat";
});
resizeObserver.observe(theHtml);
