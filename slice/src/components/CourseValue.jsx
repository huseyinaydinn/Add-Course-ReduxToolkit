import React from 'react'
import { useSelector } from "react-redux"

function CourseValue() {
    const totalCost = useSelector(({ courses: { data, searchTerm } }) => {
        // return state.courses.data;
        const filteredCourses = data.filter((course) =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase()));

        let cost = 0;
        for (let course of filteredCourses) {
            cost += course.cost
        }
        return cost;
    });


    return (
        <>
            <hr />
            <div className="totalWrapper">

                <p className="total-text">Toplam Tutar: <span className="total-cost">{Number(totalCost).toLocaleString('TR')} TL</span></p>
            </div>
        </>

    )
}

export default CourseValue