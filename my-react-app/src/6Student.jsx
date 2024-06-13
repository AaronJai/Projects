// Props - read-only properties that are shared between components
//          a parent component can send data to a child component
//          <Component key=value />

// Proptypes - mechanism ensuring passed value is of correct datatype.
//              age: PropTypes.number
//              ensures a number is passed in, not string, etc.

// defaultProps - default values for props in case they are not passed from parent component

import PropTypes from 'prop-types'

function Student(props) {

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student