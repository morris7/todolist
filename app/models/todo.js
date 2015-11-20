/**
 * Created by sam morris on 20/11/2015.
 */
    
// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    name : String,
    date: String,
    complete: Boolean
});