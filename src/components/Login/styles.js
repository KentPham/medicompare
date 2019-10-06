import styled, { keyframes } from 'styled-components'

const scale = keyframes`

  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }

`
export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(3, 154, 100, 0.88);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	font-family: 'Montserrat', sans-serif;
`

export const Container = styled.div`
	border-radius: 3px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	max-width: 480px;
	background: #f7ff00;
	display: flex;
	flex-direction: column;
	animation: ${scale} 0.3s both ease-in;
`

export const Form = styled.form`
	padding: 50px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-evenly;
	color: #000000
`

export const SelectionGroup = styled.div`
	display: flex;
`

export const Selection = styled.button`
	outline: none;
	font-size: 18px;
	letter-spacing: 1.6px;
	padding: 30px;
	background: rgb(220, 232, 9);
	color: #000000;
	border: none;
	flex-grow: 1;
	font-family: 'Montserrat', sans-serif;
	font-weight: 900;

	${props =>
		props.active &&
		`

      background: transparent;
      color: #000;
    `};
`
export const InputField = styled.div`
	position: relative;
`
export const SubHeader = styled.p`
	font-size: 14px;
	letter-spacing: 1.2px;
	color: #000;
	text-align: center;
	margin: 0 0 20px;
`

export const Cancel = styled.button`
	font-size: 14px;
	letter-spacing: 1.2px;
	color: #000;
	border: 5px solid #00ff73;
	font-family: 'Montserrat', sans-serif;
	font-weight: 900;
	flex-grow: 1;
	padding: 5px 30px;
	margin-top: 0;

	background: transparent;
	align-self: flex-end;
	margin-left: 35px;
	&:hover {
		background-color: #00ff73;
	}
`
