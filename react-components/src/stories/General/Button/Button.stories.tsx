import type { Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta = {
  title: 'General/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

// props for button stories
const props = {
  fill: [true, false],
  type: ['' , 'default' , 'primary' , 'danger' , 'warning' , 'success' , 'info'],
  size: ['sm', 'md', 'lg'],
}

const options: ButtonProps[] = [];

props.fill.forEach(fillValue => {
  props.type.forEach(typeValue => {
    props.size.forEach(sizeValue => {
      let _args = { fill: fillValue, type: typeValue, size: sizeValue } as ButtonProps
      return options.push({..._args});
    });
  });
});

export const SimpleButton = (args: typeof Button) => <Button {...args}/>;
SimpleButton.args={
  label : "Simple Button",
};

export const AllButtons = (args: typeof Button) => options.map(option=>
  <Button {...args} {...option}/>
);

AllButtons.args={
  label : 'Button'
}

