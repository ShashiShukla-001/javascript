const input = document.getElementById("words");
const container = document.querySelector(".container");


const generateWord = (n) => {
    let text = "";
    const letters ="abcdefghijklmnopqrstuvwxyz";

    for(let i=0; i<n; i++ )
    {
        const random = (Math.random()*25).toFixed(0);
        text += letters[random];
    }
    return text;
}



const generatePara = () => {
    let numOfWords = input.value;
    const para = document.createElement("p");
    let text = "";

    while(numOfWords>0)
    {
        const wordLength = (Math.random()*10).toFixed(0);
        const word = generateWord(wordLength);
        text += word+" ";
        numOfWords--;
    }
    
    para.innerText = text;
    para.setAttribute("class","paras");

    container.append(para);
}
    
