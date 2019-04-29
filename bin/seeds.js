const mongoose = require('mongoose');
const Celebraty = require('../models/celebraties');

const dbName = 'movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebraties = [
  {
    name: 'Michael Scott',
    occupation: 'Office Manager',
    catchPhrase: 'That\' s what she said'

  },
  {
    name: 'Justin Bieber',
    occupation: 'being amazing',
    catchPhrase: 'baby'

  },
  {
    name: 'britney spears',
    occupation: 'singer',
    catchPhrase: 'hit me baby one more time'
  }
]

Celebraty.create(celebraties, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebraties.length} celebraties`)
  mongoose.connection.close();
});