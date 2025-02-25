import React from "react";
import styled from 'styled-components'

export const TaskContainer = styled.div`
    height: 120px;
    width: 100%;
    border-radius: 20px;
    background: #FAF9F6;
    border: #cacaca 2px solid;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 10px 30px;
`

export const Title = styled.h3`
    font-size: 15;
    color: #2e2e2e;
`

export function Task( {
    props
} ) {

    return (
        <TaskContainer>
            <Title>Schedule me an appointment with my endocrinologist</Title>
        </TaskContainer>
    );
}