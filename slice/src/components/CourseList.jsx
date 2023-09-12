import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {


    const dispatch = useDispatch()

    const { courses } = useSelector(({ courses: { data, searchTerm } }) => {
        // return state.courses.data;
        const filteredCourses = data.filter((course) =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase()));

        return {
            courses: filteredCourses
        }
    })

    const renderedCourses = courses.map((course) => (
        <div className="panel" key={course.id}>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <p>{Number(course.cost).toLocaleString('TR')} TL</p>
            <button className="button is-danger" onClick={() => dispatch(removeCourse(course.id))}>Sil</button>
        </div>
    ))


    return (
        <div className="courseList">
            {renderedCourses}
        </div>
    )
}

export default CourseList