import Chai from 'chai'
import ChaiHTTP  from 'chai-http'
import { response } from 'express'
import { describe, it as test } from 'mocha'
import StatusCode from '../configuration/StatusCode.js'
import app from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const userId ='5fae5e0497a0d930cca53c17'
const user = {
  username: randomString,
  password: randomString,
}

const testingNonExistentRoute = () => {
    describe('Testing a route that does not exist', () => {
      test('Expecting 404 not found', (done) => {
        Chai.request(app)
        .get('/randomURL') 
        .end((request, response) => {
          response.should.have.a.status(404)
          done()
        })
      })
    })
}

const createUser = () => {
  describe('Testing CREATE(POST) method for user entity', () => {
    test('Expecting a user to be creat', (done) => {
      Chai.request(app)
        .post('/user')
        .send(user)
        .end((error, response) => {
          response.should.have.a.status(StatusCode.CREATED)
          response.body.should.be.a('object')
          response.body.should.have.property('username').eq(user.username)
          response.body.should.have.property('password').eq(user.password)
          done()
        })
    })
  })
}

const getAllUsers = () => {
	describe('Fetching all users(GET)', () => {
		test('Expecting to return all the users', (done) => {
			Chai.request(app)
				.get('/user')
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					response.body.should.be.a('array')
					response.body.length.should.be.eq(response.body.length)
					done()
				})
		})
	})
}

const updateUser = () => {
	describe('Updating(PUT) a user in the database', () => {
		test('Expecting a user to be updated', (done) => {
			Chai.request(app)
				.put(`/user/${userId}`)
				.send(user)
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					response.body.should.be.a('object')
					response.body.should.have.property('_id').eq(userId)
					response.body.should.have.property('username').eq(user.username)
					response.body.should.have.property('password').eq(user.password)
					done()
				})
		})
	})
}

const deleteUser = () => {
	describe('Deleting(DELETE) a user in the database', () => {
		test('Expecting a user to be deleted', (done) => {
			Chai.request(app)
				.delete(`/user/${userId}`)
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					done()
				})
		})
	})
}

describe('TESTING THE USER_API ROUTE', () => {
  testingNonExistentRoute()
  createUser()
  getAllUsers()
  updateUser()
  deleteUser()
})
