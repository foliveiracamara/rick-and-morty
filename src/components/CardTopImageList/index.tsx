import { useState, useEffect } from 'react';

import CardTopImage, { ApiDataProps } from './CardTopImage';
import SelectBox from '../SelectBox';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import style from './style.module.scss';

const CardTopImageList = () => {
  const [apiResults, setApiResults] = useState<ApiDataProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [character, setCharacter] = useState<string>('all');

  const handleCharacterChoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCharacter(e.target.value);
  };

  const getCharacterData = async () => {
    if (character === 'all') {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      const json = await data.json();
      setTotalPages(json.info.pages);
      setApiResults(json.results);
    } else {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${character}`
      );
      const json = await data.json();
      setTotalPages(json.info.pages);
      setApiResults(json.results);
    }
  };

  const toggleNextPage = () => {
    if (currentPage === totalPages) {
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const togglePrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, [character, currentPage, apiResults]);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>C0nheça os pers0nagens de rick and morty</h1>
      </div>
      <div className={style.filters}>
        <SelectBox
          setCharacter={setCharacter}
          handleCharacterChoice={handleCharacterChoice}
        />
      </div>
      <div className={style.content}>
        {apiResults?.map(
          ({ image, id, name, species, status, type, gender }) => {
            return (
              <CardTopImage
                image={image}
                id={id}
                name={name}
                species={species}
                status={status}
                type={type}
                gender={gender}
              />
            );
          }
        )}
      </div>
      <div className={style.pagination}>
        <ArrowBackIosIcon
          onClick={togglePrevPage}
          className={style.arrowBack}
        />
        <span className={style.currPage}>
          {currentPage} ... {totalPages}
        </span>
        <ArrowForwardIosIcon
          onClick={toggleNextPage}
          className={style.arrowNext}
        />
      </div>
    </div>
  );
};

export default CardTopImageList;
