const container=document.querySelector('body');
const button=document.querySelector('button');
const heading=document.querySelector('h1');

var changeMode=true;

const onClick = () =>{
    changeMode= !changeMode;
    if(changeMode===true){
        button.innerText="Light Mode";
        heading.innerText="This is Light Mode";
        container.classList.add('container-light');
        container.classList.remove('container-dark');
        button.classList.add('button-light');
        button.classList.remove('button-dark');
    }
    else{
        button.innerText="Dark Mode";
        heading.innerText="This is Dark Mode";
        container.classList.add('container-dark');
        container.classList.remove('container-light');
        button.classList.add('button-dark');
        button.classList.remove('button-light');
    }

}

button.addEventListener('click',onClick)