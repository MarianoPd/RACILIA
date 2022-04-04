const dropdownMenuButton1 = document.getElementById('dropdownMenuButton1');

const dropdownMenu1 = document.getElementById('dropdownMenu1');

dropdownMenuButton1.addEventListener('click', () =>{
    if(dropdownMenu1.classList.contains("show")){
        dropdownMenu1.classList.remove("show");
    }else{
        
        dropdownMenu1.classList.add("show");
    }
} );

const dropdownMenuButton2 = document.getElementById('dropdownMenuButton2');

const dropdownMenu2 = document.getElementById('dropdownMenu2');

dropdownMenuButton2.addEventListener('click', () =>{
    if(dropdownMenu2.classList.contains("show")){
        dropdownMenu2.classList.remove("show");
    }else{
        
        dropdownMenu2.classList.add("show");
    }
} );


