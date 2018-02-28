import {TestBed, inject} from '@angular/core/testing';

import {ApiService} from './api.service';
import {
  BaseRequestOptions, Http, HttpModule, RequestMethod, RequestOptions, ResponseOptions
} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('ApiService', () => {
  beforeEach((done) => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpModule
        ],
        providers: [
          ApiService, MockBackend, BaseRequestOptions,
          {
            provide: Http,
            deps: [MockBackend, RequestOptions],
            useFactory: (mockBackend, requestOptions) => {
              return new Http(mockBackend, requestOptions);
            }
          }
        ]
      })
      .compileComponents()
      .then(done);
  });


  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('incidents', () => {

    beforeEach(inject([MockBackend], (mockBackend: MockBackend) => {

      this.spyConnection = jasmine.createSpy('breach-data/incident-info');

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions(this.spyConnection({
          body: connection.request.text(),
          method: connection.request.method,
          url: connection.request.url
        }))));
      });

    }));

    it('should get all incident information', inject([ApiService], (service: ApiService) => {
      this.spyConnection.and.returnValue({
        body: `{[{}]}`,
        status: 200
      });
      service.getAllIncidents();
      expect(this.spyConnection).toHaveBeenCalledTimes(1);
      expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Get);
      expect(this.spyConnection.calls.argsFor(0)[0].url).toEqual('http://localhost:8080/breach-data/incident-info');

    }));

    it('should get incident year range information', inject([ApiService], (service: ApiService) => {
      this.spyConnection.and.returnValue({
        body: `{[{}]}`,
        status: 200
      });
      service.getIncidentYearRange();
      expect(this.spyConnection).toHaveBeenCalledTimes(1);
      expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Get);
      expect(this.spyConnection.calls.argsFor(0)[0].url).toEqual('http://localhost:8080/breach-data/incident-info/year-range');
    }));

    it('should get incident info by org id', inject([ApiService], (service: ApiService) => {
      this.spyConnection.and.returnValue({
        body: `{[{}]}`,
        status: 200
      });
      service.getIncidentsByOrgId(1);
      expect(this.spyConnection).toHaveBeenCalledTimes(1);
      expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Get);
      console.log(this.spyConnection.calls.argsFor(0)[0].url)
      expect(this.spyConnection.calls.argsFor(0)[0].url).toEqual('http://localhost:8080/breach-data/incident-info/by-org-id?org_id=1');
    }));
  });


  describe('actors', () => {

    beforeEach(inject([MockBackend], (mockBackend: MockBackend) => {

      this.spyConnection = jasmine.createSpy('breach-data/actor-info');

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions(this.spyConnection({
          body: connection.request.text(),
          method: connection.request.method,
          url: connection.request.url
        }))));
      });

    }));

    it('should get all incident information', inject([ApiService], (service: ApiService) => {
      this.spyConnection.and.returnValue({
        body: `{[{}]}`,
        status: 200
      });
      service.getAllActors();
      expect(this.spyConnection).toHaveBeenCalledTimes(1);
      expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Get);
      expect(this.spyConnection.calls.argsFor(0)[0].url).toEqual('http://localhost:8080/breach-data/actor-info');

    }));
  });


  describe('org', () => {

    beforeEach(inject([MockBackend], (mockBackend: MockBackend) => {

      this.spyConnection = jasmine.createSpy('breach-data/org-info');

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions(this.spyConnection({
          body: connection.request.text(),
          method: connection.request.method,
          url: connection.request.url
        }))));
      });

    }));

    it('should get all org information', inject([ApiService], (service: ApiService) => {
      this.spyConnection.and.returnValue({
        body: `{[{}]}`,
        status: 200
      });
      service.getAllOrgs();
      expect(this.spyConnection).toHaveBeenCalledTimes(1);
      expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Get);
      expect(this.spyConnection.calls.argsFor(0)[0].url).toEqual('http://localhost:8080/breach-data/org-info');

    }));
  });

});
