import { TrendingTodayItem } from "./TrendingTodayItem"
export const TrendingToday = ({trendingMovies}) => {
    return <ul>
        {
            trendingMovies.map(movie=><TrendingTodayItem key={movie.id} title={movie.title}/>)
        }
    </ul>
}