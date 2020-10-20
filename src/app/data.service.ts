import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPipelines() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  generateReportTable(detailedReport) {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getReport(pipelineId) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + pipelineId);
  }

  loadDetailedReport(path) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + path);
  }

  extractDetailedReport(testResults) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + testResults);
  }
  updateTestSuiteWiseResultsData(detailedReport) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + detailedReport);
  }
  AddTestSuiteWithTestCase(result, testSuiteJsonObj) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  AddTestCaseToTestSuite(index, result, testSuiteJsonObj) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  convertToTimeFormat(milliSeconds) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  convertToMilliSeconds(time) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  toggleSuite(id) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  getTestCaseStatusIcon(testCaseStatus) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  sortTable(n) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  AddSortTableIndicator(dir, tableHeader) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  filterTable() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }
  ExportToExcel() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/');
  }


}
