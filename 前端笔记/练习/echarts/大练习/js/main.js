import p from '../imgs/chart.js';

console.log(p)

// 气象指标
// 今天温度
$('#temp-today').text(weather.today.temperature);
// 今天天气
$('#weather-today').text(weather.today.weather);
// 明天温度
$('#temp-tomorrow').text(`明天 ${ weather.tomorrow.temperature }`);
// 后天温度
$('#temp-after-tomorrow').text(`后天 ${ weather.tomorrow.temperature }`);
// pm2.5
$('#pm25').text(weather.today.pm25);
// 光照强度
$('#light-intensity').text(weather.today.lightIntensity);
// 湿度
$('#humidity').text(weather.today.humidity);
// 气压
$('#pressure').text(weather.today.pressure);

// 设备状态列表
function createDeviceStatusList(data) {
    const parent = $('.device-status');
    for (let i = 0; i < data.length; i += 2) {
        const item1 = data[i];
        const item2 = data[i + 1] || '';
        const row = $(`
            <div class="row">
                <div class="item">
                    ${ item1.name }
                    <span ${ item1.status === '灌溉中' ? 'class="active"' : '' }>
                        <i class="icon iconfont icon-dakaqiandao"></i>
                        ${ item1.status }
                    </span>
                </div>
                ${ item2 && `
                    <div class="item">
                        ${ item2.name }
                        <span ${ item2.status === '灌溉中' && 'class="active"' }>
                            <i class="icon iconfont icon-dakaqiandao"></i>
                            ${ item2.status }
                        </span>
                    </div>
                `}
            </div>
        `);
        row.appendTo(parent);
    }
}

createDeviceStatusList(deviceWater);

// 设备状态占比
function createDeviceStatusRate(data) {
    // 1.
    const instance = echarts.init(document.querySelector('#device-status-rate'));
    // 2 & 3.
    instance.setOption({
        title: {
            text: '设备状态占比',
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
            left: 8,
        },
        color: ['#6972c6', '#2f3b7b'],
        // 图例
        legend: {
            top: 24,
            left: 8,
            textStyle: {
                color: '#fff',
            },
            itemWidth: 12,
            itemHeight: 12,
            orient: 'vertical',
            align: 'right',
        },
        series: [
            {
                type: 'pie',
                radius: ['60%', '100%'],
                center: ['75%', '50%'],
                roseType: 'radius',
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                data: data.reduce((prev, current) => {
                    const finded = prev.find(p => p.name === current.status);

                    if (!finded) {
                        prev.push({ value: 1, name: current.status });
                    } else {
                        finded.value++;
                    }

                    return prev;
                }, []),
            },
        ]
    });

    const rate = (data.filter(d => d.status === '灌溉中').length * 100 / data.length).toFixed(0);
    $('#device-status-rate-value').text(`${ rate }%`);
}

createDeviceStatusRate(deviceWater);

