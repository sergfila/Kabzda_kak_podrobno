import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledAccordion} from "./UnControlledAccordion";

const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'Uncontrolled/uAccordion',
    component: UncontrolledAccordion,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>

export const Collapsed: Story = {
    args: {
        title: 'ClickMe',
    }
}