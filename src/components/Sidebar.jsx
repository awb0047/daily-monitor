import React from "react";
import styled from 'styled-components'

export const SideContainer = styled.div`
    grid-area: sidebar;
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

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 50px;
`

export function SideBar( {
    props
} ) {
    const [drag, setDrag] = React.useState(false);
    const [width, setWidth] = React.useState(150);

    const startDrag = () => {
        setDrag(true);
    };

    const stopDrag = () => {
        setDrag(false);
    };

    const autoResize = () => {
        if (width == 500) {
            setWidth(100);
            return;
        }
        setWidth(500);
    };

    const resize = React.useCallback(
        (mouseMoveEvent) => {
          if (drag) {
            setWidth(Math.min(Math.max(mouseMoveEvent.clientX, 100), 500));
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
        <SideContainer style={{ width: width }} onMouseDown={(e) => e.preventDefault()}>
            <Draggable onMouseDown={startDrag} onClick={autoResize}/>
            <Logo src="vite.svg"/>
        </SideContainer>
    );
}