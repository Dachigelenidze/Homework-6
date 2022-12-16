let InputAdd = document.querySelector('.Input')
let ButtonAdd = document.querySelector('.button');
let Uladd = document.querySelector('.ul-tag');
let form = document.querySelector('.form');

    form.addEventListener('submit', function(x){
        x.preventDefault();

        let GetInputValue = InputAdd.value;
        if(InputAdd.value == " "){
            return ; 
        }
        let li = document.createElement('li');
        li.innerText = GetInputValue ;
        let DeleteButton = document.createElement('i')
        DeleteButton.classList.add('fa-solid','fa-delete-left')
        li.appendChild(DeleteButton);
        Uladd.appendChild(li);

        InputAdd.value = " " ;
        DeleteButton.addEventListener('click', function(){
            li.remove()
        })
        
});
let deleteall= document.querySelector('.fa-trash')

deleteall.addEventListener('click', function(){
    Uladd.innerHTML = " " ;   
})



let navigation = document.getElementById('nav');
let BurgerBar = document.getElementById('Bar-id');

BurgerBar.addEventListener('click', function(){
    navigation.classList.toggle('show');
})
