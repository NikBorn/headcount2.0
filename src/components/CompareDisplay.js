import React from 'react';
import DistrictCard from './DistrictCard.js';
import FullCompareSection from './FullCompareSection.js';
import PropTypes from 'prop-types';


const CompareDisplay = ({ compareArray, fetchCompareObj, handleSelected} ) => {
  let dist1 = compareArray[0];
  let dist2 = compareArray[1];

  return (
      <div className='compare-display'>
      
          {compareArray.length === 2 &&
              <FullCompareSection    district1={dist1}
                                     district2={dist2}
                       fetchCompareObj={fetchCompareObj} 
                                handleSelected={handleSelected}/>
          }

          {compareArray.length === 1 &&
            <DistrictCard districtData={dist1.data}
                   districtLocation={dist1.location}
                     handleSelected={handleSelected}
                                 id={dist1.id}
                                key={dist1.id}
                         isSelected={dist1.isSelected}
                         
              />
          }


      </div>
  );
};

CompareDisplay.propTypes = {
  compareArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCompareObj: PropTypes.func.isRequired,
  handleSelected: PropTypes.func.isRequired
};

export default CompareDisplay;