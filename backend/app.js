
export default function getBestPetShop(inputData) {

     const [dateString, smallDogsCount, bigDogsCount] = inputData.split(' ');

     const dayOfWeek = (date) => {
          const [dd, mm, yyyy] = date.split('/');
          date = new Date(yyyy, mm - 1, dd);
          return date.getDay();
     }

     const dayOfWeekNumber = dayOfWeek(dateString);
     const isWeekEnd = (dayOfWeekNumber == 0 || dayOfWeekNumber == 6); //sabado = 6, domingo = 0
     const meuCaninoFeliz = (isWeekEnd) ? (smallDogsCount * 20 * 1.2) + (bigDogsCount * 40 * 1.2) : (smallDogsCount * 20) + (bigDogsCount * 40);
     const vaiRex = (isWeekEnd) ? (smallDogsCount * 20) + (bigDogsCount * 55) : (smallDogsCount * 15) + (bigDogsCount * 50);
     const chowChawgas = (smallDogsCount * 30) + (bigDogsCount * 45);

     const petshops = {
          'Meu Canino Feliz': { price: meuCaninoFeliz, distance: 2000 },
          'Vai Rex': { price: vaiRex, distance: 1700 },
          'ChowChawgas': { price: chowChawgas, distance: 800 }
     };

     let bestPrice = Number.MAX_VALUE;
     let bestPetshop = '';

     for (const [petshop, info] of Object.entries(petshops)) {
          if (info.price < bestPrice || (info.price === bestPrice && info.distance < petshops[bestPetshop].distance)) {
               bestPrice = info.price;
               bestPetshop = petshop;
          }
     }

     return [bestPetshop, bestPrice];

}

//console.log(getBestPetShop("05/08/2018 3 5")); -> [ 'Meu Canino Feliz', 312 ]