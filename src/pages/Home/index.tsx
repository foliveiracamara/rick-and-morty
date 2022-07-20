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
          <CardSideImage title={'0 que é rick and morty?'} />
        </section>
        <section>
          <CardTopImageList />
        </section>
      </div>
    </>
  );
}
