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
  createUid: String,
  createDate: Date,
  updateUid: String,
  updateDate: Date,
}, {timestamps: true});

// ref: http://stackoverflow.com/questions/30743565/how-to-save-userid-in-mongoose-hook
SongSchema.virtual('uid').set(function (userId) {
  //if (this.isNew()) {
  if(!this.createUid) {
    this.createUid = this.updateUid = userId;
  } else {
    this.updateUid = userId;
  }
});

/*
SongSchema.pre('save', function(next){
  var userId = req.session.user
  this.updateUid = now;
  if ( !this.createUid ) {
    this.createUid = now;
  }
  next();
});
*/

module.exports = mongoose.model('Song', SongSchema);