// 空气温度/湿度
function createAirTemp(data) {

    data.sort((a, b) => a.timestamp - b.timestamp);

    const maxTemperature = Math.max(...data.map(d => d.temperature));

    const instance = echarts.init(document.querySelector('#air-temp'));
    instance.setOption({
        tooltip: {
            trigger: 'axis',
            formatter: `<img src="${ p }">{a0}: {c0}°C<br /><img src="${ p }">{a1}: {c1}%`,
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            textStyle: {
                color: '#fff',
            },
        },
        legend: {
            right: '20%',
            textStyle: {
                color: '#fff',
            },
            icon: 'path://M 6,10 A 6 4 10 1 0 14,10',
            data: [
                {
                    name: '温度',
                    icon: 'path://M959.744 368.9984l-102.8096-165.5808-120.8832 180.992h-59.5968l-128.3072-195.8912-127.4368 188.928h-65.024L238.2336 195.2256 131.5328 369.0496a36.38784 36.38784 0 0 0-5.12 22.4256l838.5536-6.9632a35.84 35.84 0 0 0-5.2224-15.5136z',
                    itemStyle: {
                        color: 'red',
                    },
                },
                {
                    name: '湿度',
                    icon: 'path://M434.1248 493.312c-27.1872-16.6912-48.2816-35.84-64.3584-60.1088-58.1632-87.9104-37.632-226.2528 67.2768-279.7568 65.536-33.4336 149.4528-16.0768 197.7856 43.1104 52.6848 64.5632 62.72 135.6288 29.0304 212.5824-13.4656 30.72-32 56.9856-59.7504 76.2368-2.0992 1.4848-3.9936 3.2256-5.9392 4.9664-0.512 0.4608-0.768 1.2288-1.9968 3.328 6.2464 1.536 12.1344 2.7136 17.92 4.4032 72.0384 20.5824 132.4032 57.8048 174.0288 121.9584 23.1936 35.7376 37.7856 74.9568 44.4416 116.6848 4.8128 30.0544 7.2192 60.6208 8.9088 91.0336 1.4336 26.1632-11.8784 41.3696-39.6288 49.6128-34.2528 10.1376-69.632 11.4176-104.9088 12.288-135.7824 3.328-271.616 4.4544-407.3472-2.0992-21.1456-1.024-42.3936-5.0688-62.976-10.24-30.1568-7.5776-40.6016-23.8592-39.68-54.784 1.1776-40.192 5.0688-79.9232 16.4864-118.7328 29.2864-99.5328 93.184-165.6832 191.0272-199.3728 6.2464-2.1504 12.544-4.3008 18.8928-6.0928 5.9392-1.7408 11.9808-2.9184 20.7872-5.0176z',
                    itemStyle: {
                        color: 'green',
                    },
                },
            ],
        },
        color: ['#3e7cb8', '#8d64d2', 'rgba(255, 255, 255, .02)'],
        xAxis: {
            type: 'category',
            data: data.map(d => dayjs(d.timestamp).format('HH:mm')),
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: '#7c84b8',
            },
        },
        yAxis: [
            {
                type: 'value',
                name: '温度(°C) ',
                position: 'left',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#7c84b8',
                },
                nameTextStyle: {
                    color: '#7c84b8',
                    align: 'right',
                },
            },
            {
                type: 'value',
                name: ' 湿度(%)',
                position: 'right',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#7c84b8',
                },
                nameTextStyle: {
                    color: '#7c84b8',
                    align: 'left',
                },
            },
        ],
        series: [
            {
                name: '温度',
                type: 'line',
                yAxisIndex: 0,
                data: data.map(d => d.temperature),
                smooth: true,
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 8,
                    shadowOffsetY: 4,
                },
                // symbolSize: 8,
                // symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
            },
            {
                name: '湿度',
                type: 'line',
                yAxisIndex: 1,
                data: data.map(d => d.humidity),
                smooth: true,
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 8,
                    shadowOffsetY: 4,
                },
            },
            {
                type: 'bar',
                yAxisIndex: 0,
                data: data.map(() => maxTemperature),
                barWidth: '90%',
                emphasis: {
                    itemStyle: {
                        color: 'rgba(255, 255, 255, .1)',
                    },
                },
            },
        ]
    });
}

createAirTemp(airTemperature);

// 消息提醒
function createMsgTip(data) {
    const list = $('#msg-tip-list');
    list.html('');
    for (const d of data) {
        const el = $(`
            <div class="item ${ d.type }">
                ${ d.type === 'danger' ? '<i class="icon iconfont icon-dakaqiandao"></i>' : '' }
                ${ d.type === 'info' ? '<i class="icon iconfont icon-shenghuojiaofei"></i>' : '' }
                ${ d.type === 'warning' ? '<i class="icon iconfont icon-tuandui"></i>' : '' }
                <div class="content">
                    <div class="info-title">
                        <span>${ d.title }</span>
                        <span class="time">${ dayjs(d.timestamp).format('YYYY-MM-DD HH:mm') }</span>
                    </div>
                    <div class="info-content">
                        ${ d.content }
                    </div>
                </div>
            </div>
        `);
        el.appendTo(list);
    }
}

createMsgTip(messages);

// 切换消息提醒
function bindMsgTipEvents(messages) {
    $('.tab').on('click', function () {
        console.log( $(this).attr('type') );
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        let data = [];
        switch ($(this).attr('type')) {
            case 'all':
                data = messages;
                break;
            case 'danger':
                data = messages.filter(m => m.type === 'danger');
                break;
            case 'warning':
                data = messages.filter(m => m.type === 'warning');
                break;
            case 'other':
                data = messages.filter(m => m.type !== 'warning' && m.type !== 'danger');
                break;

            default:
                break;
        }
        createMsgTip(data);
    });
}

bindMsgTipEvents(messages);
