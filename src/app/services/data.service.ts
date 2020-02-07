import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Issue} from '../models/issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class DataService {
  // This will point to a stand-alone Spring Boot REST endpoint
 // private readonly API_URL = ;

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Almaceno temporalmente los datos del dialogo
  dialogData: any;

  // constructor (private httpClient: HttpClient, private _http: Http) {}

  constructor (private _http: Http) {}

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): any {
    // this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
    //     this.dataChange.next(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //   console.log (error.name + ' ' + error.message);
    //   });
  }

  getTest() {
    // console.log('API_URL' + environment.ApiUrl);
    return this._http.get('/api/getall')
       .map((res: Response) => res.json());
}

doSearch (issue: Issue): void {
  this.dialogData = issue;
  const requestId = this.dialogData['requestId'];
  const application = this.dialogData['application'];
  const component = this.dialogData['component'];
  const feature = this.dialogData['feature'];
  const isOn = this.dialogData['isOn'];
  const dataObject = {requestId: requestId, application: application, component: component,
    feature: feature,  isOn: isOn};
  console.log('Issue content:  ' + this.dialogData);
  // console.log(environment.ApiUrl);
  this._http.post('/api/search', dataObject).subscribe({
    // next: data => this.postId = data.id,
    error: error => console.error('There was an error!', error)
});

}

  // solo para demo, el API usado no admite modificaciones salvo que seamos desarrolldores de angular,
  // por lo que los metodos no hacen nada
  addIssue (issue: Issue): void {
    this.dialogData = issue;
    const requestId = this.dialogData['requestId'];
    const application = this.dialogData['application'];
    const component = this.dialogData['component'];
    const feature = this.dialogData['feature'];
    const isOn = this.dialogData['isOn'];
    const dataObject = {requestId: requestId, application: application, component: component,
      feature: feature,  isOn: isOn};
    console.log('Issue content:  ' + this.dialogData);
    // console.log(environment.ApiUrl);
    this._http.post('/api/addnew', dataObject).subscribe({
      // next: data => this.postId = data.id,
      error: error => console.error('There was an error!', error)
  });

  }

  updateIssue (issue: Issue): void {
    this.dialogData = issue;
    const id = this.dialogData['id'];
    const application = this.dialogData['application'];
    const component = this.dialogData['component'];
    const feature = this.dialogData['feature'];
    const isOn = this.dialogData['isOn']; 
    const dataObject = {id: id, application: application, component: component, feature: feature, isOn: isOn};
    // console.log('POST API_URL:   ' + environment.ApiUrl);
    // console.log('Issue content:  ' + this.dialogData);
    this._http.post('/api/addnew', dataObject).subscribe({
      error: error => console.error('There was an error!', error)
  });
  }

  deleteIssue (id: number): void {
    console.log(id);
  }
}



/* EJEMPLOS de metodos CRUD reales, atencion, los tipos no corresponden con los utilizados más arriba:

    // Create de [C]rud: ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Añadido con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // Update de cr[U]d UPDATE, PUT METHOD
    updateItem(kanbanItem: KanbanItem): void {
      this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Modificado con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // Delete de cru[D] DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Eliminado con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/
