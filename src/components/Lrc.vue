<template>
    <div class="lrcContent">
        {{lrcContent}}
    </div>
</template>

<script>
    import {GetLrc} from '../api/Music-api'
    export default {
        created() {
            GetLrc(this.songId).then(res => {
                this.lrcContent = res.lrcContent;
                console.log(this.lrcContent);
            })
        },
        data(){
            return{
                lrcContent:''
            }
        },
        props: {
            songId: [Number, String]
        },
    }
</script>

<style lang="less" scoped>
.lrcContent {
    width: 100%;
    height: 200px;
    overflow: scroll;
    text-align: center;
    position: relative;
}
</style>