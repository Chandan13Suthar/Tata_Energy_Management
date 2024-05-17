var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false,
    backgroundColor: '#f0f0f0'
});
var app = {};

var option;

let date =[];
//let data = [];
for (let i = 1; i <= 31; i++) { // Loop for 31 days
    date.push('Day' + i); // Pushing day labels into the array
   // data.push([Math.random() * 50 + 50, Math.random() * 60 + 60]); // Generate random data
}

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: 'Voltage',
         textStyle: {
            fontWeight: 'bold'
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
        textStyle: {
            fontWeight: 'bold'
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        textStyle: {
            fontWeight: 'bold'
        }

    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10
        },
        {
            start: 0,
            end: 10
        }
    ],
    series: [
        {
            name: 'Voltage',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }
                ])
            },
            data: [$01, $02, $03, $04, $05, $06, $07, $08, $09, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
