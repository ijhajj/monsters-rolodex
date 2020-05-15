import React from 'react';
import './button.css';

export default function ({label}) {
  return (
    <div data-testid="button" className="button-style">
     Hi {label}
    </div>
  )
}
