interface Props {
    genres: string[]
}

export default function ListOfGenres({ genres }: Props) {
    return genres.map((genre) => (
        <option value={genre} key={crypto.randomUUID()}>{genre}</option>))
}