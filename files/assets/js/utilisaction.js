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
      title: {
        text: data.title,
        textStyle: {
          color: '#fff',
          fontSize: 24
        },
        left: 80
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      color: ['#08cdaf','#ff7396','#eac55a'],
      legend: {
        show: true,
        right: 20,
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        type: 'category',
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
      },
      series: [{
        name: 'capacity',
        type: 'bar',
        label: {
          normal: {
            show: true,
            color: '#fff',
            position: 'insideBottom',
            align: 'left',
            verticalAlign: 'middle',
            rotate:90
          }
        },
        data: data.capacity
      }, {
        name: 'plan',
        type: 'bar',
        label: {
          normal: {
            show: true,
            color: '#fff',
            position: 'insideBottom',
            align: 'left',
            verticalAlign: 'middle',
            rotate:90
          }
        },
        data: data.plan
      }, {
        name: 'real',
        type: 'bar',
        label: {
          normal: {
            show: true,
            color: '#fff',
            position: 'insideBottom',
            align: 'left',
            verticalAlign: 'middle',
            rotate:90
          }
        },
        data: data.real
      },{
        name: 'capacity-line',
        type: 'line',
        label: {
          normal: {
            show: true
          }
        },
        smooth: true,
        itemStyle: {
          color: '#fff'
        },
        symbol: 'circle',
        symbolSize: 6,
        data: data.capacity
      }]
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

function coordYear() {
  var _firstYear = (new Date()).getFullYear() - 5,
    _years = [],
    _temp = '';
  for (let i = 0; i <= 10; i++) {
    _years.push({
      name: _firstYear + i + '年',
      value: _firstYear + i
    });
  }
  $.map(_years, function (item) {
    _temp += '<option value="' + item.value + '">' + item.name + '</option>';
  });
  $('#yearSelect').html(_temp);
}

$(function () {
  $('#date').text(getDate());
  coordYear();
  let xData = (function () {
    let _week = [];
    for (var i = 1; i <= 13; i++) {
      _week.push(i + '周');
    }
    return _week;
  })(),
    _dataList = [],
    _chartList = ['ALL', 'CNC', 'EDM', 'WEDM', 'Other'];
  for (let i = 0; i < _chartList.length; i++) {
    _dataList.push({
      title: _chartList[i],
      capacity: xData.map(item => Math.floor(Math.random() * 1000)),
      plan: xData.map(item => Math.floor(Math.random() * 1000)),
      real: xData.map(item => Math.floor(Math.random() * 1000))
    });
  }
  $.map($('.chart-utilisaction'), function (item, index) {
    initLine(item, xData, _dataList[index]);
  });
  $('.update-card').bind('click', function () {
    let _id = $(this).data('id'),
      _firstChart = $('.chartBox .card:eq(0)');
    swapDom(_firstChart[0], $('#' + _id)[0]);
  });
});
