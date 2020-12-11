export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: Promise<string>;
}
