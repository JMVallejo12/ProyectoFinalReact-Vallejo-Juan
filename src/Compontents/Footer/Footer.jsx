import './footer.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Footer(){

    return(
        <div className='footer'>
            <div className='icons-container'>
                <p className='p-footer'>K-HOME Todos los derechos reservados Copyright 2024</p>
                <a href="#up">
                <ArrowUpwardIcon className='icon-footer' />
                </a>
            </div>
        </div>
    )
}

export default Footer