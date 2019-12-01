const express = require('express');

const app = express();

app.get('/api/custumers', (req, res) => {
  const custumers = [
    { id: 1, firstname: 'John', lastname: 'Doe' },
    { id: 2, firstname: 'Steve', lastname: 'Danvers' },
    { id: 3, firstname: 'Mary', lastname: 'Johnson' }
  ];

  res.json(custumers);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
