import React from 'react'
import Component from './12_ComponentSetState'

export default {
  title: '12 Component setState',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
