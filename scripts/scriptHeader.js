const headerDropdownButton = document.getElementById('headerDropdownButton');

const headerDropdown = document.getElementById("header-dropdown");

headerDropdownButton.addEventListener('click', () =>{
    if(headerDropdown.classList.contains('header-dropdown--show')){
        headerDropdown.classList.remove('header-dropdown--show')
    }else{
        headerDropdown.classList.add('header-dropdown--show');
    }
});