var _data = [{
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 50
}, {
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 30
}, {
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 10
}, {
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 90
}, {
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 99
}, {
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 24
}, {
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 90
}, {
  imgUrl: './files/images/machine01.jpeg',
  title1: 'CNC Machine 1',
  title2: 'Machine Static(last 1 week)',
  data1: 'P17156',
  data2: '07 15:09',
  data3: 'P17156',
  data4: '07 15:55',
  data5: '&nbsp;',
  data6: '0',
  data7: '&nbsp;',
  data8: '0',
  data9: '&nbsp;',
  data10: '0',
  data11: '&nbsp;',
  data12: '0',
  data13: '20 Hrs',
  data14: '2 Hrs',
  data15: '22 Hrs',
  data16: '&nbsp;',
  data17: '0',
  gaugeValue: 102
}];
function initRate(instance, data) {
  var dom = instance,
    myChart = echarts.init(dom),
    option = {
      grid: {
        top: 0,
        right:0,
        bottom:0,
        left:0
      },
      tooltip: {
        show: false
      },
      toolbox: {
        show: false
      },
      series: [
        {
          name: '机台',
          type: 'gauge',
          center: ['50%', '50%'],
          radius: '100%',
          startAngle: 225,
          endAngle: -45,
          min: 0,
          max: 120,
          axisLine: {
            show: true,
            lineStyle: {
              width: 2,
              color: [
                [
                  data / 120, new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                      offset: 0,
                      color: 'rgba(255,255,255,0)',
                    },
                    {
                      offset: 1,
                      color: 'white',
                    }
                  ]
                  )
                ],
                [
                  1, 'rgba(255,255,255, 0)'
                ]
              ]
            }
          },
          axisTick: {
            show: 0,
          },
          splitLine: {
            show: 0,
          },
          axisLabel: {
            show: 0
          },
          pointer: {
            show: 0,
          },
          detail: {
            show: 0
          },
          data: [{
            value: data,
          }]
        },
        // 外围刻度
        {
          type: 'gauge',
          center: ['50%', '50%'],
          radius: '90%', // 1行3个
          splitNumber: 12,
          min: 0,
          max: 120,
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: [
                [1, 'rgba(0,0,0,0)']
              ]
            }
          }, //仪表盘轴线
          axisTick: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.6)',
              width: 1
            },
            length: -6
          }, //刻度样式
          splitLine: {
            show: true,
            length: 10,
            lineStyle: {
              color: 'rgba(255,255,255,0.6)'
            }
          }, //分隔线样式
          axisLabel: {
            show: true,
            distance: 2,
            textStyle: {
              color: 'white',
              fontSize: '12',
              fontWeight: 'bold'
            }
          },
          pointer: {
            show: 0
          },
          detail: {
            show: 0
          }
        },
        // 内侧指针、数值显示
        {
          name: '机台',
          type: 'gauge',
          center: ['50%', '50%'],
          radius: '94%',
          startAngle: 225,
          endAngle: -45,
          min: 0,
          max: 120,
          axisLine: {
            show: true,
            lineStyle: {
              width: 50,
              color: [
                [
                  data / 120, new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                      offset: 0,
                      color: 'rgba(0,0,0, 0)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(242,166,200,0.6)',
                    }
                  ]
                  )
                ],
                [
                  1, 'rgba(255,255,255, 0)'
                ]
              ]
            }
          },
          axisTick: {
            show: 0,
          },
          splitLine: {
            show: 0,
          },
          axisLabel: {
            show: 0
          },
          pointer: {
            show: true,
            length: '102%',
            width: 3
          },
          title: {
            show: true,
            offsetCenter: [0, '65%'],
            color: 'white',
            fontSize: 20,
            /* backgroundColor: "#D8d8d8",*/
            borderRadius: 21,
            padding: 5
          },
          detail: {
            show: true,
            offsetCenter: [0, 0],
            textStyle: {
              fontSize: 25,
              color: '#fff'
            },
            formatter: [
              '{value}' + ('%' || ''),
              /* '{name|' + '机台' + '}'*/
            ].join('\n'),

            rich: {
              name: {
                fontSize: 20,
                lineHeight: 10,
                color: '#ddd',
                padding: [30, 0, 0, 0]
              }
            }
          },
          itemStyle: {
            normal: {
              color: 'white',
            }
          },
          data: [{
            value: data,
            name: '机台'
          }]
        }
      ]
    };
  myChart.setOption(option, true);
  $(window).bind('resize', function () {
    myChart.resize();
  });
  $('#myCarousel').on('slid.bs.carousel', function () {
    myChart.resize();
  });
}
function getDate() {
  var _monthMapper = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  },
    _date = new Date(),
    _day = _date.getDate(),
    _month = _date.getMonth(),
    _year = _date.getFullYear();
  return _day + ' - ' + _monthMapper[_month] + ' - ' + _year;
}

