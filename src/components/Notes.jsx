import React from "react";
import styled from 'styled-components'

export const NotesContainer = styled.div`
    height: 100%;
    width: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function Notes( {
    props
} ) {

    return (
        <NotesContainer>
            <h1>Notes</h1>
        </NotesContainer>
    );
}