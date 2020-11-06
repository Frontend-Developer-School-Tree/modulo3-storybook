import React from 'react'
import Component from './06_ComponentChildProps'

export default {
  title: '06 Child Component with props',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
