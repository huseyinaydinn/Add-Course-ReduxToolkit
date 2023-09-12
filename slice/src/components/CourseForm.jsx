import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCost, changeDescription, changeName } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";



function CourseForm() {
    const dispatch = useDispatch()
    const { name, description, cost } = useSelector((state) => {

        return {
            name: state.form.name,
            description: state.form.description,
            cost: state.form.cost,
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCourse({ name, description, cost }))
    }

    return (
        <div className="courseForm panel">
            <h4 className="subtitle is-3">Kurs Ekle</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label >Ad: </label>
                        <p className="control has-icons-left">
                            <input className="input is-primary is-expanded" type="text" placeholder="Ürün ismi" onChange={(e) => { dispatch(changeName(e.target.value)) }} value={name} />
                            <span className="icon is-small is-left">
                                <i className="fa-sharp fa-solid fa-font"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <label>Açıklama:</label>
                        <p className="control has-icons-left">
                            <textarea className="input is-primary is-expanded" type="text" placeholder="Ürün açıklaması" onChange={(e) => { dispatch(changeDescription(e.target.value)) }} value={description} />
                            <span className="icon is-small is-left">
                                <i className="fa-solid fa-circle-info"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <label >Fiyat: </label>
                        <p className="control has-icons-left">
                            <input className="input is-primary is-expanded" type="number" placeholder="Ürün fiyatı" onChange={(e) => { dispatch(changeCost(parseInt(e.target.value))) }} value={cost} />
                            <span className="icon is-small is-left">
                                <i className="fa-solid fa-turkish-lira-sign"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="field">
                    <button className="button is-primary">Kaydet</button>
                </div>

            </form>
        </div>
    )
}

export default CourseForm