function transData(data) {
  var _splitNumber = window.innerWidth >= 1920 ? 8 : 4;
  var _data = data,
    _groupData = [];
  for (var i = 0; i < _data.length; i += _splitNumber) {
    _groupData.push(_data.slice(i, i + _splitNumber));
  }
  return _groupData;
}

function initList() {
  var _list = transData(_data);
  var _temp = '';
  var _itemModal = function (list) {
    var _modalTemp = '';
    list.map(function (item) {
      _modalTemp += `<div class="col-xl-3 col-md-6">
          <div class="card newStyle" style="margin-bottom:15px;">
              <div class="corner top-left"></div>
              <div class="corner top-right"></div>
              <div class="corner bottom-left"></div>
              <div class="corner bottom-right"></div>
              <div class="workshop-item">
                  <div class="workshop-left">
                      <div class="workshop-post">
                          <img src="${item.imgUrl}" alt="">
                      </div>
                      <p class="workshop-title"><span>${item.title1}</span></p>
                      <div class="workshop-rate" data-value="${item.gaugeValue}">
                          <div class="chart-instance"></div>
                      </div>
                  </div>
                  <div class="workshop-right">
                      <table class="workshop-status table table-bordered">
                          <tr class="workshop-status-rows">
                              <td class="workshop-status-item"><span class="c1">Completed 2</span></td>
                              <td class="workshop-status-item twoPart"><span class="c2">${item.data1}</span></td>
                              <td class="workshop-status-item"><span class="c3">${item.data2}</span></td>
                          </tr>
                          <tr class="workshop-status-rows">
                              <td class="workshop-status-item"><span class="c1">Completed 2</span></td>
                              <td class="workshop-status-item twoPart"><span class="c2">${item.data3}</span></td>
                              <td class="workshop-status-item"><span class="c3">${item.data4}</span>
                          </tr>
                          </tr>
                          <tr class="workshop-status-rows">
                              <td class="workshop-status-item"><span class="c1">Running</span></td>
                              <td class="workshop-status-item twoPart" class="c2"><span class="c2">${item.data16}</span></td>
                              <td class="workshop-status-item"><span class="c3">${item.data17}</span></td>
                          </tr>
                          <tr class="workshop-status-rows">
                              <td class="workshop-status-item"><span class="c1">Next1</span></td>
                              <td class="workshop-status-item twoPart"><span class="c2">${item.data5}</span></td>
                              <td class="workshop-status-item"><span class="c3">${item.data6}</span></td>
                          </tr>
                          <tr class="workshop-status-rows">
                              <td class="workshop-status-item"><span class="c1">Next1</span></td>
                              <td class="workshop-status-item twoPart"><span class="c2">${item.data7}</span></td>
                              <td class="workshop-status-item"><span class="c3">${item.data8}</span></td>
                          </tr>
                          <tr class="workshop-status-rows">
                              <td class="workshop-status-item"><span class="c1">Next1</span></td>
                              <td class="workshop-status-item twoPart"><span class="c2">${item.data9}</span></td>
                              <td class="workshop-status-item"><span class="c3">${item.data10}</span></td>
                          </tr>
                          <tr class="workshop-status-rows">
                              <td class="workshop-status-item"><span class="c1">Next1</span></td>
                              <td class="workshop-status-item twoPart"><span class="c2">${item.data11}</span></td>
                              <td class="workshop-status-item"><span class="c3">${item.data12}</span></td>
                          </tr>
                      </table>
                      <p class="workshop-title"><span>${item.title2}</span></p>
                      <table class="workshop-times table table-bordered">
                          <tr class="workshop-times-rows">
                              <td class="workshop-times-item threePart"><span class="c1">Processing Time</span></td>
                              <td class="workshop-times-item onePart"><span class="c3">${item.data13}</span></td>
                          </tr>
                          <tr class="workshop-times-rows">
                              <td class="workshop-times-item threePart"><span class="c1">Standby Time</span></td>
                              <td class="workshop-times-item onePart"><span class="c2">${item.data14}</span></td>
                          </tr>
                          <tr class="workshop-times-rows">
                              <td class="workshop-times-item threePart"><span class="c1">Standard Capacity</span></td>
                              <td class="workshop-times-item onePart"><span class="c2">${item.data15}</span></td>
                          </tr>
                      </table>
                  </div>
              </div>
          </div>
      </div>`
    });
    return _modalTemp;
  }
  for (let i = 0; i < _list.length; i++) {
    let _itemModalTemp = _itemModal(_list[i]);
    _temp += `<div class="carousel-item ${i == 0 ? 'active' : ''}">
                <div class="row">
                  ${_itemModalTemp}
                </div>
              </div>`;
  }
  $('#myCarousel .carousel-inner').html(_temp);
  $('#myCarousel').carousel()
  var _chartInstances = $('.chart-instance');
  $.map(_chartInstances, function (item) {
    initRate(item, $(item).parent().data('value'));
  });
}
$(function () {
  initList();
  $(window).resize(function () {
    initList();
  });
  $('#date').text(getDate());
  var timeInterval = setInterval(function () {
    location.reload();
  }, 60000 * 2);
});
