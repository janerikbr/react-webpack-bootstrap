import app from './app';

delete process.env.BROWSER;

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port); // eslint-disable-line no-console
});
