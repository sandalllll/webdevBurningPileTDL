const themeS = document.getElementById("themeS");
themeS.addEventListener("change", () =>
{
    if (themeS.checked == true)
	{
        window.localStorage.setItem("theme", "d");
        theHtml.setAttribute("data-theme", "dark");
    }
	else
	{
        window.localStorage.setItem("theme", "b");
        theHtml.setAttribute("data-theme", "bright");
	}
});

if (window.localStorage.getItem("theme") == "d")
{
    themeS.checked = true;
    theHtml.setAttribute("data-theme", "dark");
}