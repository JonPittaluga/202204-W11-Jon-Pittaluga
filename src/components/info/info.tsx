import React from 'react';

export function Info(props: any) {
  return (
    <p className="info">
      {props.count === 0
        ? 'Select a gentleman, please'
        : props.count > 1
        ? `${props.count} gentlemen pointing at you`
        : `${props.count} gentleman pointing at you`}
    </p>
  );
}
