import type { Meta, StoryObj } from '@storybook/react';
import {Accordion} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    title: 'Controls/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        collapsed: {
            control: {type: 'boolean'},
            options: [true, false]
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>

export const Collapsed: Story = {
    args: {
        collapsed: true,
        title: 'Collapsed'
    }
}

export const UnCollapsed: Story = {
    args: {
        collapsed: false,
        title: 'UnCollapsed'
    }
}