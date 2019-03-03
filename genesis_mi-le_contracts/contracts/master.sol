pragma solidity ^0.4.17;

contract Master {

mapping (uint => stateStruct) stStruct;

uint _stateCount = 0;
    /**State Structure */
    struct stateStruct {
        uint id;
        bytes32 stateName;
        uint _ditrictCount;
        mapping (uint => districtStruct) distStruct; 

    }

    /**District Structure */
    struct districtStruct {
        uint id;
        bytes32 districtName;
    }

    /**insert State*/
    function insertState (bytes32 _stateName ) public {
        stStruct[_stateCount].stateName = _stateName;
        stStruct[_stateCount].id = _stateCount;
        _stateCount++;

    } 
    /**show State*/
    function showState () public constant returns(bytes32[], uint[]) {
        uint _totalStates = _stateCount;
        bytes32[] memory stateName_ = new bytes32[](_totalStates); 
        uint[] memory id_ = new uint[](_totalStates);

        for (uint i = 0; i < _totalStates; i++) {
            stateName_[i] = stStruct[i].stateName;
            id_[i] = stStruct[i].id;
        }

        return(stateName_, id_);

    }

    /** insert District */
    function insertDistrict (uint _stateID, bytes32 _districtName) public {
        stStruct[_stateID].distStruct[stStruct[_stateID]._ditrictCount].districtName = _districtName;
        stStruct[_stateID].distStruct[stStruct[_stateID]._ditrictCount].id = stStruct[_stateID]._ditrictCount;
        stStruct[_stateID]._ditrictCount++;
    }

    /**show district */
    function showDistricts (uint _stateID) public constant returns (bytes32[], uint[]){
        uint _totalDistrict = stStruct[_stateID]._ditrictCount;

        bytes32[] memory districtName_ = new bytes32[](_totalDistrict);
        uint[] memory id_ = new uint[](_totalDistrict);

        for (uint i = 0; i < _totalDistrict; i++){
            districtName_[i] = stStruct[_stateID].distStruct[i].districtName;
            id_[i] = stStruct[_stateID].distStruct[i].id;

        }
        return(districtName_, id_);
    }

}  