const mongoose = require('mongoose');
// @ts-ignore
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String, maxLength: 255},
  description: {type: String, maxLength: 600},
  image: {type: String, maxLength: 255},
  videoId: {type: String, maxLength: 255},
  level: {type: String, maxLength: 255},
  slug: {type: String, slug: 'name', unique: true}
},
{
    timestamps: true
});

// Add plugins
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {overrideMethods: true,
                               deletedAt: true 
})

module.exports = mongoose.model('Course', Course)