import Header from '../../components/Header';
import Portal from '../../images/portal.svg';
import Name from '../../images/blue-logo.svg';
import CardSideImage from '../../components/CardSideImage';
import CardTopImageList from '../../components/CardTopImageList';

import style from './style.module.scss';

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <Header />
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
    </>
  );
}
