import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  searchTerm: string;
  onDeleteSearch: () => void;
  onSearchChange: (searchTerm: string) => void;
  onSearchClick: () => void;
};

const SearchBar = ({
  searchTerm,
  onDeleteSearch,
  onSearchChange,
  onSearchClick,
}: Props) => {
  return (
    <HStack>
      <Input
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        bgColor="white"
        placeholder="Search for tasks"
      />

      <Button onClick={onDeleteSearch}>Clear</Button>
    </HStack>
  );
};

export default SearchBar;
