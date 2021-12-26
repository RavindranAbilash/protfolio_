import './topbar.scss'

import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Topbar=()=>{
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>0094 77 123 456</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>abcd@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default Topbar;