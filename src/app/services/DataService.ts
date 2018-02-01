import { Observable } from 'rxjs/Observable';

export abstract class DataService {
  public abstract getUserData(): Observable<any>;
}
