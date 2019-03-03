import React from 'react';
import LoginDitail from './loginDitail';
import RegistrtionDitail from './restDetail';
import ForgetPass from './forgetpass';

export default class Login extends React.Component{

    
    render(){
        var loginEnterDetail = [];
        var regDitail = [];
        var forgetPass = [];
        loginEnterDetail.push(<LoginDitail />);
        regDitail.push(<RegistrtionDitail />);
        forgetPass.push(<ForgetPass />);
        return(
            <div className="main-container">
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                            <div className="login-container">
                                <div className="center">
                                <h1>
                                    <i className="ace-icon fa fa-leaf green" />
                                    <span className="red">Genesis </span>
                                    <span className="white" id="id-text2">MI-LE</span>
                                </h1>
                                <h4 className="blue" id="id-company-text">Blockchain Sultans</h4>
                                </div>
                                <div className="space-6" />
                                <div className="position-relative">
                                <div id="login-box" className="login-box visible widget-box no-border">
                                    <div className="widget-body">
                                    
                                    {loginEnterDetail}


                                    <div className="toolbar clearfix">
                                        <div>
                                        <a href="#" data-target="#forgot-box" className="forgot-password-link">
                                            <i className="ace-icon fa fa-arrow-left" />
                                            I forgot my password
                                        </a>
                                        </div>
                                        <div>
                                        <a href="#" data-target="#signup-box" className="user-signup-link">
                                            I want to register
                                            <i className="ace-icon fa fa-arrow-right" />
                                        </a>
                                        </div>
                                    </div>
                                    </div>{/* /.widget-body */}
                                </div>{/* /.login-box */}
                                {forgetPass}
                                {regDitail}
                                </div>{/* /.position-relative */}
                                <div className="navbar-fixed-top align-right">
                                <br />
                                &nbsp;
                                <a id="btn-login-dark" href="#">Dark</a>
                                &nbsp;
                                <span className="blue">/</span>
                                &nbsp;
                                <a id="btn-login-blur" href="#">Blur</a>
                                &nbsp;
                                <span className="blue">/</span>
                                &nbsp;
                                <a id="btn-login-light" href="#">Light</a>
                                &nbsp; &nbsp; &nbsp;
                                </div>
                            </div>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.main-content */}
            </div>
        );
    }
}