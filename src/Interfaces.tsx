
// @ts-ignore

interface IGraphQLArtist {
    name: string,
    nationality?: string,
    artworks: IGraphQLArtwork[]
}

interface IGraphQLArtwork {
    id: string,
    date: string,
    imageUrl: string,
    title?: string,
    description?: string
}
