import Uloha from '../../models/Uloha';
import Button from '../common/Button';

type Props = {
  uloha: Uloha;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCheck: (id: string, status: boolean) => void;
};

const SearchBar = ({ uloha, onEdit, onCheck, onDelete }: Props) => {
  return (
    <div>
      <h1>{uloha.nazov}</h1>
      <p>{uloha.obsah}</p>
    </div>
  );
};

export default SearchBar;
