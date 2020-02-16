import Http from './http'

//更多
function getMusicMoreList(type = 1, size = 12, offset = 0) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`;
    return Http.get(url);
}

//歌手列表
function getSingerList(tinguid) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${tinguid}`;
    return Http.get(url);
}

//歌手详情
function getSingerMusic(tinguid,limits = 12) {
    const url = `api/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=${tinguid}&limits=${limits}`;
    return Http.get(url)
}

//搜索
function Search(query=""){
    const url = `/api/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${query}`;
    return Http.get(url)
}

//播放
function getMusicPlay(songid) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.song.play&songid=${songid}`;
    return Http.get(url)
}

//得到歌词
function GetLrc(songid){
    const url = `/api/v1/restserver/ting?method=baidu.ting.song.lry&songid=${songid}`;
    return Http.get(url)
}

//榜单
function MusicMoreList(type,size){
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&format=json&type=${type}&size=${size}&offset=0`
    return Http.get(url)
}
export {
    getMusicMoreList,
    getSingerList,
    getSingerMusic,
    Search,
    getMusicPlay,
    GetLrc,
    MusicMoreList
}
