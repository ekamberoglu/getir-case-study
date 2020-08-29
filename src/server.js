const app = require('./app');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Getir-Case-Study app listening on port ${process.env.PORT || 3000}`);
});
