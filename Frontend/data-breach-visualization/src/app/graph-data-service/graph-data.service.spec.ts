import { TestBed, inject } from '@angular/core/testing';

import { GraphDataService } from './graph-data.service';

describe('GraphDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphDataService]
    });
  });

  it('should be created', inject([GraphDataService], (service: GraphDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a data object for a pie chart when given a label list and data list', inject([GraphDataService], (service: GraphDataService) =>  {
    const labels = ['label1', 'label2', 'label3'];
    const data = [1,2,3];

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
    expect(service.getPieChartDataObject(labels, data)).toEqual(dataObject);
  }));

  it('should get a data object for a radar chart when given a title,label list, and data list', inject([GraphDataService], (service: GraphDataService) =>  {
    const labels = ['label1', 'label2', 'label3'];
    const data = [1,2,3];
    const title = "title";

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
    expect(service.getRadarChartDataObject(title, labels, data)).toEqual(dataObject);
  }));

  it('should get a data object for a line chart when given a title,label list, and data list', inject([GraphDataService], (service: GraphDataService) =>  {
    const labels = ['label1', 'label2', 'label3'];
    const data = [1,2,3];
    const title = "title";

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

    expect(service.getlineChartDataObject(title, labels, data)).toEqual(dataObject);
  }));

  it('should get legend option object to display on the left ', inject([GraphDataService], (service: GraphDataService) =>  {
    const object = {
      legend: {
        position: 'left',
        maintainAspectRatio: false,
        responsive: true,

      }
    }
    expect(service.getLegendPositionLeftOption()).toEqual(object);
  }));
});
