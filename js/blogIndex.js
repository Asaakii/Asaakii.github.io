document.addEventListener('pjax:complete', todis);
document.addEventListener('DOMContentLoaded', todis);
function todis(){
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'T3EBZ-TJ7LI-YRBG2-5ZLUR-KD3OS-U6BJO',
        output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        ipLoacation = res;
        function getDistance(e1, n1, e2, n2) {
            const R = 6371
            const { sin, cos, asin, PI, hypot } = Math
        
            let getPoint = (e, n) => {
                e *= PI / 180
                n *= PI / 180
                return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
            }
        
            let a = getPoint(e1, n1)
            let b = getPoint(e2, n2)
            let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
            let r = asin(c / 2) * 2 * R
            return Math.round(r);
        }
        
        function showWelcome() {
        
            let dist = getDistance(103.85375, 30.68934, ipLoacation.result.location.lng, ipLoacation.result.location.lat);
        
            let pos = ipLoacation.result.ad_info.nation;
            let posdesc;
            switch (ipLoacation.result.ad_info.nation) {
                case "日本":
                    posdesc = "よろしく，一起去看樱花吗";
                    break;
                case "美国":
                    posdesc = "Make America Great Again!";
                    break;
                case "英国":
                    posdesc = "想同你一起夜乘伦敦眼";
                    break;
                case "俄罗斯":
                    posdesc = "干了这瓶伏特加！";
                    break;
                case "法国":
                    posdesc = "C'est La Vie";
                    break;
                case "德国":
                    posdesc = "Die Zeit verging im Fluge.";
                    break;
                case "澳大利亚":
                    posdesc = "一起去大堡礁吧！";
                    break;
                case "加拿大":
                    posdesc = "拾起一片枫叶赠予你";
                    break;
                case "中国":
                    pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city;
                    switch (ipLoacation.result.ad_info.province) {
                        case "北京市":
                            posdesc = "AUV，这可真地道~~";
                            break;
                        case "天津市":
                            posdesc = "来到了天津卫，嘛也没学会。";
                            break;
                        case "重庆市":
                            posdesc = "高德地图:已到达重庆，下面交给百度地图导航。"
                            break;
                        case "河北省":
                            posdesc = "这么近，那么美，周末到河北。";
                            break;
                        case "山西省":
                            posdesc = "展开坐具长三尺，已占山河五百余。";
                            break;
                        case "内蒙古自治区":
                            posdesc = "天苍苍，野茫茫，风吹草低见牛羊。";
                            break;
                        case "辽宁省":
                            posdesc = "我想吃烤鸡架！";
                            break;
                        case "吉林省":
                            posdesc = "吉林！（压声）";
                            break;
                        case "黑龙江省":
                            posdesc = "很喜欢哈尔滨大剧院。";
                            break;
                        case "上海市":
                            posdesc = "众所周知，中国只有两个城市。";
                            break;
                        case "江苏省":
                            switch (ipLoacation.result.ad_info.city) {
                                case "南京市":
                                    posdesc = "这是我挺想去的城市啦。";
                                    break;
                                case "苏州市":
                                    posdesc = "上有天堂，下有苏杭。";
                                    break;
                                default:
                                    posdesc = "散装是必须要散装的。";
                                    break;
                            }
                            break;
                        case "浙江省":
                            posdesc = "东风渐绿西湖柳，雁已还人未南归。";
                            break;
                        case "河南省":
                            switch (ipLoacation.result.ad_info.city) {
                                case "郑州市":
                                    posdesc = "豫州之域，天地之中。";
                                    break;
                                case "南阳市":
                                    posdesc = "臣本布衣，躬耕于南阳。此南阳非彼南阳！";
                                    break;
                                case "驻马店市":
                                    posdesc = "峰峰有奇石，石石挟仙气。嵖岈山的花很美哦！";
                                    break;
                                case "开封市":
                                    posdesc = "刚正不阿包青天。";
                                    break;
                                case "洛阳市":
                                    posdesc = "洛阳牡丹甲天下。";
                                    break;
                                default:
                                    posdesc = "可否带我品尝河南烩面啦？";
                                    break;
                            }
                            break;
                        case "安徽省":
                            posdesc = "蚌埠住了，芜湖起飞。";
                            break;
                        case "福建省":
                            posdesc = "井邑白云间，岩城远带山。";
                            break;
                        case "江西省":
                            posdesc = "落霞与孤鹜齐飞，秋水共长天一色。";
                            break;
                        case "山东省":
                            posdesc = "遥望齐州九点烟，一泓海水杯中泻。";
                            break;
                        case "湖北省":
                            posdesc = "来碗热干面！";
                            break;
                        case "湖南省":
                            posdesc = "请我喝一杯茶颜悦色";
                            break;
                        case "广东省":
                            posdesc = "老板来两斤福建人。";
                            break;
                        case "广西壮族自治区":
                            posdesc = "桂林山水甲天下。";
                            break;
                        case "海南省":
                            posdesc = "朝观日出逐白浪，夕看云起收霞光。";
                            break;
                        case "四川省":
                            posdesc = "著名景点：老紫蜀道山。";
                            break;
                        case "贵州省":
                            posdesc = "茅台，学生，再塞200。";
                            break;
                        case "云南省":
                            posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天。";
                            break;
                        case "西藏自治区":
                            posdesc = "躺在茫茫草原上，仰望蓝天。";
                            break;
                        case "陕西省":
                            posdesc = "来份臊子面加馍。";
                            break;
                        case "甘肃省":
                            posdesc = "羌笛何须怨杨柳，春风不度玉门关。";
                            break;
                        case "青海省":
                            posdesc = "牛肉干和老酸奶都好好吃。";
                            break;
                        case "宁夏回族自治区":
                            posdesc = "大漠孤烟直，长河落日圆。";
                            break;
                        case "新疆维吾尔自治区":
                            posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风。";
                            break;
                        case "台湾省":
                            posdesc = "我在这头，大陆在那头。";
                            break;
                        case "香港特别行政区":
                            posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉。";
                            break;
                        case "澳门特别行政区":
                            posdesc = "性感荷官，在线发牌。";
                            break;
                        default:
                            posdesc = "带我去你的城市逛逛吧！";
                            break;
                    }
                    break;
                default:
                    posdesc = "带我去你的国家逛逛吧。";
                    break;
            }
        
            //判断时间
            let timeChange;
            let date = new Date();
            if (date.getHours()>= 5 && date.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨";
            else if (date.getHours()>= 1 && date.getHours() < 13) timeChange = "<span>中午好</span>，该摸鱼吃午饭了";
            else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
            else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>三点几啦</span>，饮茶先啦！";
            else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
            else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好</span>，夜生活嗨起来！";
            else timeChange = "夜深了，早点休息，少熬夜";
        
            document.getElementsByClassName("announcement_content")[0].innerHTML =
                `欢迎来自<span>${pos}</span>的小伙伴。${timeChange}<br>
        你距离Asaakii约有<span>${dist}</span>公里，${posdesc}
        <br>
        <br>
        看到这条记得催我日更哦。
        `;
        }
        showWelcome()
    }
})
    function switchPostChart () {
    let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4C4948' : 'rgba(255,255,255,0.7)'
    if (document.getElementById('posts-chart') && postsOption) {
      try {
        let postsOptionNew = postsOption
        postsOptionNew.title.textStyle.color = color
        postsOptionNew.xAxis.nameTextStyle.color = color
        postsOptionNew.yAxis.nameTextStyle.color = color
        postsOptionNew.xAxis.axisLabel.color = color
        postsOptionNew.yAxis.axisLabel.color = color
        postsOptionNew.xAxis.axisLine.lineStyle.color = color
        postsOptionNew.yAxis.axisLine.lineStyle.color = color
        postsOptionNew.series[0].markLine.data[0].label.color = color
        postsChart.setOption(postsOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
    if (document.getElementById('tags-chart') && tagsOption) {
      try {
        let tagsOptionNew = tagsOption
        tagsOptionNew.title.textStyle.color = color
        tagsOptionNew.xAxis.nameTextStyle.color = color
        tagsOptionNew.yAxis.nameTextStyle.color = color
        tagsOptionNew.xAxis.axisLabel.color = color
        tagsOptionNew.yAxis.axisLabel.color = color
        tagsOptionNew.xAxis.axisLine.lineStyle.color = color
        tagsOptionNew.yAxis.axisLine.lineStyle.color = color
        tagsOptionNew.series[0].markLine.data[0].label.color = color
        tagsChart.setOption(tagsOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
    if (document.getElementById('categories-chart') && categoriesOption) {
      try {
        let categoriesOptionNew = categoriesOption
        categoriesOptionNew.title.textStyle.color = color
        categoriesOptionNew.legend.textStyle.color = color
        if (!categoryParentFlag) { categoriesOptionNew.series[0].label.color = color }
        categoriesChart.setOption(categoriesOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
    }
    document.querySelector(".rightMenu-item:has(.fa-moon)").addEventListener("click", function () { setTimeout(switchPostChart, 100) })
    document.getElementById("con-mode").addEventListener("click", function () { setTimeout(switchPostChart, 100) })}
    //