public @RestController
@RequestMapping("/api/validators")
public class ValidationController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/check-unique")
    public ResponseEntity<Boolean> checkUnique(
        @RequestParam String field,
        @RequestParam String value
    ) {
        boolean isTaken = false;
        
        if ("username".equals(field)) {
            isTaken = userRepository.existsByUsername(value);
        } else if ("email".equals(field)) {
            isTaken = userRepository.existsByEmail(value);
        }
      
        return ResponseEntity.ok(isTaken);
    }
} {
    
}
