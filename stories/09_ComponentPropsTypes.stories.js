import React from 'react'
import Component from './09_ComponentPropsTypes'

export default {
  title: '09 Component Props Types',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
