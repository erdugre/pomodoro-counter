import styled from 'styled-components'

const MinsButton = styled.button`
    color: pink;
    margin-right: 5px;
    background-color: #C11C84;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 5px;
`;

const MinsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: Arial;
`;

function ChooseMins( {onChoose} ) {
    return (
        <MinsDiv>
            <MinsButton onClick={() => onChoose(25)}>25</MinsButton>
            <MinsButton onClick={() => onChoose(30)}>30</MinsButton>
            <MinsButton onClick={() => onChoose(40)}>40</MinsButton>
            <MinsButton onClick={() => onChoose(60)}>60</MinsButton>
        </MinsDiv>
    )
}

export default ChooseMins;