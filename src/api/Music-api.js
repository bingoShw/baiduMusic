import Http from './http'

//更多
function getMusicMoreList(type = 1, size = 6, offset = 0) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`;
    return Http.get(url);
}

//歌手列表
function getSingerList(tinguid) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${tinguid}`;
    return Http.get(url);
}

//歌手详情
function getSingerMusic(tinguid,limits) {
    const url = `api/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=${tinguid}&limits=${limits}`;
    return Http.get(url)
}
export {
    getMusicMoreList,
    getSingerList,
    getSingerMusic
}
