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

function initLine(instance, xData, data) {
  var dom = instance,
    myChart = echarts.init(dom),
    option = {
      grid: {
        top: 80
      },
      title: {
        text: data.title,
        textStyle: {
          color: '#fff',
          fontSize: 24
        },
        left: 80
      },
      legend: {
        show: true,
        right: 30,
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: '#fff',
        },
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        data: xData
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        boundaryGap: [0, '100%']
      },
      dataZoom: [ {
        start: 0,
        end: 10,
        textStyle: {
          color: '#fff'
        }
      }],
      series: [
        {
          name: 'deliveries',
          type: 'line',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            color: data.color
          },
          areaStyle: {
            normal: {
              color: data.color
            }
          },
          data: data.data
        }
      ]
    };
  myChart.setOption(option, true);
  $(window).bind('resize', function () {
    myChart.resize();
  });
}

function swapDom(dom1, dom2) {
  let tempDiv = document.createElement('div')
  dom1.parentNode.insertBefore(tempDiv, dom1)
  dom2.parentNode.insertBefore(dom1, dom2)
  tempDiv.parentNode.insertBefore(dom2, tempDiv)
  tempDiv.parentNode.removeChild(tempDiv)
}

$(function () {
  $('#date').text(getDate());
  $("#startTime,#endTime").dateDropper({
    lang: 'zh',
    format: 'Y-m'
  });
  let xData = (function () {
      let _year = [];
      for (var i = 1960; i <= (new Date()).getFullYear(); i++) {
        _year.push(i + '年');
      }
      return _year;
    })(),
    _dataList = [],
    _colorList = ['#00c2c4', '#f3a888', '#13df95', '#ee8593', '#00cace'],
    _chartList = ['ALL', 'CNC', 'EDM', 'WEDM','Other'];
  for (let i = 0; i < _chartList.length; i++) {
    _dataList.push({
      title: _chartList[i],
      data: xData.map(item => Math.floor(Math.random() * 1000)),
      color: _colorList[i]
    });
  }
  $.map($('.chart-deliveries'), function (item, index) {
    initLine(item, xData, _dataList[index]);
  });
  $('.update-card').bind('click', function () {
    let _id = $(this).data('id'),
      _firstChart = $('.chartBox .card:eq(0)');
    swapDom(_firstChart[0], $('#' + _id)[0]);
  });
});
