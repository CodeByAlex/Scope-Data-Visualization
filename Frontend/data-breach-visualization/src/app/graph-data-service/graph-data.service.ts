import { Injectable } from '@angular/core';

@Injectable()
export class GraphDataService {

  constructor() { }

  getPieChartDataObject(labels: string [], data: number[]) {
    const dataObject = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            '#00B5DD',
            '#345065',
            '#ABCDCF',
            '#ff6384',
            '#FFCE56',
            '#00DEF2',
          ],
          hoverBackgroundColor: [
            '#00bfe7',
            '#3f5a6f',
            '#b5d7d9',
            '#ff6384',
            '#ffce56',
            '#00def2',
          ]
        }]
    }
    return dataObject;
  }

  getLegendPositionLeftOption() {
    const object = {
        legend: {
          position: 'left',
          maintainAspectRatio: false,
          responsive: true,

        }
    }
    return object;
  }

  getlineChartDataObject(title: string, labels: string [], data: number[]) {
    const dataObject = {
      labels: labels,
      datasets: [
        {
          label: title,
          data: data,
          fill: false,
          borderColor: '#ff6384'
        }
      ]
    }
    return dataObject;
  }

  getRadarChartDataObject(title: string, labels: string [], data: number[]) {
    const dataObject = {
      labels: labels,
      datasets: [
        {
          label: title,
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: '#00DEF2',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: data
        }
      ]
    };
    return dataObject;
  }

  getGeoChartDataObject(){
  const dataObject = {
      chartType:'GeoChart',
      dataTable:[
        ['country', 'Incidents'],
        ['United states', 400]
      ],
    };
  return dataObject;
  }
}
