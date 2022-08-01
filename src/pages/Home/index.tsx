import { useTheme } from '../../context/themeContext';

import CardSideImage from '../../components/CardSideImage';
import CardTopImageList from '../../components/CardTopImageList';
import Toogle from '../../components/Toogle';

import Portal from '../../images/portal.svg';
import Name from '../../images/logo-green-blue.svg';

import style from './style.module.scss';

export default function Home() {
  const { choosenTheme } = useTheme();

  return (
    <>
      <div style={{ background: `${choosenTheme}` }}>
        <div className={style.container}>
          <div className={style.header}>
            <Toogle />
          </div>
          <div className={style.logo}>
            <img className={style.name} src={Name} />
            <img className={style.portal} src={Portal} />
          </div>
        </div>
        <section className={style.about}>
          <CardSideImage
            title={'0 que é rick and morty?'}
            p1="Criada por Justin Roiland e Dan Harmon, Rick & Morty é uma série
              animada de comédia que mostra as aventuras interdimensionais de
              Rick, a mente mais brilhante da galáxia, e seu neto Morty."
            p2="Com sua arma capaz de criar portais para viajar no tempo-espaço,
              Rick leva Morty para explorar todos as absurdas formas de vida que
              o universo é capaz de sustentar."
            p3="Apesar de genial, Rick sofre de alcoolismo e possui uma relação
              conflituosa com sua família, fruto da sua visão cínica da vida e
              seu egoísmo. Por outro lado, Morty está longe de ter o intelecto
              do seu avô, mas é o único capaz de fazê-lo ser um pouquinho mais
              gentil."
            p4="Entre momentos hilários e reflexões interessantes sobre a vida,
              Rick & Morty arranca gargalhadas e ainda rende ótimas discussões
              filosóficas."
          />
        </section>
        <section>
          <CardTopImageList />
        </section>
      </div>
    </>
  );
}
