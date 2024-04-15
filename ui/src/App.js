import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [bestPetShop, setBestPetShop] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputData: inputValue }),
      });
      const responseData = await response.json();
      setBestPetShop(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  

  const [petShop, price] = bestPetShop;

  return (
    <div style={{ justifyContent: "center" }}>
      <div className='App-header'><h1>dti challenge</h1></div>
      <div className="App">
        <div id='form' >
          <p>Digite a data, o número de cachorros pequenos e o número de cachorros grandes: </p>
          <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} required={true} placeholder='dd/mm/yyyy n n' />
            <button type="submit" id='btn'>Enter</button>
          </form>
          {(bestPetShop) && <div><h4>{`A melhor opção é o ${petShop} com o preço total de R$${price},00!`}</h4></div>}
        </div>
      </div>
    </div>
  );
}

export default App;

