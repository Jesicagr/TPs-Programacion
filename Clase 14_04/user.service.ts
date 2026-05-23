@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/validators';
  constructor(private http: HttpClient) {}

  checkUnique(field: string, value: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.API_URL}/check-unique?field=${field}&value=${value}`);
  }
}