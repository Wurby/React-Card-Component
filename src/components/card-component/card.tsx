import React, { useState } from 'react';
export const foo = '';

export interface Props {
  title?: string;
  content?: string;
  imgSrc?: string;
  imgAlt?: string;
  buttons?: Array<{ text: string; action: any }>;
}

/**
 * The basic Card. Accepts several properties to render content.
 *
 * @example import { Card } from './components/card-component/card'
 *
 * <Card Title="title" Content="content" imgSrc="www.example.com"
 * imgAlt="This is an example" buttons="[{text: 'button1Text', onClick: ''}, {text: 'button1Text', onClick: Function()}">
 * </Card>
 */
function Card(props: Props) {
  if (props.buttons) {
    var buttonsTsx = props.buttons.map((button) => {
      return (
        <button
          className="button"
          onClick={() => {
            button.action();
          }}
        >
          {button.text}
        </button>
      );
    });
  }
  if (props.imgSrc) {
    var img = (
      <img src={props.imgSrc} alt={props.imgAlt} className="card-img" />
    );
  }

  const tsx = (
    <div className="card-wrapper">
      <div className="card-header">
        {img}
        <h1>{props.title}</h1>
      </div>
      <p>{props.content}</p>
      {buttonsTsx}
    </div>
  );
  return tsx;
}

export default Card;
