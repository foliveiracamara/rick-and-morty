import { useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';

import style from './style.module.scss';

export type ApiDataProps = {
  image?: string;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: string;
};

const CardTopImage = ({
  image,
  name,
  status,
  species,
  type,
  gender,
  origin,
}: ApiDataProps) => {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <>
      <div className={style.container} data-aos="fade">
        <div className={style.top}>
          <img className={style.image} src={image} />
        </div>
        <div className={style.text}>
          <h1 className={style.name}>
            <span className={style.text__item}>Name: </span> {name}
          </h1>
          <h1 className={style.status}>
            <span className={style.text__item}>Status: </span> {status}
          </h1>
          <h1 className={style.species}>
            <span className={style.text__item}>Species: </span> {species}
          </h1>
          <h1 className={style.type}>
            <span className={style.text__item}>Type: </span>
            {type ? type : 'unknown'}
          </h1>
          <h1 className={style.gender}>
            <span className={style.text__item}>Gender: </span> {gender}
          </h1>
          <h1 className={style.origin}>
            <span className={style.text__item}>Origin: </span> {origin}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CardTopImage;
