import type { Meta, StoryObj } from '@storybook/react';
import UncontrolledOnOff from "./UncontrolledOnOff";

const meta: Meta<typeof UncontrolledOnOff> = {
    title: 'Uncontrolled/uOnOff',
    component: UncontrolledOnOff,
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

export const ChangeMode: Story = {}