import type { Meta, StoryObj } from '@storybook/react';
import {UseMemo} from "./UseMemo";

const meta: Meta<typeof UseMemo> = {
    title: 'Uncontrolled/UseMemo',
    component: UseMemo,
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