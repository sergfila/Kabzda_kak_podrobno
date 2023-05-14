import type {Meta, StoryObj} from '@storybook/react';
import Rating from './Rating';

const meta: Meta<typeof Rating> = {
    title: 'Controls/Rating',
    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'select'},
            options: [16, 24, 32]
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>

export const normal: Story = {
    args: {
        value: 3,
        size: 16
    }
}

export const large: Story = {
    args: {
        value: 3,
        size: 24
    }
}

export const extraLarge: Story = {
    args: {
        value: 3,
        size: 32
    }
}