const input = document.getElementById("words");
const container = document.querySelector(".container");

let numOfWords;

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
    numOfWords = input.value;
    let text = "";

    while(numOfWords>0)
    {
        const wordLength = (Math.random()*10).toFixed(0);
        const word = generateWord(wordLength);
        text += word+" ";
        numOfWords--;
    }
    

    const para = document.createElement("p");
    para.setAttribute("class","paras");
    para.innerText = text;

    container.append(para);
    
}
    
