ngOnInit(): void {
  this.registroForm = this.fb.group({
    username: ['', [Validators.required], [CustomValidators.uniqueValue(this.userService, 'username')]]
  });
}