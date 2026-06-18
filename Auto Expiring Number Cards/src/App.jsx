import { useEffect, useState } from "react";

function NumberCard({ id, number, removeCard }) {
  const [timer, setTimer] = useState(number);

  useEffect(function () {
    const intervalId = setInterval(function () {
      setTimer(function (oldTimer) {
        return oldTimer - 1;
      });
    }, 1000);

    return function () {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(
    function () {
      if (timer === 0) {
        removeCard(id);
      }
    },
    [timer, id, removeCard]
  );

  return (
    <div className="card">
      <h2>Number: {number}</h2>
      <p>Timer: {timer}</p>
    </div>
  );
}

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [cards, setCards] = useState([]);

  function addCard() {
    const number = Number(inputNumber);

    if (number <= 0) {
      alert("Please enter a number greater than 0");
      return;
    }

    const newCard = {
      id: Date.now(),
      number: number,
    };

    setCards([...cards, newCard]);
    setInputNumber("");
  }

  function removeCard(id) {
    setCards(function (oldCards) {
      return oldCards.filter(function (card) {
        return card.id !== id;
      });
    });
  }

  return (
    <div className="app">
      <h1>Auto Expiring Number Cards</h1>

      <div className="form">
        <input
          type="number"
          placeholder="Enter a number"
          value={inputNumber}
          onChange={function (event) {
            setInputNumber(event.target.value);
          }}
        />

        <button onClick={addCard}>Add</button>
      </div>

      <div className="cards">
        {cards.map(function (card) {
          return (
            <NumberCard
              key={card.id}
              id={card.id}
              number={card.number}
              removeCard={removeCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
