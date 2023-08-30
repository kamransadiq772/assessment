const { expect } = require("chai");
const rewire = require("rewire");
const request = require('supertest');
const messages = require("../resMsgs/messages");
const User = require("../model");
const EProviderType = require("../enums/providerType");
const ERoles = require("../enums/role");

describe('Signup /signup', () => {
    before(async () => {
        app = rewire('../../../app');
        User.deleteMany({}).then((done) => done());
    });
    let signUpWebData;
    let signUpGoogleData
    beforeEach(() => {
        signUpWebData = { 
            email: "usman@gmail.com",     
            password: "12345678",
            role: ERoles.USER,
            providerType: EProviderType.WEB,
        }
        signUpGoogleData = {
            providerType: EProviderType.GOOGLE,
            providerId: "123",
            name: "Usman"
        }
    })
    
    it('should sign up successfully',  (done)=> {
        request(app)
        .post('/user/sign_up')
        .send(signUpWebData)
        .expect(201)
        .end(( err,response) => {
            expect(response.body).to.have.property('message').to.equal(messages.accountCreation);
            expect(response.body).to.have.property('data').to.have.property('email').to.equal(signUpWebData.email)
            if(err) done(err)
            done()
      });
    });

    it('should retrun email already exists', (done) => {
        request(app)
        .post('/user/sign_up')
        .send(signUpWebData)
        .expect(409)
        .end((err,response) => {
            expect(response.body).to.have.property('message').to.equal(messages.accountExists);
            if(err) done(err)
            done()
      });
    });

    it('should sign up using google', (done) => {
        request(app)
        .post('/user/sign_up')
        .send(signUpGoogleData)
        .expect(201)
        .end((err,response) => {
            expect(response.body).to.have.property('message').to.equal(messages.accountCreation);
            expect(response.body).to.have.property('data').to.have.property('providerId').to.equal(signUpGoogleData.providerId)
            expect(response.body).to.have.property('data').to.have.property('providerType').to.equal(signUpGoogleData.providerType)
            if(err) done(err)
            done()
      });
    });
});