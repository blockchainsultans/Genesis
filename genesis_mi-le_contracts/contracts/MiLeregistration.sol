pragma solidity ^0.4.17;

contract MiLeregistration {
    mapping (uint => structReg) stReg; 
    uint _regID = 0;

    /**registration contract */
    struct structReg {
        bytes32 name;
        uint adharNo;
        uint contactNO;
        uint altContactNo;
        bytes32 emailAdd;
        bytes32 addressUser; 
        bytes32 password;
        bytes32 acountPublicADD;
        bytes32 state;
        bytes32 district;
        uint _loancount;
        mapping (uint => loanStruct) loanstr;
        uint _balanceCount;
        mapping (uint => balanceStruct) balstr;
        uint loanpoints;
        uint _friendCount;
        mapping (uint => friendStruct) friendS;

    }

    struct friendStruct {
        uint friendId;
    }
/**0 for comlete 1 for incomplete */
    struct loanStruct {
        uint id;
        uint loanamount;
        uint totalreturn;
        uint noOfDays;
        uint noOfinstallment;
        uint primiumPercent;
        uint loanstatus;
        bytes32 remark;
        uint loanGivenBy;
        uint loantakenBY;
        bytes32 date;
        uint partial;
    }

    struct balanceStruct {
        uint balance;
    }
    /** insert loaddata */

    function insertfriendID(uint _regno, uint _friendid) public{
        stReg[_regno].friendS[stReg[_regno]._friendCount].friendId = _friendid;
        stReg[_regno]._friendCount++;
    }

    function showfriends (uint _regno) public constant returns (uint[]){
        uint _totalfcount = stReg[_regno]._friendCount;
        uint[] memory _fid = new uint[](_totalfcount);
        for (uint i = 0; i < _totalfcount; i++){
            _fid[i] = stReg[_regno].friendS[i].friendId;
        }
        return(_fid);



    }

    function insertloan (
        uint _regno,
        uint _loanamount,
        uint _totalreturn,
        uint _noOfDays,
        uint _noOfinstallment,
        uint _primiumPercent,
        bytes32 _remarks,
        uint _loantakenBY,
        bytes32 _date
        
    ) public{
        stReg[_regno].loanstr[stReg[_regno]._loancount].id = stReg[_regno]._loancount;
        stReg[_regno].loanstr[stReg[_regno]._loancount].loanamount = _loanamount;
        stReg[_regno].loanstr[stReg[_regno]._loancount].totalreturn = _totalreturn;
        stReg[_regno].loanstr[stReg[_regno]._loancount].noOfDays = _noOfDays;
        stReg[_regno].loanstr[stReg[_regno]._loancount].noOfinstallment = _noOfinstallment;
        stReg[_regno].loanstr[stReg[_regno]._loancount].primiumPercent = _primiumPercent;
        stReg[_regno].loanstr[stReg[_regno]._loancount].remark = _remarks;
        stReg[_regno].loanstr[stReg[_regno]._loancount].loantakenBY = _loantakenBY;
        stReg[_regno].loanstr[stReg[_regno]._loancount].date = _date;
        stReg[_regno].loanstr[stReg[_regno]._loancount].loanstatus = 0;
        stReg[_regno]._loancount++;
    }

    function updateloanAmount(
        uint _regno,
        uint _loanID,
        uint _loanamount 
    )public{
        stReg[_regno].loanstr[_loanID].loanamount = _loanamount;
    }

    function updatepartialloan(
        uint _regno,
        uint _loanID,
        uint _partial 
    )public{
        stReg[_regno].loanstr[_loanID].partial = _partial;
    }


    function updateloanGiven(
        uint _regno,
        uint _loanID,
        uint _loanGivenBy

    )public{
        stReg[_regno].loanstr[_loanID].loanGivenBy = _loanGivenBy;
        stReg[_regno].loanstr[_loanID].loanstatus = 1;
    }

    /**show loan */
    function showAllLoan1(uint _regno) public constant returns(
        uint[],
        uint[],
        uint[],
        uint[],
        uint[] 
    ){
        uint _totalloancount = stReg[_regno]._loancount;
        uint[] memory _loanamount = new uint[](_totalloancount);
        uint[] memory _totalreturn = new uint[](_totalloancount);
        uint[] memory _noOfDays = new uint[](_totalloancount);
        uint[] memory _noOfinstallment = new uint[](_totalloancount);
        uint[] memory _primiumPercent = new uint[](_totalloancount);

        for (uint i = 0; i < _totalloancount; i++){
            _loanamount[i] = stReg[_regno].loanstr[i].loanamount;
            _totalreturn[i] = stReg[_regno].loanstr[i].totalreturn;
            _noOfDays[i] = stReg[_regno].loanstr[i].noOfDays;
            _noOfinstallment[i] = stReg[_regno].loanstr[i].noOfinstallment;
            _primiumPercent[i] = stReg[_regno].loanstr[i].primiumPercent;
        }
        return(_loanamount, _totalreturn, _noOfDays, _noOfinstallment, _primiumPercent);
    }

    function showAllLoan2(uint _regno) public constant returns(
        uint[],
        bytes32[],
        uint[],
        uint[],
        bytes32[]
          
    ){
        uint _totalloancount = stReg[_regno]._loancount;
       
        uint[] memory _loanstatus = new uint[](_totalloancount);
        bytes32[] memory _remark = new bytes32[](_totalloancount);
        uint[] memory _loanGivenBy = new uint[](_totalloancount);
        uint[] memory _loantakenBY = new uint[](_totalloancount);
        bytes32[] memory _date = new bytes32[](_totalloancount);
        

        for (uint i = 0; i < _totalloancount; i++){
            _loanstatus[i] = stReg[_regno].loanstr[i].loanstatus;
            _remark[i] = stReg[_regno].loanstr[i].remark;
            _loanGivenBy[i] = stReg[_regno].loanstr[i].loanGivenBy;
            _loantakenBY[i] = stReg[_regno].loanstr[i].loantakenBY;
            _date[i] = stReg[_regno].loanstr[i].date;
            
        }
        return(_loanstatus, _remark, _loanGivenBy, _loantakenBY, _date);
    }

    function showAllLoan3(uint _regno) public constant returns(
          uint[]  
    ){
        uint _totalloancount = stReg[_regno]._loancount;
       
        
        uint[] memory _partial = new uint[](_totalloancount);

        for (uint i = 0; i < _totalloancount; i++){
            
            _partial[i] = stReg[_regno].loanstr[i].partial;
        }
        return(_partial);
    }



    /**insert data in registration contract */
    function insertReg(
        bytes32 _name, 
        uint _adharNo, 
        uint _contactNo, 
        uint _altContactNo, 
        bytes32 _emailAdd,
        bytes32 _add, 
        bytes32 _pssword, 
        bytes32 _acountPublicADD, 
        bytes32 _state, 
        bytes32 _district,
        uint _loanpoints
        
       
        )public
        {
            stReg[_regID].name = _name;
            stReg[_regID].adharNo = _adharNo;
            stReg[_regID].contactNO = _contactNo;
            stReg[_regID].altContactNo = _altContactNo;
            stReg[_regID].emailAdd = _emailAdd;
            stReg[_regID].addressUser = _add;
            stReg[_regID].password = _pssword;
            stReg[_regID].acountPublicADD = _acountPublicADD;
            stReg[_regID].state = _state;
            stReg[_regID].district = _district;
            stReg[_regID].loanpoints = _loanpoints;
          
            _regID++;
        }

   

    /**update registration data */
    function updateReg (
        bytes32 _name, 
        uint _adharNo, 
        uint _contactNo, 
        uint _altContactNo, 
        bytes32 _emailAdd, 
        bytes32 _add, 
        uint _rID,
        bytes32 _pssword,
        bytes32 _acountPublicADD, 
        bytes32 _state, 
        bytes32 _district,
        uint _loanpoints

        ) public {
        stReg[_rID].name = _name;
        stReg[_rID].adharNo = _adharNo;
        stReg[_rID].contactNO = _contactNo;
        stReg[_rID].altContactNo = _altContactNo;
        stReg[_rID].emailAdd = _emailAdd;
        stReg[_rID].addressUser = _add;
        stReg[_rID].password = _pssword;
        stReg[_rID].acountPublicADD = _acountPublicADD;
        stReg[_rID].state = _state;
        stReg[_rID].district = _district;
        stReg[_rID].loanpoints = _loanpoints;
    }

    /**update points of borrow  */
    function updatepoints (uint _rID, uint _loanpoints) public {
        stReg[_rID].loanpoints = _loanpoints;
    }
    
    /**show regdata single user */
    function showRegDataSingle (uint _rID) public constant returns(
        bytes32 name_,
        uint loanpoints_,
        uint contactNO_,
     
        bytes32 emailAdd_,
        bytes32 acountPublicADD_,
        bytes32 password_
    ) {
        return(
            stReg[_rID].name, 
            stReg[_rID].loanpoints, 
            stReg[_rID].contactNO, 
            stReg[_rID].emailAdd, 
            stReg[_rID].acountPublicADD,
            stReg[_rID].password
            );
    }

    /**show all regdata  */
    function showRegData () public constant returns(
        bytes32[],
        bytes32[],
        uint[],
        bytes32[]
    ){
        uint totaldata = _regID;
        bytes32[] memory name_ = new bytes32[](totaldata);
        //
        //uint[] memory contactNO_ = new uint[](totaldata);
        //uint[] memory altContactNo_ = new uint[](totaldata);
        //bytes32[] memory emailAdd_ = new bytes32[](totaldata);
        //
        bytes32[] memory password_ = new bytes32[](totaldata);
        uint[] memory loanpoints_ = new uint[](totaldata);
        bytes32[] memory district_ = new bytes32[](totaldata);

        for (uint i = 0; i < totaldata; i++){
            name_[i] = stReg[i].name;
          //  adharNo_[i] = stReg[i].adharNo;
          //  contactNO_[i] = stReg[i].contactNO;
          //  altContactNo_[i] = stReg[i].altContactNo;
          //  emailAdd_[i] = stReg[i].emailAdd;
          //  addressUser_[i] = stReg[i].addressUser;
            password_[i] = stReg[i].password;
            loanpoints_[i] = stReg[i].loanpoints;
            district_[i] = stReg[i].district;
        }

        //return(name_, adharNo_, contactNO_, altContactNo_, emailAdd_, addressUser_, password_ );
        return(name_, password_, loanpoints_, district_);
    }

}


