import { TextField } from "@mui/material";
import { memo } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

function Search({ onSearch }: SearchProps) {
  console.log("Search component rendered");

  return <TextField type="text" variant="outlined" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />;
}

// Memoizing the Search component to prevent unnecessary re-renders.
// this only looks at the props passed to it, not the state of the parent component.
export default memo(Search);