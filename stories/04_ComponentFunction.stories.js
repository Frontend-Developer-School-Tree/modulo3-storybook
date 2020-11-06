import React from 'react'
import Component from './04_ComponentFunction'

export default {
  title: '04 Component Function',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
