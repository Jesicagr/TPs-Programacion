import java.util.List;

public class ProductoController {
    @RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {
    @Autowired
    private ProductoRepository repository;

    @GetMapping
    public List<Producto> listar() {
        return repository.findAll();
    }
}
}
