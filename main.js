// Dichiaro le costanti 
const container = document.querySelector('.gp-container');
const btn = document.querySelector('.btn-outline-dark');
const option = document.getElementById('options');
const BOMBS_NUMBER = 16;

// Aggiungo l'event listner al click del bottone, determinando il numero di quadrati per livello di difficoltà 
btn.addEventListener('click', function(){    
    // Azzero il contenuto dell'HTML ogni volta che clicco il bottone 
    container.innerHTML = "";
    // Dichiaro i quadrati da utilizzare per le difficoltà 
    let squares;
    // Determino le difficoltà 
    if(option.value == 'easy'){
        squares = 100;
    }else if(option.value == 'normal'){
        squares = 81;
    }else{
        squares = 49;
    }

    init(squares);

    const bombs = [];


    generateBombs();


    console.log(bombs);


    function generateBombs(){
        
        for(let i = 0; i < BOMBS_NUMBER; i++){
            bomb = generateRandom(1, squares);
            if(bombs.includes(bomb)){
                i--
            } else{
                bombs.push(bomb);
            }
            
        }


    }
})

// Determino la funzione che creerà il ciclo a seconda della difficoltà selezionata 
function init(tot){
    for(let i = 0; i < tot; i++){
        const sq = createSquare(container);
        sq.innerHTML = i + 1;
        sq.addEventListener('click',function(){
            sq.classList.add('gp-clicked');
            // if(generateBombs(bombs).includes(i)){
            //     this.classList.add('gp-bomb');
            // }
        })
    
    }
}

// Determino la funzione che "appende" l'elemento creato associandogli la giusta classe 
function createSquare(target){
    const sq = document.createElement('div');
    target.append(sq);
    if(option.value == 'easy'){
        sq.classList.add('gp-easy');
    }else if(option.value == 'normal'){
        sq.classList.add('gp-normal');
    }else{
        sq.classList.add('gp-hard');
    }
    return sq;
}

function generateRandom(min, max){
    let result = (Math.floor(Math.random() * max) + min);
    return result; 
}
    

