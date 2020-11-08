import React from 'react'
import Component from './10_ComponentPropsErrors'

export default {
  title: '10 Component Props Errors',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
