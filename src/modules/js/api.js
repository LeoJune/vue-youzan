let url ={
    hotLists: '/index/hotLists',
    banner: '/index/banner',
    topLists: '/category/topLists',
    subLists: '/category/subLists2',
    rank: '/category/rank'
}

//  let host = ''     //真实环境下的请求地址
let host = 'http://rapapi.org/mockjsdata/33336'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url