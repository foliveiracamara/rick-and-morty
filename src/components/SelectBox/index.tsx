import style from './style.module.scss';

interface selectBoxProps {
  setCharacter: (e: any) => void;
  handleCharacterChoice: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = ({ handleCharacterChoice }: selectBoxProps) => {
  return (
    <select className={style.select} onChange={handleCharacterChoice}>
      <option value="all" selected>
        Todos os personagens
      </option>
      <option value="rick">Rick e variantes</option>
      <option value="morty">Morty e variantes</option>
      <option value="beth">Beth e variantes</option>
      <option value="summer">Summer e variantes</option>
      <option value="jerry">Jerry e variantes</option>
    </select>
  );
};

export default SelectBox;
