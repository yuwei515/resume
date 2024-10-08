export default {
    dialogWidth: "",
    indexHeight: "800px",
    index: {
        index: 0,
        // 描述语言
        welcome: ["您 好!", "欢 迎！", "Hello！", "Welcome！"],
        // text: "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是 <b>昱谓</b>，很高兴来您来到我的在线简历！我的期望岗位是<b>Java开发工程师</b>，期望薪资是<b>4k-7k</b>。</p>",
        text: "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很高兴您来到我的在线简历，我是 <b>蒙东甲</b>，今年22岁，来自广西，我的目标是应聘贵公司 <b>Java工程师</b> 岗位，可 <b>月底到岗</b> 。",
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
            content: "<span></span>就读于广西水利电力职业技术学院，所学专业是<b>物联网平台开发与应用方向</b>；<br/><div><div/><span></span>参加过24年广西职业技能竞赛并获得 <b>区赛一等奖</b>，在学校中专业成绩常居 <b>TOP5</b>，在学校中参加 <b>学校项目开发</b>并且担任 <b>小组长</b>等；<br/><div><div/><span></span>个人对于编程有 <b>浓厚的兴趣</b>，课余时间会课余时间会积极参加开源项目和技术社区，不断追求个人成长和技术创新。"
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
                url: "https://gitee.com/myuwei/gxsd",
                img: "./images/tucao1.png",
                content: `<h2>项目类型</h2>
                <p>学校医务室系统</p>
                <h2>开发周期</h2>
                <p>2024年9月12日 – 至今，3人/~天</p>
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
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/pharmacy.gif"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、药房模块需求分析和原型设计；</p>
                <p>2、门诊模块、药房模块的数据库设计和后端开发；</p>
                <p>3、门诊模块、药房模块管理界面开发；</p>
                <h2>其他链接</h2>
                <p>1、<a href="https://gitee.com/myuwei/gxsd" target="_blank">项目源码（gitee）</a></p>
                <p>2、<a href="https://docs.qq.com/doc/DU2FSaFJ0V1VVcWJu" target="_blank">需求分析</a></p>
                 `
            },
            {
                name: "双碳管理系统-招投标子系统",
                text: "一个招投标系统包括后台和用户前台",
                nb: [
                    "Spring Security", "Spring Boot", "MyBatis", "Vue2", "Mysql", "Redis",
                ],
                url: "https://gitee.com/myuwei/carbon",
                img: "./images/carbonbg.png",
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
                <p>2、	违规投诉模块：招标人负责受理与答复异议，对于招标文件、开标和评标结果的异议，投标人或其他利害关系人可以在规定时间内向招标人提出书面异议;</p>
                <p>3、	投标企业信息模块： 包括用户账号的创建、权限分配和管理；</p>
                <p>4、	平台动态模块：发布关于平台动态的消息、维护系统的基础数据、用户帮助、通知公告等；</p>
                <p>5、	政策法规模块：在此平台发布 国家相关的政策法规消息；</p>
                <p>6、	企业投标模块：维护和管理已投标企业的消息和相关事务；</p>
                <p>7、	会员模块：用户可以进行会员服务的购买；</p>
                <p>8、	轮播图模块：维护和管理用户界面的轮播图；</p>
                <p>9、	客服模块：用户前台可以和客服进行交流，有人工客服和在线客服；</p>
                <h2>项目技术</h2>
                <p>1、 该系统基于Ruoyi系统二次开发;</p>
                <p>2、 后端/框架：JAva、Spring Boot、MyBatis;</p>
                <p>3、 前端/框架/库：HTML、Css、JavaScript、Vue.js等;</p>
                <p>4、 其他：Redis、Element-plus、Git等；</p>
                <p>5、 图片滑动验证附件在线预览和下载；</p>
                <p>6、 身份证在线签名和阿里云文件OSS上传；</p>
                <p>7、 招投标前端自适应PC端和手机端；</p>
                <h2>项目预览</h2>
                 <ul>
                    <li><img src="./images/carbon2.gif"></li>
                    <li><img src="./images/carbon3.gif"></li>
                    <li><img src="./images/carbonws.gif"></li>
                    <li><img src="./images/carbonws2.gif"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、系统原型图设计；</p>
                <p>2、系统全栈开发；</p>
                <p>3、Debug测试并修复、jmeter接口测试；</p>
                <p>4、phpstudy项目部署；</p>
                
                <h2 h2 > 其他链接</h2>
                <p>1、<a href="https://gitee.com/myuwei/carbon" target="_blank">项目源码（gitee）</a></p>
                <p>2、<a href="https://modao.cc/axbox/design/pb2m21uqwwpvqskxz?s=0&screen=5tt8qx" target="_blank">原型图</a></p>
                `
                ,
            },
            {
                name: "VW管理系统",
                text: "自动售货机管理系统",
                nb: [
                    "Spring Boot", "MyBatis", "Vue3", "Mysql", "Redis"
                ],
                url: "https://gitee.com/myuwei/vw",
                img: "./images/vwbg.png",
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
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/vmimport.gif"></li>
                    <li><img src="./images/vmscreen.gif"></li>
                    <li><img src="./images/vmmachine.gif"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、后端开发和管理系统全端开发；</p>
                
                <h2 h2 > 其他链接</h2>
                <p>1、<a href="https://gitee.com/myuwei/vw" target="_blank">项目源码（gitee）</a></p>
                `,
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
        text: "返回顶部",
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
