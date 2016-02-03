var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  name: String,
  status: {type: String, enum: ['Lyrics', 'Arragement', 'Publish', 'Done']},
  lyrics: String,
  descriptions: String,
  oldLyrics: [String],
  composer: String,
  lyricist: String,
  audioUrls: [String],
  videoUrls: [String],
  gatherings: [Number],
  composeDate: Date,
  lyricsDate: Date,
  arrangedDate: Date,
  createDate: Date,
  updateDate: Date,
});

module.exports = mongoose.model('Song', SongSchema);
