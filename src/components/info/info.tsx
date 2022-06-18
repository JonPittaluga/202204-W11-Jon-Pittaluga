import React from 'react';

export function Info(props: any) {
  return (
    <p className="info">
      {props.number === 0
        ? 'Select a gentleman, please'
        : props.number > 1
        ? `${props.number} gentlemen pointing at you`
        : `${props.number} gentleman pointing at you`}
    </p>
  );
}
