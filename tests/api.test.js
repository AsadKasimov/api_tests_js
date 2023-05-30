const axios = require('axios');
const { usersSchema } = require('../schema/user.js');
const { userLogin, userPost, userPut } = require('../models/userM.js');


describe('reqres.in rest api tests', () => {
  const BASE_URL = 'https://reqres.in/api/';

  test('Get users', async () => {
    const url = `${BASE_URL}users?page=2`;

    const response = await axios.get(url);
    console.log(response.data);
    expect(response.status).toBe(200);
    const validationResult = usersSchema.validate(response)

    expect(validationResult.error).toBeDefined()

    
  })



  test('Get pages', async () => {
    const url = `${BASE_URL}users?page=2`

    const response = await axios.get(url)
    const perPage = response.data.per_page
    const data = response.data.data

    expect(perPage).toBe(6)
    expect(data.length).toBe(6)

    const validationResult = usersSchema.validate(response)

    expect(validationResult.error).toBeDefined()
    
  })

  test('Post user', async () => {
    const url = `${BASE_URL}users`
    const userData = userPost()

    const response = await axios.post(url, userData)

    expect(response.status).toBe(201)
    expect(response.data.name).toBe('John')
    expect(response.data.age).toBe('25')
  })

  test('Put users', async () => {
    const url = `${BASE_URL}users/2`
    const userData = userPut()

    const response = await axios.put(url, userData)

    expect(response.status).toBe(200)
    expect(response.data.age).toBe('25')
  })

  test('Delete users', async () => {
    const url = `${BASE_URL}users/2`

    const response = await axios.delete(url)

    expect(response.status).toBe(204)
  })
})