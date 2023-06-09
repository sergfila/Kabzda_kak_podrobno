import type { Meta, StoryObj } from '@storybook/react';
import UseState from "./UseState";

const meta: Meta<typeof UseState> = {
    title: 'Use/UseState',
    component: UseState,
    // tags: ['autodocs'],
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

}