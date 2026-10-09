const container = document.getElementById('container');
const search = document.getElementById('search');
document.getElementById("addB").addEventListener("click", () =>
{
    editorCreate();
});
let searchNow = "";
let accessList;

function refresh()
{
    const todos = JSON.parse(window.localStorage.getItem("todos"));
    let substring = search.value.replace(/[\W_]+/g," ");
    if (substring)
        substring = substring.toLowerCase();
    container.innerHTML = "";
    accessList = [];
    for (const i in todos)
    {
        if (substring)
            if (!todos[i].cont.replace(/[\W_]+/g," ").toLowerCase().includes(substring))
                continue;
        if (todos[i].cmp)
            continue;
        const div1 = document.createElement("div");
        div1.className = "js-todo js-todo-outer";
        {
            const btn1 = document.createElement("button");
            btn1.className = "js-todo js-todo-inner js-todo-inner--side";
            btn1.ariaLabel = "приметить помысел: " + todos[i].cont;
            btn1.innerText = "❎";
            {
                const vle = i;
                btn1.addEventListener("click", function(event) {mark(vle);});
            }
            div1.appendChild(btn1);
        }
        {
            const div2 = document.createElement("div");
            div2.className = "js-todo js-todo-inner js-todo-inner--center";
            div2.innerText = todos[i].cont;
            div1.appendChild(div2);
        }
        {
            const btn2 = document.createElement("button");
            btn2.className = "js-todo js-todo-inner js-todo-inner--side";
            btn2.ariaLabel = "изменить помысел: " + todos[i].cont;
            btn2.innerText = "🖉";
            {
                const vle = i;
                btn2.addEventListener("click", function(event) {editorOpen(vle);});
            }
            div1.appendChild(btn2);
        }
        container.appendChild(div1);
        accessList[i] = div1;
    }
    for (const i in todos)
    {
        if (substring)
            if (!todos[i].cont.replace(/[\W_]+/g," ").toLowerCase().includes(substring))
                continue;
        if (!todos[i].cmp)
            continue;
        const div1 = document.createElement("div");
        div1.className = "js-todo js-todo-outer";
        {
            const btn1 = document.createElement("button");
            btn1.className = "js-todo js-todo-inner js-todo-inner--side";
            btn1.ariaLabel = "возвратить помысел: " + todos[i].cont;
            btn1.innerText = "✅";
            {
                const vle = i;
                btn1.addEventListener("click", function(event) {unmark(vle);});
            }
            div1.appendChild(btn1);
        }
        {
            const div2 = document.createElement("div");
            div2.className = "js-todo js-todo-inner js-todo-inner--center";
            {
                const s1 = document.createElement("s");
                s1.innerText = todos[i].cont;
                div2.appendChild(s1);
            }
            div1.appendChild(div2);
        }
        {
            const btn2 = document.createElement("button");
            btn2.className = "js-todo js-todo-inner js-todo-inner--side";
            btn2.ariaLabel = "изменить помысел: " + todos[i].cont;
            btn2.innerText = "🖉";
            {
                const vle = i;
                btn2.addEventListener("click", function(event) {editorOpen(vle);});
            }
            div1.appendChild(btn2);
        }
        container.appendChild(div1);
        accessList[i] = div1;
    }
}

function mark(i)
{
    const v = JSON.parse(window.localStorage.getItem("todos"));
    v[i].cmp = true;
    window.localStorage.setItem("todos", JSON.stringify(v));
    refresh();
    Array.from(accessList[i].children)[0].focus();
}

function unmark(i)
{
    const v = JSON.parse(window.localStorage.getItem("todos"))
    v[i].cmp = false;
    window.localStorage.setItem("todos", JSON.stringify(v));
    refresh();
    Array.from(accessList[i].children)[0].focus();
}

function deleteTodo(i)
{
    let vals = JSON.parse(window.localStorage.getItem("todos"));
    vals.splice(i, 1);
    window.localStorage.setItem("todos", JSON.stringify(vals));
    refresh();
}

function setTodo(i, cont)
{
    let vals = JSON.parse(window.localStorage.getItem("todos"));
    vals[i].cont = cont;
    window.localStorage.setItem("todos", JSON.stringify(vals));
    refresh();
}

function setTodoEFocus(i)
{
    if ((i < accessList.length) && accessList[i])
        Array.from(accessList[i].children)[2].focus();
}

{
    let str = window.localStorage.getItem("todos");
    if (str == null)
        str = "";
    try
    {
        JSON.parse(str);
    }
    catch (e)
    {
        window.localStorage.setItem("todos", "[]");
    }
    if (str.trim() == "")
        window.localStorage.setItem("todos", "[]");
}

refresh();

search.addEventListener("input", () =>
{
    if (searchNow == search.value)
        return;
    searchNow = search.value;
    refresh();
});