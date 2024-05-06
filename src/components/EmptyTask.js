import React from 'react';
import styled from 'styled-components/native';

const EmptyImage = styled.Image`
    width: 300px;
    height: 300px;
`;

const StyledText = styled.Text`
    font-size: 18px;
    color: ${({theme}) => theme.text};
`;

const EmptyTask = () => {
    return (
        <>
            <EmptyImage source={require('../../assets/post-it.png')} />
            <StyledText>새로운 할 일을 추가해보세요.</StyledText>
        </>
    );
};

export default EmptyTask;
