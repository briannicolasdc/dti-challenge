import getBestPetShop from './app.js';

describe('getBestPetShop function', () => {
    it('retorna o melhor petshop e o preço para o número de cachorros em uma determinada data', () => {
        const inputData = '03/08/2018 3 5';
        const expectedOutput = ['Meu Canino Feliz', 260];
        expect(getBestPetShop(inputData)).toEqual(expectedOutput);
    });
});