import type { Meta, StoryObj } from '@storybook/react';
import {UnControlledRating} from "./UnControlledRating";

const meta: Meta<typeof UnControlledRating> = {
    title: 'Uncontrolled/uRating',
    component: UnControlledRating,
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

export const ManualStar: Story = {}