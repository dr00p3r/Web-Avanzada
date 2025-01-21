const clients = {
    n: 1,
    clients_names: ["Juan", "Ruben", "Joan", "Edison"]
};

const clients2 = {
    n: 2,
    clients_names: ["Juanito", "Pepe", "Rubencito", "Edisito"]
};

const clients3 = {
    n: 3,
    clients_names: ["ñammian", "coco", "juanchito", "deimian"]
};

const times = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

async function simulate_bank_queue(clients){

    let my_promise;

    for(let client of clients.clients_names){

        my_promise = new Promise((resolve, reject) => {

            let time = Math.floor(Math.random() * (times.length));
            setTimeout(()=>{
                times[time] <= 5000 ? resolve(`Salió ${client} - Cola ${clients.n}`) : reject(`Tiempo de Espera Agotado para ${client}. - Cola ${clients.n}`);
            }, times[time]);
    
        });

        try{
            console.log(await my_promise);
        }catch(error){
            console.log(error);
        }

    }

}

simulate_bank_queue(clients);
simulate_bank_queue(clients2);
simulate_bank_queue(clients3);


