var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required !'},
    featured: {type: Boolean, required: '{PATH} is required !'},
    published: {type: Date, required: '{PATH}  is required !'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Course.create({title: 'Java for beginners', featured: true, published: new Date('12/6/2014'), tags: ['Java']});
            Course.create({title: 'Programming in C#', featured: true, published: new Date('3/5/2015'), tags: ['C#']});
            Course.create({title: 'Beginning iOS apps development', featured: false, published: new Date('5/5/2013'), tags: ['iOS']});
            Course.create({title: 'JavaScript design patterns', featured: false, published: new Date('8/1/2015'), tags: ['JS']});
            
        }
    })
}

exports.createDefaultCourses = createDefaultCourses;