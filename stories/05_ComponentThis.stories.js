import React from 'react'
import Component from './05_ComponentThis'

export default {
  title: '05 This inside components',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
