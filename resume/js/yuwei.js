import data from './yuwei_data.js'

new Vue({
    el: "#yuwei",
    data: {
        yuwei: data, // 网站文案数据
        projectDialog: false, // 项目演示窗口打开
        projectIndex: 0, // 当前展示项目索引
    },
    mounted() {
        this.startTyping1();
        // 动画加载
        this.animationLoad();
        //文本赋值
        if (this.yuwei.index.subTitle == "") {
            this.randomSubTitle();
        }
        //获取高度赋值
        this.setYuweiHeight()
    },

    methods: {
        setYuweiHeight() {
            let height = document.documentElement.clientHeight;
            let width = document.documentElement.clientWidth;
            document.querySelector(".yuwei1").style.height = height + 'px';
            document.querySelector(".yuwei4").style.height = height + 'px';
        },
        //随机座右铭
        randomSubTitle() {
            let index = Math.floor(Math.random() * this.yuwei.index.subTitleArr.length);
            this.yuwei.index.subTitle = this.yuwei.index.subTitleArr[index];
        },
        // 打字开启
        startTyping() {
            new Typed(".yuwei1Typet", {
                strings: this.yuwei.index.me,
                typeSpeed: 30,
                backDelay: 2000,
                backSpeed: 50,
                loop: true
            })
        },
        // 打字开启
        startTyping1() {
            new Typed(".yuwei1Typet1", {
                strings: this.yuwei.index.welcome,
                typeSpeed: 100,
                backDelay: 3500,
                backSpeed: 30,
                loop: true
            })
        },
        //返回到顶部
        scrollGoToP() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        // 平滑跳转
        scrollGoTo(text) {
            // alert(document.querySelector(`.${text}`).offsetTop);
            window.scrollTo({
                top: document.querySelector(`.${text}`).offsetTop,
                behavior: "smooth"
            });
        },
        // 动画加载
        animationLoad() {
            let animationDom = [
                [".ContentTitle", 0],
                [".job_expectations", 500],
                [".ContentSubTitle", 500],
                [".ContentSubTitle1", 0],
                [".ContentContact", 1000],
                [".yuwei1LoadMore", 1500],
                [".yuwei2ContentTitle", 0],
                [".yuwei2ContentMe", 500],
                [".yuwei2ContentText li", 500],
                [".yuwei2LoadMore", 1000],
                [".yuwei3ContentBox", 500],
                [".yuwei4Content li", 500],
            ];
            let a = ScrollReveal();
            animationDom.forEach(item => {
                a.reveal(item[0], {
                    duration: 1500,
                    delay: 100,
                    origin: "bottom",
                    mobile: true,
                    distance: "2rem",
                    opacity: 0.001,
                    easing: "cubic-bezier(.98,0,.04,1)"
                });
            });
        },
        // 项目展示
        showProject(i) {
            this.projectIndex = i;
            this.projectDialog = true;
            setTimeout(() => {
                let dom = document.querySelector(".el-dialog__body ul");
                if (!dom) {
                    return;
                }
                let Viewer = window.Viewer;
                new Viewer(dom);
            }, 0);
        },
    },
})