var mbigscreen = (function () {
    var mdata = [];
    var data0 = {
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
    };
    var data1 = {
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
    };
    var data2 = {
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
    };
    var data3 = {
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
                }
                ,
                data: [],
            }]
        }
    };
    var data4 = {
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
        // ['11/11', '11/12', '11/13', '11/14', '11/15', '11/16', '11/17', '11/18', '11/19', '11/20'],
        // data: [18203, 23489, 29034, 104970, 131744, 330230, 29034, 104970, 131744, 330230],
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
    };
    var data5 = {
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

    };
    var data6 = {
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

    };
    var data7 = {
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
    };
    var data8 = {
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
    };
    var data9 = {
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
    };
    var data10 = {
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
        option: {}
    };
    var data11 = {
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
    };
    var data12 = {
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
        // vdata: 0,
        data: {
            value: 4719
        }
    };
    var data13 = {
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
    };
    var data14 = {
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
    };
    mdata = [
        data0,
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        data8,
        data9,
        data10,
        data11,
        data12,
        data13,
        data14
    ];
    return {
        getData: function () {
            return mdata;
        },
        setData: function (d) {
            mdata = d;
        }
    };

})(mbigscreen || {});
