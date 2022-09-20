import img from './error.gif';
const ErrorMessage = () => {
    return(
        //when in folder src we need static file we adress to it with this construction (publick folder)
        // <img src={process.env.PUBLIC_URL + '/error.gif'}/>
        <img style={{display: 'block', margin: '0 auto', width: '250px', height: '250px', objectFit: 'contain' }} src={img} alt = "Error"/>
    )
}

export default ErrorMessage;