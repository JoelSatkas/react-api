
// @ts-ignore
interface IPictureRecord {
    iiifbaseuri: string,
    width: number,
    caption: string,
    fileid: number,
    copyright: string,
    date: string,
    imageid: number,
    renditionnumber: string,
    id: number,
    lastupdate: string,
    accesslevel: number,
    height: number,
    baseimageurl: string,
    idsid: number
}

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
