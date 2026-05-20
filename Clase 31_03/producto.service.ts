@Injectable({ providedIn: 'root' })
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos';
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}