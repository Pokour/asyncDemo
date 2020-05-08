const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {console.log('Connected to Mongo DB...')})
    .catch( err => console.error('Hi UTSAV you could not connect to MOngoDB... => ' + err));

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: String,
        isPublished: Boolean
    });

    const Course = mongoose.model('Course', courseSchema);


    async function saveCourse(){
        const course = new Course({
            name: 'Angular Course',
            author: 'Utsav',
            tag: ['angular','frontend'],
            isPublished: true
        });
    
        const result = await course.save();
        console.log(result);
    };

    // eq (equal)
    // ne (not equal)
    // gt (greater that)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin (not in)

    async function getCourses() {
        const course = await Course.find({author:'Utsav'});
        console.log(course);
    }

    getCourses();
    