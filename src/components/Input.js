import React from 'react';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    color: ${({theme}) => theme.text};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing, onBlur }) => {
    const width = useWindowDimensions().width;
    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            value={value}
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='done'
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
};

export default Input;
