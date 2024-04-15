const NumericLiteral = () => {
  type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

  function rollDice(): DiceRoll {
    let diceroll = Math.floor(Math.random() * 6) + 1;
    return 1 <= diceroll && diceroll <= 6 ? (diceroll as DiceRoll) : 6;
  }

  const result: DiceRoll = rollDice();
  return <p>You rolled: {result}</p>;
};

export default NumericLiteral;
