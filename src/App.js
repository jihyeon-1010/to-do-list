import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { Alert, StatusBar } from 'react-native';
import { useWindowDimensions } from 'react-native';
import Input from './components/Input';
import Task from './components/Task';
import EmptyTask from './components/EmptyTask';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.title};
    align-self: flex-start;
    margin: 0px 20px;
    margin-bottom: 10px;
`;

const List = styled.ScrollView`
    flex: 1;
    width: ${({width}) => width - 40}px;
`;

const App = () => {
    const width = useWindowDimensions().width;

    const [text, setText] = useState('');
    const [task, setTask] = useState({});
    
    // 등록 기능
    const _addTask = () => {
        const ID = Date.now().toString();
        const newTask = { id: ID, text: text, completed: false };
        const updateTask = { ...task, [ID]: newTask };
        setText('');
        setTask(updateTask);
        console.log({ task });
    };

    // 삭제 기능
    const _deleteTask = id => {
        const _delete = () => {
            const newTask = Object.assign({}, task);
            delete newTask[id];
            setTask(newTask);
        };

        Alert.alert(
            '삭제 확인',
            '정말 삭제하시겠습니까?',
            [
                { text: '취소', style: 'cancel' },
                { text: '확인', onPress: _delete }
            ],
            { cancelable: false }
        );
    };

    // 수정 기능
    const _updateTask = item => {
        const newTask = Object.assign({}, task);
        newTask[item.id] = item;
        setTask(newTask);
    };

    // 완료 기능
    const _check = id => {
        const newTask = Object.assign({}, task);
        newTask[id]['completed'] = !newTask[id]['completed'];
        setTask(newTask);
        console.log({ task });
    };

    const _onBlur = () => {
        setText('');
    }

    return Object.keys(task).length === 0 ? (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="dark-content" backgroundColor={theme.background}/>
                <Title>오늘 할 일</Title>
                <Input
                    placeholder='할 일 추가...'
                    value={text}
                    onChangeText={text => setText(text)}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                />
                <EmptyTask />
                <List />
            </Container>
        </ThemeProvider>
    ) : (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="dark-content" backgroundColor={theme.background}/>
                <Title>오늘 할 일</Title>
                <Input
                    placeholder='할 일 추가...'
                    value={text}
                    onChangeText={text => setText(text)}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                />
                <List width={width}>
                    {Object.values(task)
                        .reverse()
                        .map(item =>
                            <Task
                                key={item.id}
                                item={item}
                                deleteTask={_deleteTask}
                                updateTask={_updateTask}
                                check={_check}
                            />
                        )
                    }
                </List>
            </Container>
        </ThemeProvider>
    );
};

export default App;
