export class CustomValidators {
  static uniqueValue(service: UserService, field: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) return of(null);
      
      return timer(500).pipe( // Debounce de 500ms
        switchMap(() => service.checkUnique(field, control.value)),
        map(exists => (exists ? { [`${field}Taken`]: true } : null)),
        catchError(() => of(null)), 
        first()
      );
    };
  }
}