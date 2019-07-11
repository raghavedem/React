import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
    return (
        <div>
            <label className="form-label">{props.title}</label>
            <div className="checkbox-group">
            {
                props.options.map((opt,i)=>(
                    (
        <div className="form-check" key={i}>
            <label className="check-input-label" key={opt}>
                <input 
                type={props.type}
                className="form-check-input"
                name={props.setName}
                placeholder={props.placeholder}
                value={opt}
                onChange={props.controlFunc}
                checked={props.selectedOptions.indexOf(opt) > -1}
                />
                {opt}</label>
        </div>
    )
                ))
            }
        </div>
        </div>
    )
}

Checkbox.propTypes = {
    type:PropTypes.oneOf(['checkbox','radio']).isRequired,
    controlFunc:PropTypes.func.isRequired,
    setName:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    selectedOptions:PropTypes.array.isRequired,
    options:PropTypes.array.isRequired,
}

export default Checkbox
