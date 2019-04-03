new Vue({
    el:"#app",
    data:{
        // 初始化用户列表为空数组
        userList:[],
        //初始化用户对象为空
        user:{}
    },
    //创建Vue时自动触发方法
    created:function () {
        this.getUserList();
    },
    methods:{
        //异步请求获取所有用户方法
        getUserList:function () {
            //建立中转变量绑定this用于获取axios的数据
            var _this = this;
            axios.get("/vuejsdemo/user/findAll.do").then(
                function (response) {
                    _this.userList = response.data;
                }
            )
        },
        //根据用户id异步请求查找对应用户
        findById:function (id) {
            var _this = this;
            axios.get("/vuejsdemo/user/findById.do?id="+id).then(
                function (response) {
                    $("#myModal").modal("show");//让模态框弹出来
                    _this.user=response.data;
                }
            )

        },
        //更新用户信息方法, 异步请求
        update:function () {
            var _this= this;
            axios.post("/vuejsdemo/user/update.do?",_this.user).then(
                function (response) {
                    alert("更新成功");
                    _this.getUserList();
                }
            )
        }
    }
});
