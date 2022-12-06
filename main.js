// start head
let heading = document.createElement("div");
let Logo = document.createElement("h1");
let LogoText = document.createTextNode("Elzero");
let ul = document.createElement("ul");
let li=[],i=0;
heading.classList.add("head");
Logo.appendChild(LogoText);
while(i<4){
    
    li[i]= document.createElement("li");
    i++;
}
li[0].append("Home")
li[1].append("About")
li[2].append("Servce")
li[3].append("Contact")
i =0;
while(i<4){
    ul.append(li[i])
    
    i++;
}
ul.setAttribute("class","head");

console.log(ul)
heading.append(Logo,ul);
console.log(heading)
ul.style.cssText = "list-style-type: none;font-size: 18px; color : #333 ;margin-right: 10px"
heading.style.cssText = `display: flex;justify-content: space-between; background-color :white`
document.body.style.cssText = `margin : 0;`;
Logo.style.cssText =`margin : 5px;padding: 5px;font-size : 30px;color :rgb(39, 117, 71)`
i =0;
while(i<4){
   li[i].style.cssText = `display: inline-block; padding: 5px;margin-right : 5px;`
    
    i++;
}
document.body.append(heading)
//end head
//
//strat body
let contineur = document.createElement("div");
contineur.classList.add("contineur");
document.body.append(contineur)
for(let i=1; i<=15 ;i++){
    let box = document.createElement("div");
let spanNum = document.createElement("span");
let count = document.createTextNode(`${i}`);
let txt = document.createTextNode(`Product`);
spanNum.append(count)
let spanPro = document.createElement("span");
spanPro.append(txt)

box.append(spanNum,spanPro)
contineur.append(box)
 
// formats
box.style.cssText= `text-align: center;padding: 10px 85px;background-color: white;margin : 10px;
 display: block;
 `
 spanPro.style.cssText = `display: block;padding : 10px 60px;margin: 20px`
 spanNum.style.cssText = `font-size : 40px; padding : 20px 40px;`
}
contineur.style.cssText= `text-align : center;display: flex;flex-wrap: wrap; padding: 0 10px;`
document.body.style.background= "#3333"
//end body

// start footer
let footCont = document.createElement("div");
let p = document.createElement("h3");
let copyright = document.createTextNode("Copyright 2022 !");
p.append(copyright)
footCont.append(p)
p.style.cssText= "padding :60px 10px 5px 10px; font-size: 60px;color: white"
footCont.style.cssText= "background-color : green; text-align :center;padding: 50px 2px  06px 2px"
document.body.append(footCont)



// end  footer


