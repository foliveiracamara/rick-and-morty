import style from './style.module.scss';

export type ApiDataProps = {
  image?: string;
  id?: number;
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
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <img className={style.image} src={image} />
        </div>
        <div className={style.text}>
          <h1 className={style.name}>{name}</h1>
          <h1 className={style.status}>{status}</h1>
          <h1 className={style.species}>{species}</h1>
          <h1 className={style.type}>{type}</h1>
          <h1 className={style.gender}>{gender}</h1>
          <h1 className={style.origin}>{origin}</h1>
        </div>
      </div>
    </>
  );
};

export default CardTopImage;
