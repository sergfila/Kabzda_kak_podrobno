import type { Meta, StoryObj } from '@storybook/react';
import {UseCallback} from "./UseCallback";

const meta: Meta<typeof UseCallback> = {
    title: 'Use/UseCallback',
    component: UseCallback,
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

}