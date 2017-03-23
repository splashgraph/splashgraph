import React from 'react';

export default props => {
  const setOption = event => props.setOption(props.option.name, event.target.value);
  return (
    <div>
      <input type="number" value={props.value} onChange={setOption}/>
    </div>
  );
};