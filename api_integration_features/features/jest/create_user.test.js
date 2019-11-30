import 'jest'
import { create_user, get_user, delete_user } from '../../support/users_api_helper'

describe('Create User', function () {

  describe('given valid user data, the api successfully creates a user', function () {
    const response = undefined;
    const new_user_data = {}

    beforeAll(async () => {
      response = await create_user(new_user_data);
    });
    test('api response is defined', () => { expect(response).toBeDefined()})
    test('api response has 200 status', () => { expect(response.status).toEqual(200)})
    test('api response data has Id property', () => { expect(response.data.Id).toBeDefined()})
    test('database contains the new user data', async () => {
      const new_user = await get_user(response.data.Id)
      expect(new_user.data).toEqual(new_user_data)
    })

    afterAll(async () => {
      await delete_user(response.data.Id)
    });
  })
})