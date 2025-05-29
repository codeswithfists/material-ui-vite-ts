import { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';

interface StateExamplesCounterProps {}

function StateExamples_Counter({}: StateExamplesCounterProps) {
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

export default StateExamples_Counter
