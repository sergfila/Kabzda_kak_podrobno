import type { Meta, StoryObj } from '@storybook/react';
import {Select} from "./Select";

const meta: Meta<typeof Select> = {
    title: 'Controls/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: {
                disable: true,
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: [
            {title: 'Red', value: 1},
            {title: 'Green', value: 2},
            {title: 'Yellow', value: 3},
            {title: 'Gray', value: 4}
        ]
    }
}