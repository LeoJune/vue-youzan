import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

// import MinUI from 'mint-ui'    mint-ui 全部引用才这样写，下面的写法是部分引用
// import 'mint-ui/lib/style.css'
// import App from './App.vue'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue'
import Swiper from 'components/Swiper.vue'

let app = new Vue({
    el: '#app',
    data: {
       goodLists: null,
       pageNum: 1,
       pageSize: 6,
       loading: false,
       allLoad: false,
       bannerLists: null
    },
    created(){
       this.getLists()
       this.getBanner()
    },
    methods: {
        getLists(){
            if(this.allLoad) return
            this.loading = true
            axios.post(url.hotLists,{
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }).then(res => {
                let curLists = res.data.lists
                if(curLists.length < this.pageSize){ //判断是否数据库中所有数据加载完毕  
                    this.allLoad = true
                }
                if(this.goodLists){
                    this.goodLists = this.goodLists.concat(curLists)
                }else{//第一次请求数据
                    this.goodLists = curLists
                }
                this.loading = false
                this.pageNum++
            })
        },
        getBanner(){
            axios.get(url.banner).then(res => {
                this.bannerLists = res.data.lists
            })
        }
    },
    components: {
        Foot,
        Swiper
    }
})