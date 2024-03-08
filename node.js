
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/university', { useNewUrlParser: true, useUnifiedTopology: true });
// Схема Course
const CourseSchema = new mongoose.Schema({
  course_id: Number,
  stud_count: Number,
  teach_count: Number,
  course_name: String,
  
});

// Схема Student
const StudentSchema = new mongoose.Schema({
  course_id: Number,
  user_id: Number,
  awg_grade: Number,
  user_name: String,
  user_status: String
});

// Схема Teacher
const TeacherSchema = new mongoose.Schema({
  course_id: Number,
  user_id: Number,
  rank: String,
  user_name: String,
  user_status: String
});

// Моделі
const Course = mongoose.model('Course', CourseSchema);
const Student = mongoose.model('Student', StudentSchema);
const Teacher = mongoose.model('Teacher', TeacherSchema);



    async function createCourse() {
        const course1 = await Course.create({ course_id: 1, stud_count: 30, teach_count: 2, course_name: 'Math'});
        console.log('New course:', course1);
        const course2= await Course.create({ course_id: 2, stud_count: 33, teach_count: 1, course_name: 'Geo'});
        console.log('New course:', course2);
        const course3 = await Course.create({ course_id: 3, stud_count: 31, teach_count: 3, course_name: 'PE'});
        console.log('New course:', course3);
    }
    async function readCourse() {
        try {
            const courses = await Course.find({ course_id: 2 });
            console.log('знайдено: ',courses);
        } catch (error) {
            console.error('Помилка при читанні курсу:', error);
        }
    }
    
    async function updateCourse() {
        try {
            const course_edit = await Course.updateOne({ course_id: 1 }, { course_name: 'Physics' });
            console.log('Updated course:', course_edit);
        } catch (error) {
            console.error('Помилка при оновленні курсу:', error);
        }
    }
    
    async function deleteCourse() {
        try {
            const course_del = await Course.deleteOne({ course_id: 3 });
            console.log('Deleted course:', course_del);
        } catch (error) {
            console.error('Помилка при видаленні курсу:', error);
        }
    }
    createCourse();
    readCourse();
    updateCourse();
    deleteCourse();