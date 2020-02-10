<template>
    <div>
        <ul>
            <li class="song" v-for="item in musicList" :key="item.song_id">
                <div class="songCover">
                    <img v-lazy="item.pic_small" alt="歌曲封面" />
                </div>
                <div class="songDesc">
                    <div class="songDescTitle">{{item.title}}</div>
                    <div class="songDescAuthor">{{item.author}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Http from "../api/http";
    export default {
        created() {
            Http.get(
                    `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.type}&size=5`
                )
                .then(res => {
                    this.musicList = res.song_list;
                });
        },
        data() {
            return {
                musicList: []
            };
        },
        props: {
            type: {
                type: Number,
                default: 2
            }
        }
    };
</script>

<style lang="less" scoped>
    .song {
        display: flex;
        padding: 10px;
        .songCover {
            width: 60px;
            height: 60px;
            img {
                height: 100%;
                width: 100%;
                display: block;
            }
        }
        .songDesc {
            flex: 1;
            padding: 0 10px;
            .songDescTitle {
                font-size: 18px;
            }
            .songDescAuthor {
                color: #999999;
                font-size: 13px;

            }
        }
    }
</style>