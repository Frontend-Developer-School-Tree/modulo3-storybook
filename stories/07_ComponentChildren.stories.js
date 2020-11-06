import React from 'react'
import Component from './07_ComponentChildren'

export default {
  title: '07 Component Children',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
