var mbigscreen = (function () {



    return {
        datatitle: {
            name: '广东省国防职业教育学院',
            type: 'background',
            style: {
                boxClass: 'm-bg'
            }
        },
        data0: {
            name: '',
            type: 'box',
            style: {
                box: {
                    top: '131px',
                    left: '383px',
                    width: '1154px',
                    height: '903px'
                },
                boxClass: "m-bg-box-border",
            }
        },
        data1: {
            name: '专业实习人数排名',
            type: 'roll',
            style: {
                box: {
                    top: '131px',
                    left: '45px',
                }
            },
            thead: ['专业', '实习人数'],
            unit: '人',
            data: [
                {
                    ranking: 1,
                    name: '国际经济与贸易',
                    value: 32,
                },
                {
                    ranking: 2,
                    name: '商务英语',
                    value: 42,
                },
                {
                    ranking: 3,
                    name: '商务英语',
                    value: 32,
                },
                {
                    ranking: 4,
                    name: '哲学应用',
                    value: 32,
                },
                {
                    ranking: 5,
                    name: '现代心理学',
                    value: 42,
                },
                {
                    ranking: 6,
                    name: '商务英语',
                    value: 32,
                },
                {
                    ranking: 7,
                    name: '哲学应用',
                    value: 32,
                },
                {
                    ranking: 8,
                    name: '现代心理学',
                    value: 42,
                },
                {
                    ranking: 9,
                    name: '商务英语',
                    value: 32,
                },
                {
                    ranking: 10,
                    name: '哲学应用',
                    value: 32,
                },
                {
                    ranking: 11,
                    name: '现代心理学',
                    value: 42,
                },
                {
                    ranking: 12,
                    name: '商务英语',
                    value: 32,
                }
            ]
        },
        data2: {
            name: '专业实习薪资排名',
            type: 'bar',
            style: {
                box: {
                    top: '446px',
                    left: '45px',
                }
            },
            axisData: 'yAxis',
            chartStyle: {
                itemStyle: [{
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(137, 116, 213, 0.08)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(99, 123, 229, 0.8)'
                    }
                    ])
                }, {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(229, 99, 173, 0.08)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(229, 99, 173, 0.8)'
                    }
                    ])
                }]
            },
            data: [{ name: '商务英语', value: 23489, }, { name: '商务英语', value: 29034 },
            {
                name: '汉语言文学', value: 104970
            }, { name: '哲学应用', value: 131744 }, { name: '现代心理学', value: 230230 }
            ],
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: 0,
                    left: '4%',
                    right: '2%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: [],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: (params) => {
                            return '{marginTop|' + params + '}';
                        },
                        rich: {
                            marginTop: {
                                padding: [0, 0, 0, 0],
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 14,
                            }
                        }
                    },
                },
                series: [
                    {
                        type: 'bar',
                        label: {
                            show: true,
                            position: ['80%', '20%'],
                            color: '#fff'
                        },
                        barWidth: 18,
                        data: []
                    }
                ]
            }
        },
        data3: {
            name: '热门专业',
            type: 'bubble',
            style: {
                box: {
                    top: '761px',
                    left: '45px',
                    width: '319px',
                    height: '273px'
                }
            },
            data: [{
                "name": "机电工程",
                "value": 10000
            }, {
                "name": "钻石挖掘",
                "value": 6181,
            }, {
                "name": "土木工程",
                "value": 4386
            }, {
                "name": "丛林打猎",
                "value": 4055
            }, {
                "name": "文体娱乐",
                "value": 2467
            }
            ],
            option: {
                animationDurationUpdate: function (idx) {
                    return idx * 100;
                },
                animationEasingUpdate: 'bounceIn',
                grid: {
                    top: 0,
                    left: '4%',
                    right: '2%',
                    bottom: 0,
                    containLabel: true
                },
                series: [{
                    type: 'graph',
                    layout: 'force',
                    center: ['50%', '25%'],
                    force: {
                        repulsion: 120,
                    },
                    "symbolSize": 60,
                    "draggable": true,
                    "itemStyle": {
                        "color": {
                            "type": "radial",
                            "x": 0.5,
                            "y": 0.5,
                            "r": 0.5,
                            "colorStops": [{
                                "offset": 0,
                                "color": "rgba(71, 77, 157, 0)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(71, 77, 157, 0.5)"
                            }
                            ],
                            "global": false
                        },
                        "borderWidth": 0
                    },
                    roam: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}\n{c}',
                            fontSize: 9
                        }
                    },
                    data: [],
                }]
            }
        },
        data4: {
            name: '日志提交量监控',
            type: 'bar',
            style: {
                box: {
                    top: '816px',
                    left: '431px',
                    width: '700px',
                    height: '161px'
                },
                boxClass: "m-bg-box-clean",
            },
            chartStyle: {
                itemStyle: [{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(99, 123, 229, 0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(137, 116, 213, 0.08)'
                    }
                    ])
                }, {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(229, 99, 173, 0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(229, 99, 173, 0.08)'
                    }
                    ])
                }]
            },
            data: [{ name: '11/11', value: 18203 }, { name: '11/12', value: 23489 }, { name: '11/13', value: 29034 }, { name: '11/14', value: 104970 }, { name: '11/15', value: 131744 }, { name: '11/16', value: 330230 }, { name: '11/17', value: 29034 }, { name: '11/18', value: 104970 }, { name: '11/19', value: 131744 }, {
                name: '11/20', value: 330230
            }],
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: 0,
                    left: '4%',
                    right: '2%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: {
                    data: [],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        formatter: (params) => {
                            return '{marginTop|' + params + '}';
                        },
                        rich: {
                            marginTop: {
                                padding: [0, 0, 0, 0],
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 14,
                            }
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 25,
                        data: []
                    }
                ]
            }
        },
        data5: {
            name: '专业实习人数排名',
            type: 'pie',
            style: {
                box: {
                    top: '131px',
                    left: '1553px',
                    width: '319px',
                    height: '273px'
                }
            },
            data: [
                { value: 335, name: '民企' },
                { value: 310, name: '外企' },
                { value: 234, name: '事业单位' },
                { value: 135, name: '合资' }
            ],
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                grid: {
                    width: '100px',
                    height: '100px',
                    top: 0,
                    left: '4%',
                    right: '2%',
                    bottom: 0,
                    containLabel: true
                },
                color: ['rgb(171,87,68)', 'rgb(155,67,121)', 'rgb(71,85,160)', 'rgb(171,190,165)'],
                series: [
                    {
                        name: '实习企业类别占比',
                        type: 'pie',
                        radius: ['65%', '75%'],
                        // avoidLabelOverlap: true,
                        label: {
                            normal: {
                                show: true,
                                formatter: '{b}\n{d}%',
                                textStyle: {
                                    fontSize: '16',
                                    color: '#fff'
                                },
                                position: 'inside'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: []
                    }
                ]
            }

        },
        data6: {
            name: '实习学生性别占比',
            type: 'pie',
            style: {
                box: {
                    top: '416px',
                    left: '1553px',
                    width: '319px',
                    height: '273px'
                }
            },
            data: [
                { value: 335, name: '男生' },
                { value: 310, name: '女生' }
            ],
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                grid: {
                    width: '100px',
                    height: '100px',
                    top: 0,
                    left: '4%',
                    right: '2%',
                    bottom: 0,
                    containLabel: true
                },
                graphic: {
                    elements: [{
                        type: 'image',
                        style: {
                            image: "/assets/img/bg/menwomen.png",
                        },
                        left: '43%',
                        top: '42%'
                    }]
                },
                color: ['rgb(71,85,160)', 'rgb(155,67,121)', 'rgb(171,190,165)', 'rgb(171,87,68)'],

                series: [
                    {
                        name: '实习学生性别占比',
                        type: 'pie',
                        radius: ['50%', '60%'],
                        label: {
                            normal: {
                                show: true,
                                formatter: '{b}\n{d}%',
                                textStyle: {
                                    fontSize: '16',
                                },
                                distance: 0,
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '18',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: []
                    }
                ]
            }

        },
        data7: {
            name: '实习去向占比',
            type: 'bar',
            style: {
                box: {
                    top: '701px',
                    left: '1553px',
                    width: '319px',
                    height: '333px',
                }
            },
            axisData: 'yAxis',
            chartStyle: {
                itemStyle: [{
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(137, 116, 213, 0.08)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(99, 123, 229, 0.8)'
                    }
                    ])
                }, {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(229, 99, 173, 0.08)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(229, 99, 173, 0.8)'
                    }
                    ])
                }]
            },
            data: [{ name: '已找到工作', value: 900, }, { name: '实习转正', value: 1200 },
            {
                name: '正在找工作', value: 1300
            }, { name: '回家帮父母', value: 1400 }, { name: '在家待业', value: 1500 }
            ],
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: 0,
                    left: '4%',
                    right: '2%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: [],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: (params) => {
                            return '{marginTop|' + params + '}';
                        },
                        rich: {
                            marginTop: {
                                padding: [0, 0, 0, 0],
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 14,
                            }
                        }
                    },
                },
                series: [
                    {
                        type: 'bar',
                        label: {
                            show: true,
                            position: ['80%', '20%'],
                            color: '#fff'
                        },
                        barWidth: 18,
                        data: []
                    }
                ]
            }
        },
        data8: {
            name: '录取单位排名',
            type: 'roll',
            style: {
                box: {
                    top: '315px',
                    left: '1191px',
                    width: '319px',
                }
            },
            thead: ['单位', '录取人数'],
            unit: '人',
            data: [
                {
                    ranking: 1,
                    name: '广东闯越信息科技有限公司',
                    value: 32,
                },
                {
                    ranking: 2,
                    name: '福佑卡车有限公司',
                    value: 42,
                },
                {
                    ranking: 3,
                    name: '谷歌中国科技有限公司',
                    value: 32,
                },
                {
                    ranking: 4,
                    name: '微软中国科技有限公司',
                    value: 32,
                },
                {
                    ranking: 5,
                    name: '联想集团',
                    value: 42,
                },
                {
                    ranking: 6,
                    name: '商务英语公司',
                    value: 32,
                },
                {
                    ranking: 7,
                    name: '哲学应用公司',
                    value: 32,
                },
                {
                    ranking: 8,
                    name: '现代心理学公司',
                    value: 42,
                },
                {
                    ranking: 9,
                    name: '商务英语公司',
                    value: 32,
                },
                {
                    ranking: 10,
                    name: '哲学应用公司',
                    value: 32,
                },
                {
                    ranking: 11,
                    name: '现代心理学公司',
                    value: 42,
                },
                {
                    ranking: 12,
                    name: '商务英语公司',
                    value: 32,
                }
            ]
        },
        data9: {
            name: '实习岗位薪资排名',
            type: 'roll',
            style: {
                box: {
                    top: '640px',
                    left: '1191px',
                    width: '319px',
                    height: '359px',
                }
            },
            thead: ['岗位', '薪资'],
            unit: '元',
            listSize: 8,
            data: [
                {
                    ranking: 1,
                    name: '网页设计师',
                    value: 32,
                },
                {
                    ranking: 2,
                    name: 'C#语言开发',
                    value: 42,
                },
                {
                    ranking: 3,
                    name: 'JAVA开发',
                    value: 32,
                },
                {
                    ranking: 4,
                    name: '保姆',
                    value: 32,
                },
                {
                    ranking: 5,
                    name: '篮球员',
                    value: 42,
                },
                {
                    ranking: 6,
                    name: '老干部',
                    value: 32,
                },
                {
                    ranking: 7,
                    name: '退休工人',
                    value: 32,
                },
                {
                    ranking: 8,
                    name: '现代心理学',
                    value: 42,
                },
                {
                    ranking: 9,
                    name: '商务英语',
                    value: 32,
                },
                {
                    ranking: 10,
                    name: '哲学应用',
                    value: 32,
                },
                {
                    ranking: 11,
                    name: '现代心理学',
                    value: 42,
                },
                {
                    ranking: 12,
                    name: '商务英语',
                    value: 32,
                }
            ]
        },
        data10: {
            name: '实习去向线路图',
            type: 'map',
            style: {
                box: {
                    top: '320px',
                    left: '427px',
                    width: '700px',
                    height: '460px',
                },
                boxClass: "m-bg-box-clean m-bg-net",
            },
            url: 'assets/map/json/guangdong.json',
            map: 'guangdong',
            readyOption: {
                tooltip: {
                    show: true,
                },
                geo3D: {
                    map: 'guangdong',
                    roam: true,
                    itemStyle: {
                        color: '#23193e',
                        opacity: 1,
                        borderWidth: 0.4,
                        borderColor: '#f1bffa'
                    },
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fff', // 地图初始化区域字体颜色
                            fontSize: 12,
                            opacity: 1,
                            backgroundColor: 'rgba(0,23,11,0)'
                        },
                    },
                    emphasis: { // 当鼠标放上去  地区区域是否显示名称
                        label: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                                backgroundColor: 'rgba(0,23,11,0)'
                            }
                        }
                    },
                    viewControl: {
                        distance: 82,
                        alpha: 56,
                        center: [-13, -10, 0]
                    }
                }
                ,
                series: [

                    // 画线

                    {
                        type: 'lines3D',
                        coordinateSystem: 'geo3D',
                        effect: {
                            show: true,
                            trailWidth: 2,
                            trailOpacity: 0.5,
                            trailLength: 0.5,
                            constantSpeed: 8
                        },

                        blendMode: 'lighter',

                        lineStyle: {
                            width: 0.5,
                            opacity: 1
                        },

                        data: [
                            [[113.27, 23.13], [113.6, 24.82]],
                            [[113.27, 23.13], [114.05, 22.55]],
                            [[113.27, 23.13], [113.57, 22.27]],
                            [[113.27, 23.13], [116.68, 23.35]],
                            [[113.27, 23.13], [113.12, 23.02]],
                            [[113.27, 23.13], [113.3, 22.8]],
                            [[113.27, 23.13], [113.08, 22.58]],
                            [[113.27, 23.13], [110.35, 21.27]],
                            [[113.27, 23.13], [110.92, 21.67]],
                            [[113.27, 23.13], [112.47, 23.05]],
                            [[113.27, 23.13], [114.42, 23.12]],
                            [[113.27, 23.13], [116.12, 24.28]],
                            [[113.27, 23.13], [115.37, 22.78]],
                            [[113.27, 23.13], [114.7, 23.73]],
                            [[113.27, 23.13], [111.98, 21.87]],
                            [[113.27, 23.13], [113.03, 23.7]],
                            [[113.27, 23.13], [113.75, 23.05]],
                            [[113.27, 23.13], [113.38, 22.52]],
                            [[113.27, 23.13], [116.62, 23.67]],
                            [[113.27, 23.13], [116.37, 23.55]],
                            [[113.27, 23.13], [112.03, 22.92]],
                        ]
                    }
                ]
            }
        },
        data11: {
            name: '在岗实习人数',
            type: 'text',
            style: {
                box: {
                    top: '136px',
                    left: '441px',
                    width: '260px',
                    height: '120px'
                },
                boxClass: "m-bg-box-clean",
            },
            vdata: 0,
            data: {
                value: 2719
            }
        },
        data12: {
            name: '本届总人数',
            type: 'text',
            style: {
                box: {
                    top: '136px',
                    left: '698px',
                    width: '260px',
                    height: '120px'
                },
                boxClass: "m-bg-box-clean",
                textClass: "m-bg-text-white"
            },
            data: {
                value: 4719
            }
        },
        data13: {
            name: '实习率',
            type: 'text',
            style: {
                box: {
                    top: '136px',
                    left: '953px',
                    width: '260px',
                    height: '120px'
                },
                boxClass: "m-bg-box-clean",
                textClass: "m-bg-text-white"
            },
            unit: '%',
            data: {
                value: 80
            }
        },
        data14: {
            name: '待业总人数',
            type: 'text',
            style: {
                box: {
                    top: '136px',
                    left: '1191px',
                    width: '260px',
                    height: '120px'
                },
                boxClass: "m-bg-box-clean",
                textClass: "m-bg-text-white"
            },
            data: {
                value: 2719
            }
        },
        getData: function () {
            return [
                this.datatitle,
                this.data0,
                this.data1,
                this.data2,
                this.data3,
                this.data4,
                this.data5,
                this.data6,
                this.data7,
                this.data8,
                this.data9,
                this.data10,
                this.data11,
                this.data12,
                this.data13,
                this.data14
            ];
        },
        setData: function (d) {
            mdata = d;
        }
    };

})(mbigscreen || {});

