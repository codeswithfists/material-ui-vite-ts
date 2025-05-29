import { useCallback, useState } from 'react'
import Search from './search';
import { Box, List, ListItem, Typography } from '@mui/material';

const fruitList = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'];

interface CallbackExamplesListProps {}

function CallbackExamples_List({}: CallbackExamplesListProps) {
  const [fruit, setFruit] = useState(fruitList);

  // By default, functions in react are different on every render. This is because functions are objects in JavaScript,
  // and objects are compared by reference. When React re-renders a component, it does not reuse function instances
  // unless they are memoized by using useCallback.
  const handleSearch = useCallback((text: string): void => {
    
    // without including 'fruit' in the dependency array, this will always log the initial value of fruitList.
    // This is because the function is created once and does not capture the latest state of 'fruit'.
    console.log('The current first fruit is:', fruit[0]);

    const filteredFruit = fruitList.filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFruit(filteredFruit);
  }, [fruit]);

  return (
    <Box flexGrow={1}>
      <Search onSearch={handleSearch} />
      <List>
        {fruit.map((item, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{item}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default CallbackExamples_List
