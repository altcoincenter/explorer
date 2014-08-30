var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var StatsSchema = new Schema({
  coin: { type: String },
  count: { type: Number, default: 0 },
  difficulty: { type: String, default: 'N/A' },
  hashrate: { type: String, default: 'N/A' },
  timestamp: { type: Number, default: 0 },
  size: { type: Number, default: 0 },
  transactions: { type: Array },
  tx_count: { type: Number, default: 0 },
  sent: { type: String, default: 'N/A' },
  connections: { type: Number, default: 0 },
  vote: { type: Number, default: 0 },
  reward: { type: Number, default: 0 },
  supply: { type: Number, default: 0 },
  cap: { type: Number, default: 0 },
  votes: { type: Array },
  estnext: { type: Number, default: 0 },
  phase: { type: String, default:  'N/A'},
  maxvote: { type: Number, default: 0 },
  nextin: { type: String, default: 'N/A'}
});

module.exports = mongoose.model('Stats', StatsSchema);