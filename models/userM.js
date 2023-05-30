function userLogin() {
    const data = {
      Email: 'test@qa.guru.com',
      Password: '123456',
    };
    return data;
}
  
function userPost() {
    const data = {
      name: 'John',
      age: '25',
    };
    return data;
}
  
function userPut() {
    const data = {
      name: 'morpheus',
      job: 'zion resident',
      age: '25',
    };
    return data;
}
  
module.exports = {
    userLogin,
    userPost,
    userPut,
};
  