import type { Meta, StoryObj } from '@storybook/vue3'
import Pagination from '@/components/Pagination.vue'

const meta = {
  title: 'Control/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: { control: 'number', description: 'Total number of pages' },
    hasPreviousPage: { control: 'boolean', description: 'Can navigate to the previous page' },
    hasNextPage: { control: 'boolean', description: 'Can navigate to the next page' },
    currentPage: { control: 'number', description: 'Current active page' }
  },
  args: {
    totalPages: 5,
    hasPreviousPage: true,
    hasNextPage: true,
    currentPage: 1
  }
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
    hasPreviousPage: false,
    hasNextPage: true
  }
}

export const FirstPageActive: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
    hasPreviousPage: false,
    hasNextPage: true
  }
}

export const MiddlePageActive: Story = {
  args: {
    totalPages: 5,
    currentPage: 3,
    hasPreviousPage: true,
    hasNextPage: true
  }
}

export const LastPageActive: Story = {
  args: {
    totalPages: 5,
    currentPage: 5,
    hasPreviousPage: true,
    hasNextPage: false
  }
}
