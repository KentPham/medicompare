import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-bottom: 30px;
    @media (max-width: 520px) {
        justify-content: center;
    }
`

export const List = styled.div`
	display: flex;
	justify-content: space-around;
	list-style: none;
`

export const Logo = styled.div`
    font-weight: 900;
    display: flex;
    align-items: center;
    font-size: 28px;
    img {
        width: 80px;
    }

    @media (max-width: 520px) {
        margin-bottom: 20px;
    }
`

export const Item = styled.li`
    align-self: center;
    font-weight: 900;
`
