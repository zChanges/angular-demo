import { Component, OnInit } from '@angular/core';
import { DataSet } from "@antv/data-set";

@Component({
  selector: 'app-lineChart',
  templateUrl: './lineChart.component.html',
  styleUrls: ['./lineChart.component.scss']
})
export class LineChartComponent implements OnInit {

  sourceData = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 },
  ];
  dv = new DataSet.View().source(this.sourceData);
  data

  TData = {
    xAxis:'month',
    month: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yAxis:['ie','chrome'],
    series:[{ie:[1,2,3,4,5,6,7]},{chrome:[1,2,3,4,5,6,7]}]
    
  }
  constructor() {
    this.dv.transform({
      type: 'fold',
      fields: ['Tokyo', 'London'],
      key: 'city',
      value: 'temperature',
    });
    this.data = this.dv.rows;

    DataSet.registerConnector('transData', (data, options = {}) => {
      const Ndata = [];
      data[data.xAxis].forEach(item => {
        var aa = data.xAxis;
          Ndata.push({ [data.xAxis] : item })
      });
      return 
    });

    new DataSet.View().source(this.TData, {
      type: 'transData'
    });


  }
  


  ngOnInit() {
  }

}
