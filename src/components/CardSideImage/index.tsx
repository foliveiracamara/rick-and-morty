import style from './style.module.scss';

import RickMortyPortal from '../../images/rick-and-morty-portal.svg';
import { useTheme } from '../../context/themeContext';

type CardProps = {
  title: string;
};

export default function CardSideImage(props: CardProps) {
  const { textColor } = useTheme()
  
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.leftSide} >
          <div className={style.title}>
            <h1>0 que é Rick and Morty?</h1>
          </div>
          <div className={style.text} style={{color: `${textColor}`}}>
            <p>
              Criada por Justin Roiland e Dan Harmon, Rick & Morty é uma série
              animada de comédia que mostra as aventuras interdimensionais de
              Rick, a mente mais brilhante da galáxia, e seu neto Morty.
            </p>
            <p>
              Com sua arma capaz de criar portais para viajar no tempo-espaço,
              Rick leva Morty para explorar todos as absurdas formas de vida que
              o universo é capaz de sustentar.
            </p>
            <p>
              Apesar de genial, Rick tem sofre de alcoolismo e possui uma
              relação conflituosa com sua família, fruto da sua visão cínica da
              vida e seu egoísmo. Por outro lado, Morty está longe de ter o
              intelecto do seu avô, mas é o único capaz de fazê-lo ser um
              pouquinho mais gentil.
            </p>
            <p>
              Entre momentos hilários e reflexões interessantes sobre a vida,
              Rick & Morty arranca gargalhadas e ainda rende ótimas discussões
              filosóficas.
            </p>
          </div>
        </div>
        <div className={style.rightSide}>
          <img className={style.img} src={RickMortyPortal} />
        </div>
      </div>
    </div>
  );
}
