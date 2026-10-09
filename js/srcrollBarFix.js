const theHtml = document.getElementById('theHtml');

addEventListener("scroll", (event) =>
{
    if (event.position)
        theHtml.className = "js-htmldyn";
    else
        theHtml.className = "js-htmlstat";
});

const resizeObserver = new ResizeObserver(() =>
{
    if (theHtml.scrollTop == 0)
        theHtml.className = "js-htmlstat";
});

resizeObserver.observe(theHtml);