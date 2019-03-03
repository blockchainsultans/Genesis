import React from 'react';
import Web3 from 'web3';
import ConstantsList from './con'; 


var web3 = new Web3(new Web3.providers.HttpProvider(ConstantsList.URL));
var pcontract = web3.eth.contract(ConstantsList.MasterABI).at(ConstantsList.MasterADD);
var pcontractReg = web3.eth.contract(ConstantsList.MiLeregistrationABI).at(ConstantsList.MiLeregistrationADD);

web3.eth.defaultAccount = web3.eth.accounts[0];
export default class RegistrationDitail extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            stateName:"",
            districtName:"",
            insertDistrictName:"",
            
        };
    }

    componentWillMount () {
        var StateData = pcontract.showState();
        this.setState ({
            stateName:String(StateData[0]).split(',')
        });
    }
    

    handleDropDownChangeState = (event) =>{
        if (event.target.value !== ""){
            var DistrictData = pcontract.showDistricts(event.target.value);
            this.setState({
                districtName : String(DistrictData[0]).split(',') 
            });
        }

    }

    handleDropDownChangeDistrict = (event) =>{
        if(event.target.value !== ''){
            this.setState({
                insertDistrictName:event.target.value
            });
        }
    }

    ClickReg = () =>{
        if (this.userName.value !== ''){
            if(this.adharNo.value !== ''){
                if(this.contactNo.value !== ''){
                    if (this.password.value !== '' ){
                        if(this.password.value === this.passwordrepeat.value){
                            pcontractReg.insertReg(this.userName.value,this.adharNo.value,this.contactNo.value,0,this.email.value,'',this.password.value,'','',this.state.insertDistrictName,100,{from: web3.eth.accounts[0], gas: 2000000})
                            alert('success fully registered ');
    /** bytes32 _name, 
        uint _adharNo, 
        uint _contactNo, 
        uint _altContactNo, 
        bytes32 _emailAdd,
        bytes32 _add, 
        bytes32 _pssword, 
        bytes32 _acountPublicADD, 
        bytes32 _state, 
        bytes32 _district,
        uint _loanpoints */
                        }else{
                            alert('Password Miss Match! ');
                        }
                    }else{
                        alert('Please Insert Your Password! ');
                    }
                    


                }else{
                    alert('Please Insert Your Contact Number! ');
                }

            }else{
                alert('Please Insert Your Adhar Number! ');
            }
        }else{
            alert('Please Insert Your Name! ');
        }
    }

    
    render(){
        var stateArr = [];
        var districtArr = [];
        for(var i=0;i< this.state.stateName.length; i++){
            stateArr.push(
              <option value={i}>{web3.toUtf8(this.state.stateName[i])}</option>
    
            )
        }
        for(var j=0;j< this.state.districtName.length; j++){
            districtArr.push(
              <option value={web3.toUtf8(this.state.districtName[j])}>{web3.toUtf8(this.state.districtName[j])}</option>
    
            )
        }

        return(
            <div id="signup-box" className="signup-box widget-box no-border">
            <div className="widget-body">
            <div className="widget-main">
                <h4 className="header green lighter bigger">
                <i className="ace-icon fa fa-users blue" />
                New User Registration
                </h4>
                <div className="space-6" />
                <p> Enter your details: </p>
                <form>
                <fieldset>
                    <label className="block clearfix">
                    <span className="block input-icon input-icon-right">
                        <input type="text" className="form-control" placeholder="Username" ref={input => this.userName = input}/>
                        <i className="ace-icon fa fa-user" />
                    </span>
                    </label>
                    <label className="block clearfix">
                    <span className="block input-icon input-icon-right">
                        <input type="number" className="form-control" placeholder="Adhar Numcer" ref={input => this.adharNo = input}/>
                        <i className="ace-icon fa fa-user" />
                    </span>
                    </label>
                    <label className="block clearfix">
                    <span className="block input-icon input-icon-right">
                        <input type="number" className="form-control" placeholder="Contact Numcer" ref={input => this.contactNo = input}/>
                        <i className="ace-icon fa fa-headphones" />
                    </span>
                    </label>
                    <label className="block clearfix">
                    <span className="block input-icon input-icon-right">
                        <input type="email" className="form-control" placeholder="Email" ref={input => this.email = input}/>
                        <i className="ace-icon fa fa-envelope" />
                    </span>
                    </label>
                    <label className="block clearfix">
														
						<select class="chosen-select form-control" data-placeholder="Choose a State..." name = "sate" onChange={this.handleDropDownChangeState}>
							<option value="">Choose a State...  </option>
							{stateArr}
						</select>
					</label>

                    <label className="block clearfix">
														
						<select class="chosen-select form-control" data-placeholder="Choose a District..." name = "dist" onChange = {this.handleDropDownChangeDistrict}>
							<option value="">Choose a District...  </option>
							{districtArr}
						</select>
					</label>

                    <label className="block clearfix">
                    <span className="block input-icon input-icon-right">
                        <input type="password" className="form-control" placeholder="Password" ref={input => this.password = input}/>
                        <i className="ace-icon fa fa-lock" />
                    </span>
                    </label>
                    <label className="block clearfix">
                    <span className="block input-icon input-icon-right">
                        <input type="password" className="form-control" placeholder="Repeat password" ref={input => this.passwordrepeat = input} />
                        <i className="ace-icon fa fa-retweet" />
                    </span>
                    </label>
                    <label className="block">
                    <input type="checkbox" className="ace" />
                    <span className="lbl">
                        I accept the
                        <a href="#">User Agreement</a>
                    </span>
                    </label>
                    <div className="space-24" />
                    <div className="clearfix">
                    <button type="reset" className="width-30 pull-left btn btn-sm">
                        <i className="ace-icon fa fa-refresh" />
                        <span className="bigger-110">Reset</span>
                    </button>
                    <a href="/" className="width-65 pull-right btn btn-sm btn-success" onClick={this.ClickReg}>
                        <span className="bigger-110">Register</span>
                        <i className="ace-icon fa fa-arrow-right icon-on-right" />
                    </a>
                    </div>
                </fieldset>
                </form>
            </div>
            <div className="toolbar center">
                <a href="#" data-target="#login-box" className="back-to-login-link">
                <i className="ace-icon fa fa-arrow-left" />
                Back to login
                </a>
            </div>
            </div>{/* /.widget-body */}
        </div>
        );
    }
}