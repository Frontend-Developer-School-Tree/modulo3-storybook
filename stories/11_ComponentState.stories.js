import React from 'react'
import Component from './11_ComponentState'

export default {
  title: '11 Component State',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
