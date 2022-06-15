import './styles.scss'

interface Props {
    film: FilmData[];
}

interface FilmData {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export const CardFilm = ({film}: Props) => {
    return (
        <div className='ContainerFilms' >
        {film?.map((data: any) =>{
            return (
              <div className='Main-Container-Film' key={data['imdbID']}>
                <div>
                  <img src={data['Poster']} alt={'Poster do filme ' + data['Title'] } />
                </div>

                <div className='ContainerTitle'>
                  <h3>{data['Title']} - ({data['Year']})</h3>
                </div>

                <button>Favoritos</button>
              </div>
            );
          })}
      </div>
    );
}