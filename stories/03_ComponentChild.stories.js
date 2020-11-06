import React from 'react'
import Component from './03_ComponentChild'

export default {
  title: '03 Child Component',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
