let app = new Vue({
    el: "#player",
    data: {
        inputValue: "",
        results:[],
        url: ""
    },
    methods: {
        search(){
            if (this.inputValue.trim()) {
                axios({
                    url:"https://autumnfish.cn/search",
                    methods: "get",
                    params:{
                        keywords: this.inputValue
                    }
                }).then(res=>{
                    this.results = res.data.result.songs;
                    console.log(res.data.result.songs)
                })
            }else{
                alert("歌曲名不得为空")
            }
        },
        play(id){
            axios({
                url:"https://autumnfish.cn/song/url",
                methods: "get",
                params:{
                    id
                }
            }).then(res=>{
                this.url = res.data.data[0].url
            })
        }
        
    }
})