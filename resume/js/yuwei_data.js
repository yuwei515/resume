export default {
    dialogWidth: "",
    indexHeight: "800px",
    index: {
        index: 0,
        // 描述语言
        welcome: ["您 好!", "欢 迎！", "Hello！", "Welcome！"],
        // text: "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是 <b>昱谓</b>，很高兴来您来到我的在线简历！我的期望岗位是<b>Java开发工程师</b>，期望薪资是<b>4k-7k</b>。</p>",
        text: "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很高兴您来到我的在线简历，我是 <b>昱谓</b>，今年22岁，来自广西，我的目标是应聘贵公司 <b>Java工程师</b> 岗位，目前 <b>全国可飞</b> 。",
        myself: "",
        // 岗位
        job: "Web前端工程师",
        //薪资
        salary: "4k-8k",
        // 公司
        title: "您好，我是",
        me: [
            "昱谓",
            "Yu Wei",
            // "前端狂热粉"
        ],
        bg: "./images/bg.jpg",
        subTitleArr: ["不积跬步，无以至千里；不积小流，无以成江海！", "千里之行，始于足下。", "事缓则圆。"],
        subTitle: "",
        contact: [{
            name: "Blog",
            icon: "fa-wordpress",
            link: "https://blog.n0ts.top/"
        },
        {
            name: "Email",
            icon: "fa-envelope",
            link: "mailto:mail@n0ts.top"
        },
        {
            name: "Gitee",
            icon: "fa-github",
            link: "https://gitee.com/n0ts"
        },
        {
            name: "QQ",
            icon: "fa-qq",
            link: "https://wpa.qq.com/msgrd?v=3&uin=1656071287&site=qq&menu=yes"
        }
        ],
        loadMore: {
            text: "了解更多",
            class: "yuwei2"
        }
    },
    about: {
        title: "教育背景",
        laozi: {
            img: "./images/me.jpg",
            // content: "<span></span>就读于南宁某某学院，今年22岁，所学专业是<b>物联网平台开发与应用方向</b>；<br /><span></span>我个人对于编程我有着<b>浓厚的兴趣</b>，平时经常关注编程相关的事情，也也积极参加一些开源社区，毕竟兴趣才是我最好的老师。<br /><span></span>曾在<b>WEB省赛荣获一等奖</b>，获得过<b>国家励志奖学金</b>，在学校中也获得过<b>优秀青年志愿者</b>，<b>学习之星称号</b>，<b>优秀班委</b>等荣誉。"
            content: "<span></span>就读于南宁某某学院，所学专业是<b>物联网平台开发与应用方向</b>；<br/><div><div/><span></span>参加过24年广西职业技能竞赛并获得 <b>区赛一等奖</b>，在学校中专业成绩常居 <b>TOP5</b>，在学校中参加 <b>学校项目开发</b>并且担任 <b>小组长</b>等；<br/><div><div/><span></span>个人对于编程有 <b>浓厚的兴趣</b>，课余时间会常常浏览和参加编程开源社区，毕竟兴趣才是我最好的老师。"
        },
        ability: [
            {
                icon: "fa-code",
                title: "后端/框架",
                subTitle: "Java、Spring Boot、MyBatis...",
                color: "#ffa502",
                bfb: "80%"
            },
            {
                icon: "fa-html5",
                title: "前端/框架/库",
                subTitle: "HTML，CSS，Js，Vue.js，Element-plus...",
                color: "#ff4757",
                bfb: "80%"
            },
            {
                icon: "fa-database",
                title: "数据库",
                subTitle: "MySql、SqlServer、Redis",
                color: "#1e90ff",
                bfb: "50%"
            },
            {
                icon: "fa-photo",
                title: "其他",
                subTitle: "Axure、Git、phpstudy、Echarts...",
                color: "#2ed573",
                bfb: "80%"
            }
        ],
        loadMore: {
            text: "继续浏览",
            class: "yuwei3"
        }
    },
    project: {
        title: "我的项目",
        list: [
            {
                name: "学校医务室系统",
                text: "一个简单医务系统，包括药品入库、出库、库存和接诊等",
                nb: [
                    "Spring Boot", "MyBatis", "Vue3", "Mysql", "Redis",
                ],
                url: "https://gitee.com/n0ts/tucao",
                img: "./images/tucao1.png",
                content: `<h2>项目类型</h2>
                <p>学校医务室系统</p>
                <h2>开发周期</h2>
                <p>2024年9月12日 – 至今，4人/~天</p>
                <h2>开发工具</h2>
                <p>IntelliJ IDEA、Visual Studio Code、Navicat Premium、Git等</p>
               <h2>项目背景</h2>
                <p>学校医务系统更换升级，为了提高学校医疗服务的效率和质量为学生和教职工提供快速、便捷的医疗服务、同时确保健康记录的准确性和隐私性而开发</p>
                <h2>模块介绍</h2>
                <p>1、 登录/注册模块；</p>
                <p>2、 系统管理模块：角色管理、用户管理等；</p>
                <p>3、 库存模块：药品建档、药品入库、药品出库；</p>
                <p>4、 门诊模块：接诊、接诊记录、处方模板、主诉模本；</p>
                <p>5、 药房模块：发药；</p>
                <h2>项目技术</h2>
                <p>1、 后端/框架：JAva、Spring Boot、MyBatis;</p>
                <p>2、 前端/框架/库：HTML、Css、JavaScript、Vue.js、Echarts、ajax等;</p>
                <p>3、 其他：Redis、Element-plus、Git等；</p>

                <p>4、 前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <h2>项目预览</h2>
                <p><a href="https://baidu.com" class="yuwei3ContentBtn" target="_blank">点我查看</a></p>
                <ul>
                    <li><img src="./images/yws1.png"></li>
                    <li><img src="./images/yws2.png"></li>
                    <li><img src="./images/yws1.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、门诊模块、药房模块的数据库设计，模块设计；</p>
                <p>2、全栈开发；</p>

                <p>3、修复测试人员发现的BUG；</p>
                <h2>其他链接</h2>
                <p>1、<a href="https://baidu.com" target="_blank">项目源码（gitee）</a></p>
                <p>2、<a href="https://docs.qq.com/doc/DU2FSaFJ0V1VVcWJu" target="_blank">需求分析</a></p>
                <p>3、<a href="https://baidu.com" target="_blank">原型图</a></p>
                 `
            },
            {
                name: "双碳管理系统-招投标子系统",
                text: "一个招投标系统包括后台和用户前台Spring一个招投标系统包括后台和用户前台Spring一个招投标系统包括后台和用户前台Spring一个招投标系统包括后台和用户前台Spring一个招投标系统包括后台和用户前台Spring BootSpring SecuritySpring BootMyBatisVue2MysqlRedi",
                nb: [
                    "Spring Security", "Spring Boot", "MyBatis", "Vue2", "Mysql", "Redis",
                ],
                url: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/bg.jpg",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2023年11月15日 – 2024年03月1日，3人/97天</p>
                <h2>开发工具</h2>
                <p>IntelliJ IDEA、Visual Studio Code、Navicat Premium、phpstudy等</p>
                <h2>项目背景</h2>
                <p>该项目是比赛项目。练手的同时学习项目知识</p>
                <h2>模块介绍</h2>
                <p>1、	招投标模块：涉及招标活动的全过程，包括招标文件的制作、审核和发布、辅助评标过程，包 括自动打分、评委评定和评标结果的汇总；</p>
                <p>2、	违规投诉模块：招标人负责受理与答复异议，对于招标文件、开标和评标结果的异议，投标人或其他利害关系人可以在规定时间内向招标人提出书面异议。如果异议没有得到满意答复，或者招标人未在规定时间内答复，投诉人可以向有关行政监督部门提出投诉;</p>
                <p>3、	投标企业信息模块： 包括用户账号的创建、权限分配和管理；</p>
                <p>4、	平台动态模块：发布关于平台动态的消息、维护系统的基础数据、用户帮助、通知公告等；</p>
                <p>5、	政策法规模块：在此平台发布 国家相关的政策法规消息；</p>
                <p>6、	企业投标模块：维护和管理已投标企业的消息和相关事务；</p>
                <p>7、	会员模块：用户可以进行会员服务的购买；</p>
                <p>8、	轮播图模块：维护和管理用户界面的轮播图；</p>
                <p>0、	客服模块：用户前台可以和客服进行交流，有人工客服和在线客服；</p>
                <h2>项目技术</h2>
                <p>1、 该系统基于Ruoyi系统二次开发;</p>
                <p>2、 后端/框架：JAva、Spring Boot、MyBatis;</p>
                <p>3、 前端/框架/库：HTML、Css、JavaScript、Vue.js等;</p>
                <p>4、 其他：Redis、Element-plus、Git等；</p>
                <p>5、 图片滑动验证附件在线预览和下载；</p>
                <p>6、 身份证在线签名和阿里云文件OSS上传；</p>
                <p>7、 Q二维码付款；</p>

                <p>7、 登录验证采用 JWT 授权，请求需要登录的接口需要提交 Token 才能通过，否则登陆过期；</p>
                <p>8、 Mobile 端采用瀑布流布局来展示商品；</p>
                <h2>项目预览</h2>
                 <ul>
                    <li><img src="./images/yws2.png"></li>
                    <li><img src="./images/yws2.png"></li>
                    <li><img src="./images/yws2.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、系统原型图设计；</p>
                <p>2、系统全栈开发；</p>
                <p>3、Debug测试并修复；</p>
                <p>4、phpstudy项目部署；</p>
                
                <h2 h2 > 其他链接</h2>
                <p>1、<a href="https://baidu.com" target="_blank">项目源码（gitee）</a></p>
                <p>2、<a href="https://docs.qq.com/doc/DU2FSaFJ0V1VVcWJu" target="_blank">需求分析</a></p>
                <p>3、<a href="https://baidu.com" target="_blank">原型图</a></p>
                `


                ,
            },
            {
                name: "VW管理系统",
                text: "自动售货机管理系统",
                nb: [
                    "Spring Boot", "MyBatis", "Vue3", "Mysql", "Redis"
                ],
                url: "https://gitee.com/n0ts/CSharpOrderFood",
                img: "./images/xcl1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2024年4月2日 – 2024年6月5日，1人/43天</p>
                 <h2>开发工具</h2>
                <p>IntelliJ IDEA、Visual Studio Code、Navicat Premium等</p>
                <h2>项目背景</h2>
                <p></p>
                <h2>模块介绍</h2>
                <p>1、	点位管理模块：区域管理、点位管理、合作商管理；</p>
                <p>2、	设备管理模块：设备管理、设备状态管理、设备类型管理；</p>
                <p>3、	商品管理模块：商品类型、适配管理；</p>
                <h2>项目技术</h2>
                <h2>项目技术</h2>
                <p>1、 后端/框架：JAva、Spring Boot、MyBatis;</p>
                <p>2、 前端/框架/库：HTML、Css、JavaScript、Vue.js、Echarts、ajax等;</p>
                <p>3、 其他：Redis、Element-plus、Git等；</p>
                <p>4、 前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>

                <p>1、	使用 Winform 绘制软件界面，C# 便携后台代码；</p>
                <p>2、	使用 SQLServer 作为数据存储，便携 DBHelper 类与数据库进行交互；</p>
                <p>3、	图片验证码使用 Winform GDI+ 绘图生成随机验证码并显示；</p>
                <p>4、	所有密码采用 MD5 加密方式进行存储；</p>
                <p>5、	对所有的前台数据进行XSS注入或为空验证，防止恶意代码或空值造成程序报错；</p>
                <p>6、	许多位置进行了 Try Catch 异常捕获，如发生断网等情况软件会提醒客户而不是报错；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xcl1.png"></li>
                    <li><img src="./images/xcl2.png"></li>
                    <li><img src="./images/xcl3.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、后端开发和管理系统全端开发；</p>

                <p>2、负责数据库设计，模块设计；</p>
                <p>3、客户端与服务端的编程开发；</p>
                <p>4、修复测试人员发现的BUG；</p>
                
                <h2 h2 > 其他链接</h2>
                <p>1、<a href="https://baidu.com" target="_blank">项目源码（gitee）</a></p>
                <p>2、<a href="https://docs.qq.com/doc/DU2FSaFJ0V1VVcWJu" target="_blank">需求分析</a></p>
                <p>3、<a href="https://baidu.com" target="_blank">原型图</a></p>`,
            },
        ],
        listLoadMore: "查 看",
        loadMore: {
            text: "继续浏览",
            class: "yuwei4"
        }
    },
    contact: {
        title: "联系我",
        list: [
            // {
            //     name: "博客",
            //     context: "blog.n0ts.top",
            // icon: "fa-wordpress",
            // },
            {
                name: "邮箱",
                context: "2183542440@qq.com",
                icon: "fa-envelope",
            },
            {
                name: "微信",
                context: "YuWei1587882",
                icon: "fa-wechat",
            },
            {
                name: "Github",
                context: "blog.n0ts.top",
                icon: "fa-github",
            },
            {
                name: "QQ",
                context: "3532527896",
                icon: "fa-qq",
            }
        ]
    }
}