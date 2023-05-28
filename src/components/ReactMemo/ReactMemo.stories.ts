import type { Meta, StoryObj } from '@storybook/react';
import {ReactMemo} from "./ReactMemo";

const meta: Meta<typeof ReactMemo> = {
    title: 'Uncontrolled/ReactMemo',
    component: ReactMemo,
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