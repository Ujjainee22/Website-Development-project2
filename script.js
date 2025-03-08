let val1
let val2
 /*
        let txt=document.querySelector("h1");
        txt.innerText="Refresh ME!";
        */
  let btn=document.querySelector("button");
  btn.addEventListener("click",()=>
{
    console.log("button was clicked!!");
    function dice1()
{
let generate=Math.floor(Math.random()*6)+1;
let diceimg1="images/dice"+generate+".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",diceimg1);
return generate;
}
  val1=dice1();
 function dice2()
{
let generate=Math.floor(Math.random()*6)+1;
let diceimg2="images/dice"+generate+".png";
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",diceimg2);
return generate;
}
 val2=dice2();
if(val1>val2)
{
    console.log("player 1 winner");
    let txt=document.querySelector("h1");
    txt.innerText="Player 1 is the winner!!";
    
}
if(val2>val1)
    {
        console.log("player 2 winner");
        let txt=document.querySelector("h1");
    txt.innerText="Player 2 is the winner!!";
    }
   if(val1==val2)
    {
        console.log("DRAW!!");
        let txt=document.querySelector("h1");
    txt.innerText="DRAW!!";
    }

})

    