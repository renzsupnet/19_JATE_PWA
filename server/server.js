const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
  });
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
