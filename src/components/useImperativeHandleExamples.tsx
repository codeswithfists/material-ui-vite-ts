import { Box, Button, Stack, Typography } from "@mui/material";
import { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react";

// this type defines whatever functions you want to expose
export type CounterRef = {
    reset: () => void;
}

interface CounterProps {}

const Counter = function(_: CounterProps, ref: Ref<CounterRef>) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    // we want to expose this function to the outside world
    const reset = () => {
        setCount(0);
    }

    useImperativeHandle(ref, () => ({
        reset
    }));

    return (
        <Box flexGrow={1}>
            <Typography variant="h6">Count: {count}</Typography>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={increment}>Increment</Button>
                <Button variant="contained" onClick={decrement}>Decrement</Button>
            </Stack>
        </Box>
    );
}

// using forwardRef allows the Counter component to accept a ref
export const CounterWithRef = forwardRef<CounterRef>(Counter);

/************************************************************************************************************/

export function ImperativeHandleExamples_Counter() {
    const counterRef = useRef<CounterRef>(null)

    return (
        <Stack spacing={2}>
            <CounterWithRef ref={counterRef} />
            <Button onClick={() => counterRef.current?.reset()}>Reset from Parent</Button>
        </Stack>
    )
}