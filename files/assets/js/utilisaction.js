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

function initLine(instance, title, barColor, ) {
  var dom = instance,
    myChart = echarts.init(dom),
    xData = (function () {
      let _week = [];
      for (var i = 1; i <= 13; i++) {
        _week.push(i + '周');
      }
      return _week;
    })(),
    option = {
      title: {
        text: title,
        textStyle: {
          color: '#fff',
          fontSize: 24
        },
        left: 80
      },
      color: [barColor],
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
        name: 'utiliscation',
        type: 'bar',
        barWidth: 45,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: xData.map(() => Math.floor(Math.random() * 1000))
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
  var _colorList = ['#2c7be5', '#2c7be5', '#2c7be5', '#2c7be5', '#2c7be5'];
  $.map($('.chart-utilisaction'), function (item, index) {
    initLine(item, $(item).parent().attr('id'), _colorList[index]);
  });
  $('.update-card').bind('click', function () {
    let _id = $(this).data('id'),
      _firstChart = $('.chartBox .card:eq(0)');
    swapDom(_firstChart[0], $('#' + _id)[0]);
  });
});
