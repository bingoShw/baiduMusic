<template>
        <div
                class="lrcContent"
                ref="lrcDoc"
        >
            <div @click="getChange(item.time)"
                 :class="{active:activeIndex == index && isTimes}"
                 v-for="(item,index) in lrcList"
                 :key="index"
            >
                {{item.lrc}}
            </div>
        </div>
</template>

<script>
    import {GetLrc} from '../api/Music-api'
    import {mapState} from "vuex"
    import {PROGRESS} from '../store/mutation_type'
    export default {
        created() {
            GetLrc(this.songId).then(res => {
                this.lrcContent = res.lrcContent;
                //拿到歌词数据
                console.log(this.lrcContent);
                console.log(typeof(this.lrcContent));//String
                // 把一个字符串分割成字符串数组:
                const lineList = this.lrcContent.split('\n');
                console.log(lineList);
                console.log(typeof(lineList))//object
                var lrcList = [];
                //正则式验证[00:00.00]时间
                const reg = /\[\d*:\d*\.\d*\]/g;
                if(!this.lrcContent.match(reg)){
                    //验证出没有时间的歌词
                    console.log('改歌词没有时间');
                    this.isTimes = false;
                    //原数组被map“映射”成对应新数组
                    lrcList = lineList.map(item=>{
                        return {
                            time:-1,
                            lrc:item
                        }
                    });
                    this.lrcList = lrcList;
                    console.log(this.lrcList);
                    return
                }else {
                    for (var line of lineList) {
                        const lineMatchList = line.match(reg);
                        //如果是空格就继续正则匹配下一个
                        if (!lineMatchList) {
                            continue;
                        }else {
                            for (let time of lineMatchList) {
                                const minReg = /\[\d*/;
                                const min = Number(String(time.match(minReg)).slice(1));
                                const secReg = /:\d*/;
                                const sec = Number(String(time.match(secReg)).slice(1));
                                const finallyTime = min * 60 + sec;
                                const lrc = line.replace(reg, "");
                                lrcList.push({
                                    time: finallyTime,
                                    lrc: lrc
                                });
                            }
                        }
                    }
                }
                console.log(lrcList);
                for (let i = 0; i < lrcList.length; i++) {
                    for (let j = 0; j < lrcList.length - 1 - i; j++) {
                        if (lrcList[j].time > lrcList[j + 1].time) {
                            let t = lrcList[j];
                            lrcList[j] = lrcList[j + 1];
                            lrcList[j + 1] = t;
                        }
                    }
                }
                this.lrcList = lrcList;
            })
        },
        computed: {
            ...mapState(
                {
                    currentTime: "currentTime"
                }
            )
        },
        mounted() {
            this.$refs.lrcDoc.addEventListener("touchmove", () => {
                clearTimeout(this.timeOut);
                this.isScroll = false;
            });
            this.$refs.lrcDoc.addEventListener("touchend",()=>{
                this.timeOut = setTimeout(() => {
                    this.isScroll=true
                }, 1500);
            })
        },
        watch: {
            currentTime() {
                for (let i = 1; i < this.lrcList.length; i++) {
                    if (this.currentTime < this.lrcList[i].time) {
                        this.activeIndex = i - 1;
                        if (this.isScroll) {
                            this.$refs.lrcDoc.scrollTop = this.$refs.lrcDoc.children[this.activeIndex].offsetTop - 70;
                        }
                        break;
                    }
                }
            }
        },
        data(){
            return{
                lrcContent:'',
                lrcList: [],
                activeIndex: 0,
                isScroll: true,
                timeOut:null,
                isTimes:true
            }
        },
        props: {
            songId: [Number, String]
        },
        methods: {
            getChange(time){
                this.$store.commit(PROGRESS,{changeTime:time})

            }
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
    .active {
        color: red;
    }
</style>