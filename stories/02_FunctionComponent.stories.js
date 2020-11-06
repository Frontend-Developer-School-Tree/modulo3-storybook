import React from 'react'
import FunctionComponent from './02_FunctionComponent'

export default {
  title: '02 Function Component',
  component: FunctionComponent
}

const Template = (args) => <FunctionComponent {...args} />

export const Default = Template.bind({})
Default.args = {}
