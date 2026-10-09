let editorI = 0;
let removeLastOnExit = false;
const eDialog = document.getElementById("editorD");
eDialog.addEventListener("close", () =>
{
    if (removeLastOnExit)
    {
        removeLastOnExit = false;
        deleteTodo(editorI);
    }
});
const eEditor = document.getElementById("editorT");
eEditor.addEventListener("keypress", (evt) =>
{
    if (evt.keyCode == 13 && !evt.shiftKey)
    {
        evt.preventDefault(); 
        editorApply();
        return true;
    }
});

function editorOpen(i)
{
    editorI = i;
    const str = JSON.parse(window.localStorage.getItem("todos"))[i].cont;
    const strl = str.length;
    eEditor.value = str;
    eDialog.showModal();
    eEditor.focus();
    eEditor.setSelectionRange(strl, strl);
}

function editorCreate()
{
    removeLastOnExit = true;
    let v = JSON.parse(window.localStorage.getItem("todos"));
    let len = v.length;
    v.push({cmp:false, cont:""});
    window.localStorage.setItem("todos", JSON.stringify(v));
    editorOpen(len);
}

function editorApply()
{
    const was = removeLastOnExit;
    removeLastOnExit = false;
    eDialog.close();
    if (eEditor.value.replace(/^\s+|\s+$/g, '') == "")
    {
        deleteTodo(editorI);
        if (!was && (editorI > 1))
            setTodoEFocus(editorI - 1);
        return;
    }
    setTodo(editorI, eEditor.value);
    if (!was)
        setTodoEFocus(editorI);
}