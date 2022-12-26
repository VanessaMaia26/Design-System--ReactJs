/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from '@storybook/react'
import  {Text, TextProps} from '@ignite-ui/react/src'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam, error vel ab voluptates soluta quidem nisi sit molestiae, aspernatur culpa nesciunt aperiam quo exercitationem reprehenderit similique non. Iusto, sapiente.',
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    },
} 