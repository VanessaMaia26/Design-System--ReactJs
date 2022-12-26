/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from '@storybook/react'
import  {Heading, HeadingProps} from '@ignite-ui/react/src'

export default {
    title: 'Typography/Text',
    component: Heading,
    args: {
        children: 'Custom title'
    },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1',
    },
} 