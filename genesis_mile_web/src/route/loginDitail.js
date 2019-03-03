import React from 'react';
import Web3 from 'web3';
import ConstantsList from './con';
import {
    Link
  } from 'react-router-dom'; 

var web3 = new Web3(new Web3.providers.HttpProvider(ConstantsList.URL));
var pcontractReg = web3.eth.contract(ConstantsList.MiLeregistrationABI).at(ConstantsList.MiLeregistrationADD);

export default class LoginDitail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userID:null,
        };
    }

    ClickAuth = () =>{
        if(this.Userid.value !== ''){
            if(this.Password.value !== ''){
                var regdata = pcontractReg.showRegData();
                var regUser = String(regdata[0]).split(',');
                var regPass = String(regdata[1]).split(',');
                for(var i = 0; i < regUser.length; i++){
                    if(this.Userid.value == web3.toUtf8(regUser[i])){
                        if(this.Password.value == web3.toUtf8(regPass[i])){
                            this.setState({
                                userID:i,
                            });
                            alert('login');
                            
                            break;
                        }else{
                            alert('password wrong')
                        }
                    }
                }
                
            }else{
                alert('Please Enter Password!');
            }

        }else{
            alert('Please Enter UserID!');

        }
    }

    render(){
        var loginarr = [];
        var value =  "Lenderdeshboard?id="+ this.state.userID;
        loginarr.push(
            
            <a href= {value} className="width-35 pull-right btn btn-sm btn-primary" onClick={this.ClickAuth}>
            <i className="ace-icon fa fa-key" />
            <span className="bigger-110">Login</span>
        
        </a>
        );
        return(
            <div className="widget-main">
            <h4 className="header blue lighter bigger">
            <i className="ace-icon fa fa-coffee green" />
            Please Enter Your login Detail
            </h4>
            <div className="space-6" />
            <form>
            <fieldset>
                <label className="block clearfix">
                <span className="block input-icon input-icon-right">
                    <input type="text" className="form-control" placeholder="Userid" ref={input => this.Userid = input}/>
                    <i className="ace-icon fa fa-user" />
                </span>
                </label>
                <label className="block clearfix">
                <span className="block input-icon input-icon-right">
                    <input type="password" className="form-control" placeholder="Password" ref={input => this.Password = input}/>
                    <i className="ace-icon fa fa-lock" />
                </span>
                </label>
                <div className="space" />
                <div className="clearfix">
                {loginarr}
                </div>
                <div className="space-4" />
            </fieldset>
            </form>
            <div className="social-or-login center">
            <span className="bigger-110">Or Login Using</span>
            </div>
            <div className="space-6" />
            <div className="social-login center">
            <a className="btn btn-primary">
                <i className="ace-icon fa fa-facebook" />
            </a>
            <a className="btn btn-info">
                <i className="ace-icon fa fa-twitter" />
            </a>
            <a className="btn btn-danger">
                <i className="ace-icon fa fa-google-plus" />
            </a>
            </div>
        </div>
        );
    }

} 