import React from 'react'
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const MenuItemGroup = (props) => {
    const {name, choices, related, level, type, menuItemChecked, choiceChecked, path} = props;

    return (
        <React.Fragment>
            {/* Parent Menu Item */}
            <MenuItem name={name} level={level} type={type} path={path} onCheckMenuItem={props.onCheckMenuItem}/>

            {/* Recursively populate the choices and related items based on user selection */}
            {
                choices !== undefined ?
                    choices.length > 0 && menuItemChecked ? (
                            <div style={{marginLeft: level * 20, marginBottom: 10}}>

                                {/* List of Choices for the Menu Item */}
                                {
                                    choices.map((choice, choiceKey) => (
                                        <MenuItem key={choiceKey} className={"choices-on-menu"} name={choice.name}
                                                  level={level + 1} path={path.concat(`| ${choice.name}`)} type={'choices'}
                                                  onCheckMenuItem={props.onCheckMenuItem}/>
                                    ))
                                }

                                {/* List of Related Menu Items to the Menu Item */}
                                {
                                    related !== undefined ?
                                        related.length > 0 && choiceChecked ? (
                                                <React.Fragment>
                                                    <p>You might also want:</p>

                                                    {
                                                        related.map((relatedItem, relatedItemKey) => (
                                                            <MenuItemGroup
                                                                key={relatedItemKey}
                                                                className={"related-items-on-menu"}
                                                                name={relatedItem.name}
                                                                choices={relatedItem.hasOwnProperty("choices") ? relatedItem.choices : []}
                                                                related={relatedItem.hasOwnProperty("related") ? relatedItem.related : []}
                                                                level={level + 1}
                                                                path={path.concat(`| ${relatedItem.name}`)}
                                                                type={"related"}
                                                                menuItemChecked={relatedItem.hasOwnProperty("isRelatedItemSelected") ? relatedItem.isRelatedItemSelected : false}
                                                                onCheckMenuItem={props.onCheckMenuItem}
                                                            />
                                                        ))
                                                    }
                                                </React.Fragment>
                                            )
                                            : null
                                        : null
                                }
                            </div>
                        )
                        : null
                    : null
            }
        </React.Fragment>
    )
};

MenuItemGroup.propTypes = {
    name: PropTypes.string,
    choices: PropTypes.array,
    related: PropTypes.array,
    level: PropTypes.number,
    type: PropTypes.oneOf(['root', 'choices', 'related']),
    menuItemChecked: PropTypes.bool,
    choiceChecked: PropTypes.bool,
    path: PropTypes.string,
    onCheckMenuItem: PropTypes.func
};

export default MenuItemGroup;