import React from "react";
import styled from 'styled-components'
import { Task } from '../components'

export const TasksContainer = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Draggable = styled.div`
    position: absolute;
    right: 0;
    width: 6px;
    height: 100%;
    border-right: #cacaca 2px solid;
    text-align: center;
    cursor: col-resize;
    resize: horizontal;
    transition: 0.1s;

    &:hover {
        background: #c1c3c5b4;
    }
`

export const Todo = styled.div`
    height: auto;
    width: 80%;
    background: #eeeeee;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin: 50px 0px;
    padding: 20px 40px 40px 40px;
`

export const SectionName = styled.h2`
    font-size: 18px;
    color: #797979;
`

export function Tasks( {
    parent
} ) {
    const [drag, setDrag] = React.useState(false);
    const [width, setWidth] = React.useState("50%");

    const startDrag = () => {
        setDrag(true);
    };

    const stopDrag = () => {
        setDrag(false);
    };

    const resize = React.useCallback(
        (mouseMoveEvent) => {
          if (drag) {
            setWidth(mouseMoveEvent.clientX);
          }
        },
        [drag]
    );

    React.useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopDrag);
        return () => {
          window.removeEventListener("mousemove", resize);
          window.removeEventListener("mouseup", stopDrag);
        };
      }, [resize, stopDrag]);

    return (
        <TasksContainer style={{ width: width }} onMouseDown={(e) => e.preventDefault()}>
            <Draggable onMouseDown={startDrag}/>
            <Todo>
                <SectionName>TODO</SectionName>
                <Task/>
                <Task/>
            </Todo>
            <Todo>
                <SectionName>COMPLETE</SectionName>
                <Task/>
                <Task/>
            </Todo>
        </TasksContainer>
    );
}