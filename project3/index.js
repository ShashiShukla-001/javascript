const name = document.getElementById("name");
const container = document.querySelector(".tag-container");

const addName = () =>
{
    if(name.value == "" || name.value == " ") return null;
    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");

    tag.innerText = `Hey, I am ${name.value}`;
    container.append(tag);n 

}