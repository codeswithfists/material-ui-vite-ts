import { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';

const StateExamples_Counter = function({}) {
  const [count, setCount] = useState(0);

  // in React, state updates trigger a re-render of the component.

  useEffect(() => {
    console.log('Component mounted or count changed:', count)
  }, [count]);

  return (
    <Box flexGrow={1}>
      <Typography variant="h6">Count: {count}</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>Increment</Button>
        <Button variant="contained" onClick={() => setCount((count) => count - 1)}>Decrement</Button>
      </Stack>
    </Box>
  );
}

interface StateExamples_CoinsProps { amount: number }
const StateExamples_Coins = function(props: StateExamples_CoinsProps) {
    // coins are all "tails" to start
    const [coins, setCoins] = useState(Array(props.amount).fill("tails"));

    const handleClick = (index: number) => {
        // if a coin is clicked, then the new set of coins are all 'tails' except the one that was clicked
        const newCoins = coins.map((_, i) => (i === index ? "heads" : "tails"));
        setCoins(newCoins);
    };

    return (
        coins.map((value, index) => (
            <div onClick={() => handleClick(index)}>
                <Typography variant="h6">{value}</Typography>
            </div>
        ))
    );
}

export { StateExamples_Counter, StateExamples_Coins }
