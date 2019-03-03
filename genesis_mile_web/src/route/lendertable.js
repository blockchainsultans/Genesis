import React from 'react';
import Web3 from 'web3';
import ConstantsList from './con'; 

var web3 = new Web3(new Web3.providers.HttpProvider(ConstantsList.URL));
var pcontractReg = web3.eth.contract(ConstantsList.MiLeregistrationABI).at(ConstantsList.MiLeregistrationADD);

export default class Lendertable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id:"",
      lid:"",
      reg:"",
    };
  } 

  componentWillMount(){
    console.log(this.props.values.lid+"---------------------------------------");
    if(this.props.values.lid !== undefined){
      this.setState({
        id:this.props.values.id,
        lid :this.props.values.lid,
        reg :this.props.values.reg
      });
      var id = this.props.values.id;
      var lid = this.props.values.lid;
      var reg = this.props.values.reg;
      pcontractReg.updateloanGiven(reg, lid, id);

    }
  }

  AprooveLoan =() =>{
    alert("Are you sure want to give loan to ")
  }

    render(){
      var regdata = pcontractReg.showRegData();
      var regUser = String(regdata[0]).split(',');
      var loanpoints = String(regdata[2]).split(',');
      var district = String(regdata[3]).split(',');
      var loandata = [];
      
      for(var i = 0; i < regUser.length; i++){
        var regUserName = web3.toUtf8(regUser[i]);
        var points = loanpoints[i];
        var distt = web3.toUtf8(district[i]);
        var tableloan1 = pcontractReg.showAllLoan1(i);
        var tableloan2 = pcontractReg.showAllLoan2(i);
        var tableloan3 = pcontractReg.showAllLoan3(i);
        var loanamount = String(tableloan1[0]).split(',');
        var totalreturn = String(tableloan1[1]).split(','); 
        var noOfDays = String(tableloan1[2]).split(','); 
        var noOfinstallment = String(tableloan1[3]).split(','); 
        var loanstatus = String(tableloan2[0]).split(',');
        var parsAount = String(tableloan3[0]).split(',');
        var loanstatus1;  
        for(var j = 0; j < loanamount.length; j++){
          var parsAount = String(tableloan3[j]).split(',');
          var modalurl = "?id="+this.props.values.id+"&lid="+j+"&reg="+i;
          var prourl ="/Profile?id="+this.props.values.id+"&pro="+i+"&lid="+j+"&type=0" ;
          
          var emi = totalreturn[j]/noOfinstallment[j];
          var percentcal = ((totalreturn[j]-loanamount[j])/loanamount[j])*100;
          if (parsAount != "" && parsAount != 0){
            loanstatus1 = (parseInt(parsAount, 10)*100)/loanamount[j] + "% Aproved";

          }else{
            loanstatus1 = "IN Process"
          }  
          var starcount;
          if(points >= 90 && points <=100 ){
            starcount = "*****";
          }else if(points >= 70 && points < 90){
            starcount = "****";
          }else if(points >= 50 && points < 70){
            starcount = "***";
          }else if(points >= 40 && points < 50){
            starcount = "**";
          }else{
            starcount = "*";
          }
          
          if (loanstatus[j]==0){
            loandata.push(
              <tr>
              {/*                                                        <td class="center">
                                                                                                  <label class="pos-rel">
                                                                                                      <input type="checkbox" class="ace" />
                                                                                                      <span class="lbl"></span>
                                                                                                  </label>
                                                                                              </td>*/}
              <td>
                <a href={prourl}>{regUserName}</a>
              </td>
              <td>{loanamount[j]}</td>
              <td className="hidden-480">{totalreturn[j]}</td>
              <td>{noOfDays[j]}</td>
              <td>{percentcal}</td>
              <td>{noOfinstallment[j]}</td>
              <td>{emi}</td>
              <td>{loanamount.length}</td>
              <td>{starcount}</td>
              <td>{loanstatus1}</td>
              <td className="hidden-480">
                <span className="label label-sm label-info arrowed arrowed-righ">{distt}</span>
              </td>
              <td>
                <div className="hidden-sm hidden-xs action-buttons">
                  <a className="green loan-Approval" href={modalurl} data-toggle="modal"  onClick={this.AprooveLoan}>
                    <i className="ace-icon fa fa-check bigger-110" />
                  </a>
                  <a className="blue loan-Approval" href={prourl}>
                    <i className="normal-icon ace-icon fa fa-eye green bigger-130" />
                  </a>
                 
                </div>
                
              </td>
            </tr>
            );
          }  
        }


      }

      
     // loandata.push();


        return(
            <div className="page-content">
            <div className="row">
              <div className="col-xs-12">
                {/* PAGE CONTENT BEGINS */}
                <h1 className="page-content-header">
                  Loan Requests
                </h1>
                <div className="row">
                  <div className="col-xs-12">
                    <table id="dynamic-table" className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                         
                          <th>Borrower</th>
                          <th className="hidden-480">Loan Required</th>
                          <th className="hidden-480">Return Back</th>
                          <th className="hidden-480">Days</th>
                          <th className="hidden-480">Interest(%)</th>
                          <th className="hidden-480">No. of Installment </th>
                          <th className="hidden-480">EMI per Installment </th>
                          <th className="hidden-480">Number of loans</th>
                          <th className="hidden-480">Star Rating</th>
                          <th className="hidden-480">Status</th>
                          <th className="hidden-480">District</th>
                          {/*                                                        <th>
                                                                                                              <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i>
                                                                                                              Update
                                                                                                          </th>*/}
                          <th className="hidden-480">Action</th>
                          {/*<th></th>*/}
                        </tr>
                      </thead>
                      <tbody>
                        
                        {loandata}
                      </tbody>
                    </table>
                  </div>{/* /.span */}
                </div>{/* /.row */}
                {/* PAGE CONTENT ENDS */}
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>
          
        );

    }
}