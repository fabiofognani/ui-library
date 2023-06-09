import type { Meta, StoryObj } from '@storybook/react';
import { CardList } from './CardList';

const meta = {
  title: 'Cards/CardList',
  component: CardList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardList1: Story = {
  args: { 
    title: 'ciao'
  },
};

export const CardList2: Story = {};
