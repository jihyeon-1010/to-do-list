import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { images } from '../images';
import Input from './Input';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme, completed }) => completed ? theme.done : theme.text};
    text-decoration-line: ${({completed}) => completed ? 'line-through' : 'none'};
`;

const Task = ({ item, deleteTask, check, updateTask }) => {
    const[isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    const _updateButton = () => {
        setIsEditing(true);
    };

    const _submitEditing = () => {
        if (isEditing) {
            const editedTask = Object.assign({}, item, { text });
            setIsEditing(false);
            updateTask(editedTask);
        };
    };

    const _onBlur = () => {
        setIsEditing(false);
        setText(item.text);
    };

    // 수정 모드
    return isEditing ? (
        <Input
            value={text} 
            onChangeText={text => setText(text)}
            onSubmitEditing={_submitEditing}
            onBlur={_onBlur}
        />
    ) : ( // 조회 모드
        <Container>
            <Icon
                type={item.completed ? images.completed : images.uncompleted}
                onPressOut={check}
                id={item.id}
                completed={item.completed}
            />
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || (
                <Icon
                    type={images.update}
                    onPressOut={_updateButton}
                    id={item.id}
                />
                )
            }
            <Icon
                type={images.delete}
                onPressOut={deleteTask}
                id={item.id}
                completed={item.completed}
            />
        </Container>
    );
};

Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    check: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
};

export default Task;
