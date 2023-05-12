
export function MovieCard({ movie }) {

    return (

        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    style={{width:"400px"}}
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://kinsta.com/wp-content/uploads/2018/08/funny-404-page.jpg"}
                    alt={movie.Title}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>


        </div>
    )
}