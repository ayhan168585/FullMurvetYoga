import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: coral;
display: flex;
align-items: center;
color: white;
justify-content: center;
font-size: 18px;
`
const InformItem = ({item}) => {
    return (
        <Container>
            <b>{item.title}</b>
            <p>{item.desc}</p>
        </Container>
    )
}

export default InformItem
