const userSecret = Symbol("userSecret");
const users = [];

function registerUser(name, email) {
  const newUser = {
    name,
    email,
    [userSecret]: Symbol('secret')
  };
  users.push(newUser);
  return newUser;
};

function authUser(user, secret) {
  return user[userSecret] === secret
}

const user01 = registerUser('weslley', 'weslley@hotmail.com');
console.log(`${user01.name} está autenticado? ${authUser(user01, user01[userSecret])}`); // weslley está autenticado? true

const fakeToken = Symbol('fakeToken')
console.log(`${user01.name} está autenticado? ${authUser(user01, fakeToken)}`); // weslley está autenticado? false