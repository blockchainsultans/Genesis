import React from 'react';

export default class ForgetPass extends React.Component{

    render(){

        return(
            <div id="forgot-box" className="forgot-box widget-box no-border">
            <div className="widget-body">
            <div className="widget-main">
                <h4 className="header red lighter bigger">
                <i className="ace-icon fa fa-key" />
                Retrieve Password
                </h4>
                <div className="space-6" />
                <p>
                Enter your registered mobile number or email to receive OTP
                </p>
                <form>
                <fieldset>
                    <label className="block clearfix">
                    <span className="block input-icon input-icon-right">
                        <input type="text" className="form-control" placeholder="Email" />
                        <i className="ace-icon fa fa-envelope" />
                    </span>
                    </label>
                    <div className="clearfix">
                    <button type="button" className="width-35 pull-right btn btn-sm btn-danger">
                        <i className="ace-icon fa fa-lightbulb-o" />
                        <span className="bigger-110">Send Me!</span>
                    </button>
                    </div>
                </fieldset>
                </form>
            </div>{/* /.widget-main */}
            <div className="toolbar center">
                <a href="#" data-target="#login-box" className="back-to-login-link">
                Back to login
                <i className="ace-icon fa fa-arrow-right" />
                </a>
            </div>
            </div>{/* /.widget-body */}
        </div>
        );
    }

}