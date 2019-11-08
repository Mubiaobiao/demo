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

function initBarLine(instance) {
  var dom = instance,
    myChart = echarts.init(dom),
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    lj = months.map(() => Math.floor(Math.random() * 1000)),
    xm = months.map(() => Math.floor(Math.random() * 1000)),
    option = {
      color: ['#00adef', '#66cc9a'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
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
        data: months
      },
      yAxis: [{
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
      }, {
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
      }],
      series: [{
        name: '新模',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideTop'
          }
        },
        barWidth: 45,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: xm
      },
      {
        name: '零件',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideTop'
          }
        },
        barWidth: 45,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: lj
      },
      {
        name: 'New Order',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        yAxisIndex: 1,
        itemStyle: {
          color: '#fff'
        },
        symbol: 'circle',
        symbolSize: 12,
        data: months.map((item, index) => lj[index] + xm[index])
      }
      ]
    };
  myChart.setOption(option, true);
  myChart.on('click', function (param) {
    if (param.seriesType === 'line') {
      let _dom = $(dom).parents('.col-xl-8').next().find('.chart-pie')[0];
      initPie(_dom);
    }
  });
  $(window).bind('resize', function () {
    myChart.resize();
  });
}

function initPie(instance) {
  var dom = instance,
    myChart = echarts.init(dom),
    option = {
      color: ['#00adef', '#66cc9a'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'horizontal',
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 14,
        borderRadius: 3,
        top: 15,
        right: 25,
        textStyle: {
          color: '#fff'
        },
        data: ['新模', '零件']
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '55%'],
          data: [
            { value: Math.floor(Math.random() * 100), name: '新模' },
            { value: Math.floor(Math.random() * 100), name: '零件' }
          ],
          label: {
            normal: {
              color: '#fff'
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  myChart.setOption(option, true);
  $(window).bind('resize', function () {
    myChart.resize();
  });
}

function valincome(a, b, f) {
  if (f == null) {
    f = "rgba(0,0,0,0)";
  }
  return {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [{
      label: "",
      borderColor: a,
      borderWidth: 0,
      hitRadius: 30,
      pointRadius: 0,
      pointHoverRadius: 4,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
      pointBorderColor: a,
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
      fill: true,
      backgroundColor: Chart.helpers.color(f).alpha(1).rgbString(),
      data: b,
    }]
  };
}

function valincomebuildoption() {
  return {
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false
    },
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        ticks: {
          min: 1,
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 0,
        top: 15,
        bottom: 0
      }
    }
  };
}

$(function () {
  $('#date').text(getDate());
  $("#startTime,#endTime").dateDropper({
    lang: 'zh',
    format: 'Y-m'
  });
  $.map($('.chart-bar-line'), function (item) {
    initBarLine(item);
  });
  var ctx = document.getElementById('update-chart-1').getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: valincome('#fff', [25, 30, 20, 15, 20], '#fff'),
    options: valincomebuildoption(),
  });
  var ctx = document.getElementById('update-chart-2').getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: valincome('#fff', [10, 30, 20, 15, 30], '#fff'),
    options: valincomebuildoption(),
  });
  var ctx = document.getElementById('update-chart-3').getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: valincome('#fff', [25, 10, 20, 15, 20], '#fff'),
    options: valincomebuildoption(),
  });
  var ctx = document.getElementById('update-chart-4').getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: valincome('#fff', [25, 30, 20, 15, 10], '#fff'),
    options: valincomebuildoption(),
  });
  function swapDom(dom1, dom2) {
    let tempDiv = document.createElement('div')
    dom1.parentNode.insertBefore(tempDiv, dom1)
    dom2.parentNode.insertBefore(dom1, dom2)
    tempDiv.parentNode.insertBefore(dom2, tempDiv)
    tempDiv.parentNode.removeChild(tempDiv)
  }
  $('.update-card').bind('click', function () {
    let _id = $(this).data('id'),
      _firstChart = $('.chartBox .row:eq(0)');
    swapDom(_firstChart[0], $('#' + _id)[0]);
  });
});
