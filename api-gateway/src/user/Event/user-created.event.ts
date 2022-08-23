export class UserCreatedEvent {
  constructor(
    public readonly name: string,
    public readonly email: string,
    private readonly password: string,
    public readonly age: number,
    public readonly photo?: string,
  ) {}

  toString() {
    const JSONToString = JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password,
      age: this.age,
      photo: this.photo,
    });

    return JSONToString;
  }
}
