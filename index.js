/*
1. add event lisenar
2, input fild value
2.5 . clear the depojit input field after geating the value
4. privas dipojit total
5. calclulate new depojit total and set the value to the depojit total

*/

document.getElementById('depojit-btn').addEventListener('click', function(){
//    2 stap 2
    const depojitTotalElement =document.getElementById('depojit-input');
    const depojitFildString =depojitTotalElement.value; 
    const newDepojitAmount = parseFloat(depojitFildString);

    depojitTotalElement.value = '';

    // step4
    const depojitTotalFil =document.getElementById('deposite-total');
    const privasDepojitString =depojitTotalFil.innerText;
    const privasDepojitTotal  = parseFloat(privasDepojitString);

    // step5
    const newDepojitTotal = newDepojitAmount + privasDepojitTotal;
    depojitTotalFil.innerText = newDepojitTotal;
})