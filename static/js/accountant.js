
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Item Name');
      data.addColumn('number', 'Price');
      data.addColumn('number', 'Quantity');
      data.addColumn('number', 'Save');
      /*
      var reqdata = JSON.parse("transactionsData|safe");
      var i = 0;
      alert(reqdata);
      for(i=0; i < reqdata.name.length; i++){
        data.addRows([reqdata['name'][i], reqdata['price'][i], reqdata['quantity'][i], reqdata['save'][i]])
      }
      */
      data.addRows([
        ['a', 1, .25, 0],
        ['b',2, .5, 0],
        ['c', 3, 1, 2],
        ['d', 4, 2.25, 5],
        ['e', 5, 2.25, 1],
        ['f', 6, 3, 2],
        ['g', 7, 4, 5],
      ]);


      var options = {
        title: 'Previous Day Transaction',
        focusTarget: 'category',
        hAxis: {
          title: 'Item names',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          },
          textStyle: {
            fontSize: 14,
            color: '#053061',
            bold: true,
            italic: false
          },
          titleTextStyle: {
            fontSize: 18,
            color: '#053061',
            bold: true,
            italic: false
          }
        },
        vAxis: {
          title: 'Rupees',
          textStyle: {
            fontSize: 18,
            color: '#67001f',
            bold: false,
            italic: false
          },
          titleTextStyle: {
            fontSize: 18,
            color: '#67001f',
            bold: true,
            italic: false
          }
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }