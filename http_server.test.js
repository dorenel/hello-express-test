const supertest = require('supertest');
const app = require('./http_server');
const request = supertest(app);

it('hello', async () => {
    const data = await request.get('/hello');
    expect(data.text).toBe('Hello World');
});

var server = app.listen(3000, () => {
    console.log("Listening on port 3000...");
});

afterAll(done => {
    server.close();
    done();
});