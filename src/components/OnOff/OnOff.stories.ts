import type { Meta, StoryObj } from '@storybook/react';
import OnOff from './OnOff';



const meta: Meta<typeof OnOff> = {
    title: 'Controls/OnOff',
    component: OnOff,
    tags: ['autodocs'],
    argTypes: {
        on: {
            control: {type: 'boolean'},
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>

export const OnMode: Story = {
    args: {
        on: true
    }
}

export const OffMode: Story = {
    args: {
        on: false
    }
}