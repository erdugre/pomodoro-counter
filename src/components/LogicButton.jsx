import styled from 'styled-components'

const MyButton = styled.button`
    color: pink;
    margin-right: 5px;
    background-color:rgba(235, 161, 210, 0.22);
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

function LogicButton( { onLogic, label } ) {
    return (
        <MyButton onClick={onLogic}>{label}</MyButton>
    )
}

export default LogicButton;