import type { Meta, StoryObj } from '@storybook/react';
import UseEffect from "./UseEffect";

const meta: Meta<typeof UseEffect> = {
    title: 'Use/UseEffect',
    component: UseEffect,
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