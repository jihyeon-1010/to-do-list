import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';

const StyledIcon = styled.Image`
    tint-color: ${({ theme, completed }) => completed ? theme.done : theme.text};
    width: 30px;
    height: 30px;
    margin: 10px;
`;

const Icon = ({ type, onPressOut, id, completed}) => {
    const _onPressOut = () => {
        onPressOut(id);
    }

    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <StyledIcon source={type} completed={completed} />
        </TouchableOpacity>
    );
};

Icon.defaultProps = {
    onPressOut: () => {},
};

Icon.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func.isRequired,
    id: PropTypes.string,
    completed: PropTypes.bool,
};

export default Icon;
