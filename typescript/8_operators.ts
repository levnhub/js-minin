interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
// key = 'nick'; // not allowed type

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

// Exclude types

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>; // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>; // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name';
// u1 = '_id' // not allowed
