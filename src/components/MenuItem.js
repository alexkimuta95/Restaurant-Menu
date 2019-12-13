import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
    const {name, level, path , type} = props;
    return (
        <React.Fragment>
            <input type="checkbox" name={`level ${level}`} value={name} onChange={props.onCheckMenuItem(path, type)}/> {name}<br/>
        </React.Fragment>
    )
};

MenuItem.propTypes = {
    name: PropTypes.string,
    level: PropTypes.number,
    path: PropTypes.string,
    type: PropTypes.oneOf(['root', 'choices', 'related']),
    onCheckMenuItem: PropTypes.func
};

export default MenuItem;
