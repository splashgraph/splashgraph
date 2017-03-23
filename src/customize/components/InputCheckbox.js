import React from 'react';

export default props => {
  const setOption = event => props.setOption(props.option.name, event.target.checked);
  return (
    <div>
      <input type="checkbox" checked={props.value} onChange={setOption}/>
    </div>
  );
};