// 广东城市坐标点
// "广州市": [113.27, 23.13],
// "韶关市": [113.6, 24.82],
// "深圳市": [114.05, 22.55],
// "珠海市": [113.57, 22.27],
// "汕头市": [116.68, 23.35],
// "佛山市": [113.12, 23.02],
// "顺德市": [113.3, 22.8],
// "江门市": [113.08, 22.58],
// "湛江市": [110.35, 21.27],
// "茂名市": [110.92, 21.67],
// "肇庆市": [112.47, 23.05],
// "惠州市": [114.42, 23.12],
// "梅州市": [116.12, 24.28],
// "汕尾市": [115.37, 22.78],
// "河源市": [114.7, 23.73],
// "阳江市": [111.98, 21.87],
// "清远市": [113.03, 23.7],
// "东莞市": [113.75, 23.05],
// "中山市": [113.38, 22.52],
// "潮州市": [116.62, 23.67],
// "揭阳市": [116.37, 23.55],
// "云浮市": [112.03, 22.92]

/**
 * "jquery": "3.4.1"
 */
$(document).ready(function () {
    /**
     * 注意以下只用于动态修改数据
     */
    // console.log("ready!");
    // 修改名称
    // console.log(mbigscreen.data10); // 只是打印
    // mbigscreen.data10.targetThis.targetData.name = "~~~~~~修改名称！！！";
    // mbigscreen.data10.targetThis.targetData.targetThis.ngOnInit();

    // 修改数据
    // console.log(mbigscreen.data2); // 只是打印 
    // mbigscreen.data1.targetThis.targetData.data = [
    //     {
    //         ranking: 1,
    //         name: '哈哈哈~国际经济与贸易',
    //         value: 32,
    //     },
    //     {
    //         ranking: 2,
    //         name: '哈哈哈~商务英语',
    //         value: 42,
    //     },
    //     {
    //         ranking: 3,
    //         name: '哈哈哈~商务英语',
    //         value: 32,
    //     },
    //     {
    //         ranking: 4,
    //         name: '哈哈哈~哲学应用',
    //         value: 32,
    //     },
    //     {
    //         ranking: 5,
    //         name: '哈哈哈~现代心理学',
    //         value: 42,
    //     },
    //     {
    //         ranking: 6,
    //         name: '哈哈哈~商务英语',
    //         value: 32,
    //     },
    //     {
    //         ranking: 7,
    //         name: '哈哈哈~哲学应用',
    //         value: 32,
    //     },
    //     {
    //         ranking: 8,
    //         name: '哈哈哈~现代心理学',
    //         value: 42,
    //     },
    //     {
    //         ranking: 9,
    //         name: '哈哈哈~商务英语',
    //         value: 32,
    //     },
    //     {
    //         ranking: 10,
    //         name: '哈哈哈~哲学应用',
    //         value: 32,
    //     },
    //     {
    //         ranking: 11,
    //         name: '哈哈哈~现代心理学',
    //         value: 42,
    //     },
    //     {
    //         ranking: 12,
    //         name: '哈哈哈~商务英语',
    //         value: 32,
    //     }
    // ];
    // mbigscreen.data1.targetThis.targetData.targetThis.ngOnInit();

    // 也可以全部修改
    // console.log(mbigscreen.data10); // 只是打印
    // mbigscreen.data2.targetThis.targetData = mbigscreen.data3;
    // mbigscreen.data2.targetThis.targetData.targetThis.ngOnInit();

    /**
     * 通过接口实时获取数据
     */
    // $.ajax({
    //     method: "POST",
    //     url: "api/list",
    //     data: { name: "John", location: "Boston" }
    // }).done(function (res) {
    //     mbigscreen.data2.targetThis.targetData.data = res.result;
    //     mbigscreen.data2.targetThis.targetData.targetThis.ngOnInit();
    // });
});