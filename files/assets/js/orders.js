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

function initBarLine(instance, xData, data) {
  var dom = instance,
    myChart = echarts.init(dom),
    option = {
      title: {
        text: data.title,
        textStyle: {
          color: '#fff',
          fontSize: 24
        },
        top: 20,
        left: 80
      },
      color: data.color,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: 80,
        bottom: 50
      },
      legend: {
        show: true,
        right: 20,
        top: 20,
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
        triggerEvent: true,
        data: xData
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
        }
      }],
      series: [{
        name: 'New Mold',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            color: '#fff',
            position: 'insideBottom'
          }
        },
        barWidth: 45,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        yAxisIndex: 0,
        data: data.newMold
      },
      {
        name: 'Parts',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            color: '#fff',
            position: 'insideTop'
          }
        },
        yAxisIndex: 0,
        barWidth: 45,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: data.parts
      },
      {
        name: 'All',
        type: 'line',
        label: {
          normal: {
            show: true
          }
        },
        smooth: true,
        yAxisIndex: 0,
        itemStyle: {
          color: '#fff'
        },
        symbol: 'circle',
        symbolSize: 12,
        data: data.all
      }]
    };
  myChart.setOption(option, true);
  myChart.on('mouseover', function (param) {
    let _index = xData.indexOf(param.name);
    let _dom = $(dom).parents('.col-xl-8').next().find('.chart-pie')[0];
    initPie(_dom, { newMold: data.newMold[_index], parts: data.parts[_index], color: data.color });
  });
  $(window).bind('resize', function () {
    myChart.resize();
  });
  initPie($(dom).parents('.col-xl-8').next().find('.chart-pie')[0], { newMold: data.newMold[0], parts: data.parts[0], color:data.color });
}

function initPie(instance, data) {
  var dom = instance,
    myChart = echarts.init(dom),
    option = {
      color: data.color,
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
        data: ['New Mold', 'Parts']
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '55%'],
          data: [
            { value: data.newMold, name: 'New Mold' },
            { value: data.parts, name: 'Parts' }
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
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    _dataList = [],
    _newMold = 0,
    _parts = 0,
    _color = [['#169eff','#9dd7ff'],['#4894fa','#2cf5e0'],['#fd7388','#fed1a4'],['#6a67f6','#ee9ae5']],
    _chartList = ['New Order', 'Plan Delivery', 'Actual Delivery', 'Delivery on time rate'];
  for (let i = 0; i < _chartList.length; i++) {
    _newMold = months.map(item => Math.floor(Math.random() * 1000));
    _parts = months.map(item => Math.floor(Math.random() * 1000));
    _dataList.push({
      title: _chartList[i],
      newMold: _newMold,
      parts: _parts,
      color:_color[i],
      all: months.map((item, index) => _newMold[index] + _parts[index])
    });
  }
  $.map($('.chart-bar-line'), function (item, index) {
    console.log(_dataList[index]);
    initBarLine(item, months, _dataList[index]);
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
