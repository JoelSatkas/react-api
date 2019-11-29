
// @ts-ignore
type IPictureRecord = {
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

type IPictures = {
    pictures: Array<IPictureRecord>
}
