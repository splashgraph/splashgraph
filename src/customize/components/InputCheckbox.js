import React from 'react';

export default props => {
  const setOption = event => props.setOption(props.option.name, event.target.checked);
  return (
    <div className="form-group">
      <input className="form-group__checkbox" type="checkbox" checked={props.value} onChange={setOption}/>
      <label className="form-group__label form-group__label--inline">{props.option.label}</label>
    </div>
  );
};
