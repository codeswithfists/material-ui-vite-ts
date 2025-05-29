import { useEffect, useRef, useState } from 'react'
import { Box, Button, Input, Stack, Typography } from '@mui/material';

interface RefExamplesCounterProps {}

export function RefExamples_Counter({}: RefExamplesCounterProps) {
  const [count, setCount] = useState(0);

  // unlike state, refs do not trigger a re-render of the component when they change.
  // ref values are not used in the return value of the component.
  // it is a hook that is used for values that are not needed for rendering.
  const countRef = useRef(0);

  const handleIncrement = () => {

    // state updates trigger a re-render of the component. so when the count state is updated,
    // the component will be marked to re-render and the new value of count will only be available in the new render.
    // meanwhile, this function will continue to run to completion, and the value of countRef will be updated immediately.
    setCount(count + 1);

    // refs are mutable objects, so we can directly modify the current property. they do trigger a re-render.
    countRef.current += 1;

    console.log('state:', count);
    console.log('ref:', countRef.current);
  }

  return (
    <Box flexGrow={1}>
      <Stack direction={'row'} spacing={2}>
        <Typography variant="h6">Count: {count}</Typography>
        <Typography variant="h6">CountRef: {countRef.current}</Typography>
      </Stack>
      <Button variant="contained" onClick={handleIncrement}>Increment</Button>
    </Box>
  )
}

export function RefExamples_Input() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // This effect runs after the component mounts, and it will focus the input element.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // This function can be called to focus the input element when the button is clicked.
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <Stack direction={'row'} spacing={2}>
      <Input inputRef={inputRef} placeholder="Focus me with the button" />
      <Button variant="contained" onClick={handleFocus}>Focus Input</Button>
    </Stack>
  );
}
