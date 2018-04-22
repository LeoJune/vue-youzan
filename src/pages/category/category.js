import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot.vue'

new Vue({
    el: '#app',
    data: {
        topLists: null,
        topIndex: 0,
        subData: null,
        rankData: null
    },
    created(){
        this.getTopLists()
        this.getSubLists(0)
    },
    methods: {
        getTopLists(){
            axios.get(url.topLists).then(res => {
                this.topLists = res.data.lists
            }).catch(res => {

            })
        },
        getSubLists(index, id){ 
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                axios.post(url.subLists,{
                    id: id
                }).then(res => {
                    this.subData = res.data.data
                })
            }
        },
        getRank(){
            axios.post(url.rank).then(res => {
                this.rankData = res.data.data
            })
        }
    },
    components: {
        Foot
    },
    filters: {
        number(price){
            return price + '.00'
        }
    }
})