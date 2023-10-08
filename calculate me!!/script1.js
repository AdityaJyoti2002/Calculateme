let stringss = "";
let buttonss = document.querySelectorAll('.button');
Array.from(buttonss).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            stringss = eval(stringss);
            document.querySelector('input').value = stringss;

        }
        else if(e.target.innerHTML == 'C'){
            stringss = "";
            document.querySelector('input').value = stringss;

        }
        else{
        console.log(e.target)
        stringss = stringss + e.target.innerHTML;
        document.querySelector('input').value = stringss;
        }
    })
    
})
