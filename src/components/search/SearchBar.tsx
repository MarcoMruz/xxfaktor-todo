import Button from '../common/Button';

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
    <div>
      <Button onClick={onDeleteSearch}>Delete</Button>

      <input
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <Button onClick={onSearchClick}>Show</Button>
    </div>
  );
};

export default SearchBar;
