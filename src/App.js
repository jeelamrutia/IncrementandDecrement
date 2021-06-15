import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {

  const [num, setnum] = useState(0);

  const incNum = () => {
    setnum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      alert('sorry, zero limit reached')
      setnum(0);
    }
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <Tooltip title="Add">
              <Button onClick={incNum}>
                < AddIcon /> </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decNum}> <RemoveIcon /></Button>
            </Tooltip>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;