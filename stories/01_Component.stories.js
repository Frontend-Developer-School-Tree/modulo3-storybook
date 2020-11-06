import React from 'react'
import Component from './01_Component'

export default {
  title: '01 Component',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
