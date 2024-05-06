import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const CreateButton = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    backgroundColor: #4287f5;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`;

const Button = ({ onPress }) => {
    return (
        <CreateButton onPress={onPress}>
            <Text>추가</Text>
        </CreateButton>
    );
};

export default Button;
