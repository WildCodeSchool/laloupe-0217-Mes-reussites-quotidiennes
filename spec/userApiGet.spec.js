const assert = require('assert');
const request = require('supertest');

let app = "http://localhost:3000",
    user,
    user_token;

describe('API USER', function() {

  it('should get all users', function(done) {
    request(app)
      .get('/users')
      // .send({
      //   firstname: 'saddam',
      //   lastname: 'husseyn',
      //   city: 'Bagdad',
      //   session: 007,
      //   email: "user@mail.fr",
      //   password: 'azerty',
      //   isAdmin: true
      // })
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        user = res.body.user;
        user_token = res.body.token;
        assert.equal(res.body.user.email, "user@mail.fr");
        done();
      });
  });

  // it('admin should auto delete', function(done) {
  //   request(app)
  //     .delete('/users/' + user._id)
  //     .set('Authorization', user_token)
  //     .expect(200, done);
  // });

});
