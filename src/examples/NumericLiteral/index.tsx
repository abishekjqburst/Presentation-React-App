const NumericLiteral = () => {
  // Define a type using numeric literals
  type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

  // Function that simulates rolling a dice and returns a DiceRoll type
  function rollDice(): DiceRoll {
    return Math.floor(Math.random() * 6) as DiceRoll;
  }

  // Calling the function to roll the dice
  const result: DiceRoll = rollDice();
  return <p>You rolled: ${result}</p>;
};

export default NumericLiteral;
