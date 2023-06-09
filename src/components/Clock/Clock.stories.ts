import type { Meta, StoryObj } from '@storybook/react';
import Clock from "./Clock";

const meta: Meta<typeof Clock> = {
    title: 'Uncontrolled/Clock',
    component: Clock,
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