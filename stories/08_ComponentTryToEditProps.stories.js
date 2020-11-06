import React from 'react'
import Component from './08_ComponentTryToEditProps'

export default {
  title: '08 Component Try to edit Props',
  component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
