import CardSideImage from '../../components/CardSideImage';
import CardTopImageList from '../../components/CardTopImageList';
import Header from '../../components/Header';

import Portal from '../../images/portal.svg';
import Name from '../../images/logo-green-blue.svg';

import style from './style.module.scss';

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <Header />
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
    </>
  );
}
