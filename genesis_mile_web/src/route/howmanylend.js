import React from 'react';
import * as qs from 'query-string';
import Howmanylendtable from './howmanylendtable'
import Web3 from 'web3';
import ConstantsList from './con'; 

var web3 = new Web3(new Web3.providers.HttpProvider(ConstantsList.URL));

var pcontractReg = web3.eth.contract(ConstantsList.MiLeregistrationABI).at(ConstantsList.MiLeregistrationADD);


web3.eth.defaultAccount = web3.eth.accounts[0];
export default class Howmanylend extends React.Component{


  


  Clicksubmitreq = () =>{
    const parsed = qs.parse(this.props.location.search);
    console.log(parsed.id);
    /**uint _regno,
        uint _loanamount,
        uint _totalreturn,
        uint _noOfDays,
        uint _noOfinstallment,
        uint _primiumPercent,
        bytes32 _remarks,
        bytes32 _loantakenBY,
        bytes32 _date
         */
    var reqloan = this.loanreq.value;
    var willreturn = this.willreturn.value;
    var noofday = this.noOfdays.value;
    var noofinst =  this.noOfinstall.value;
    var prcentpri = this.primiumprcent.value;
    var reason =this.reasonLoan.value;
    this.loanreq.value ="";
    this.willreturn.value ="";
    this.noOfdays.value="";
    this.noOfinstall.value="";
    this.primiumprcent.value="";
    this.reasonLoan.value="";
    pcontractReg.insertloan(parsed.id, reqloan, willreturn, noofday, noofinst, prcentpri, reason, parsed.id,'',{from: web3.eth.accounts[0], gas: 2000000})    

  }

    render(){
      

      
      const parsed = qs.parse(this.props.location.search);
      var landertableTab = [];
      landertableTab.push(<Howmanylendtable values = {parsed}/>);
      var urlloanR ="/Howmanyloantaken?id="+parsed.id;
      var urlloanG ="/Howmanylend?id="+parsed.id
      var mainUrl = "/Lenderdeshboard?id="+parsed.id;
        return(
            <div>
            <div id="navbar" className="navbar navbar-default          ace-save-state">
              <div className="navbar-container ace-save-state" id="navbar-container">
                <div className="navbar-header pull-left">
                  <a href={mainUrl} className="navbar-brand">
                    <small>
                      <i className="fa fa-leaf" />
                      MI-LE
                    </small>
                  </a>
                </div>
                <div className="navbar-buttons navbar-header pull-right" role="navigation">
                  <ul className="nav ace-nav">
                    <li className="light-blue dropdown-modal">
                      <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                        <img className="nav-user-photo" src="assets/images/avatars/avatar2.png" alt="USER's Photo" />
                        <span className="user-info">
                          <small>Welcome,</small>
                          USER
                        </span>
                        <i className="ace-icon fa fa-caret-down" />
                      </a>
                      <ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                        <li>
                          <a href="#">
                            <i className="ace-icon fa fa-cog" />
                            Settings
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ace-icon fa fa-user" />
                            Profile
                          </a>
                        </li>
                        <li>
                          <a href={urlloanR}>
                            <i className="ace-icon fa fa-user" />
                            loan Taken
                          </a>
                        </li>

                        <li>
                          <a href={urlloanG}>
                            <i className="ace-icon fa fa-user" />
                            loan Given
                          </a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="/">
                            <i className="ace-icon fa fa-power-off" />
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>{/* /.navbar-container */}
            </div>
            <div className="main-container ace-save-state" id="main-container">
              <div className="main-content">
                <div className="main-content-inner">
                  <br />
                  <br />
                  <div className="col-sm-12 infobox-container">
                    <div className="infobox infobox-green">
                      {/*                            <div class="infobox-icon">
                                    <i class="ace-icon fa fa-comments"></i>
                                </div>*/}
                      <div className="infobox-data">
                        <span className="infobox-data-number">6.4%</span>
                        <div className="infobox-content">Average Interest rate</div>
                      </div>
                      {/*
                                <div class="stat stat-success">8%</div>*/}
                    </div>
                    <div className="infobox infobox-blue">
                      {/*                            <div class="infobox-icon">
                                    <i class="ace-icon fa fa-twitter"></i>
                                </div>*/}
                      <div className="infobox-data">
                        <span className="infobox-data-number">20</span>
                        <div className="infobox-content">Avg Days of return</div>
                      </div>
                      {/*                            <div class="badge badge-success">
                                    +32%
                                    <i class="ace-icon fa fa-arrow-up"></i>
                                </div>*/}
                    </div>
                    <div className="infobox infobox-pink">
                      {/*                            <div class="infobox-icon">
                                    <i class="ace-icon fa fa-shopping-cart"></i>
                                </div>*/}
                      <div className="infobox-data">
                        <span className="infobox-data-number">10 %</span>
                        <div className="infobox-content">Highest rate offered</div>
                      </div>
                      {/*<div class="stat stat-important">4%</div>*/}
                    </div>
                    <div className="infobox infobox-red">
                      {/*                            <div class="infobox-icon">
                                    <i class="ace-icon fa fa-flask"></i>
                                </div>*/}
                      <div className="infobox-data">
                        <span className="infobox-data-number">5%</span>
                        <div className="infobox-content">Lowest rate offered</div>
                      </div>
                    </div>
                    <div className="infobox infobox-orange2">
                      {/*                            <div class="infobox-chart">
                                    <span class="sparkline" data-values="196,128,202,177,154,94,100,170,224"><canvas width="44" height="33" style="display: inline-block; width: 44px; height: 33px; vertical-align: top;"></canvas></span>
                                </div>*/}
                      <div className="infobox-data">
                        <span className="infobox-data-number">6,251</span>
                        <div className="infobox-content">Account Balance</div>
                      </div>
                      {/*                            <div class="badge badge-success">
                                    7.2%
                                    <i class="ace-icon fa fa-arrow-up"></i>
                                </div>*/}
                    </div>
                  </div>
                  <div className="col-xs-12">
                    {/*                        <div class="ace-settings-container" id="ace-settings-container">
                                <div class="infobox infobox-orange2">
                                    <div class="infobox-chart">
                                        <span class="sparkline" data-values="196,128,202,177,154,94,100,170,224"><canvas width="44" height="33" style="display: inline-block; width: 44px; height: 33px; vertical-align: top;"></canvas></span>
                                    </div>
    
                                    <div class="infobox-data">
                                        <span class="infobox-data-number">6,251</span>
                                        <div class="infobox-content">ACCOUNT BLANCE</div>
                                    </div>
    
                                    <div class="badge badge-success">
                                        <i class="ace-icon fa fa-arrow-up"></i>
                                    </div>
                                </div>
                            </div> */}
                    <br />
                    
                   {landertableTab}
                  </div>{/* /.page-content */}
                </div>
              </div>{/* /.main-content */}
              <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  {/* Modal content*/}
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">×</button>
                      <h4 className="modal-title">Borrower Acceptance</h4>
                    </div>
                    <div className="modal-body">
                      <p>Borrower Details.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-xs  btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-xs btn-danger" data-dismiss="modal">Reject</button>
                      <button type="button" className="btn btn-xs  btn-success" data-dismiss="modal">Approved</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="footer-inner">
                  <div className="footer-content">
                  </div>
                </div>
              </div>
              <a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
                <i className="ace-icon fa fa-angle-double-up icon-only bigger-110" />
              </a>
            </div>{/* /.main-container */}
          </div>
        );
    }
}