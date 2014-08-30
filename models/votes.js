var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 
var VotesSchema = new Schema({
  count: { type: Number, default: 0 },
  reward: { type: Number, default: 0 },
  vote: { type: Number, default: 0 },
});

module.exports = mongoose.model('Votes', VotesSchema);