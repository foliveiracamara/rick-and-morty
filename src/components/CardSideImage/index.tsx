import { useTheme } from '../../context/themeContext';

import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import RickAnnoyed from '../../images/rick-annoyed.svg';
import MortyTalking from '../../images/morty-talking.svg';

import style from './style.module.scss';

type CardProps = {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
};

export default function CardSideImage({ title, p1, p2, p3, p4 }: CardProps) {
  const { textColor } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.leftSide}>
          <div className={style.title} data-aos="fade-right">
            <h1>{title}</h1>
          </div>
          <div
            className={style.text}
            data-aos="fade-right"
            style={{ color: `${textColor}` }}
          >
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
          </div>
        </div>
        <div className={style.rightSide}>
          <img className={style.rick} data-aos="fade-left" src={RickAnnoyed} />
          <img className={style.morty} data-aos="fade-left" src={MortyTalking}
          />
        </div>
      </div>
    </div>
  );
}
