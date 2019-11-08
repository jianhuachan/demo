import React from 'react'
import { mount } from 'enzyme'
import InputComp from '../InputComp'

describe('InputComp Test', () => {
  it('When Input change, onInputChange should be called', () => {
    const onInputChange = jest.fn()
    const wrapper = mount(<InputComp onInputChange={onInputChange} />)

    wrapper.find('.ant-input').simulate('change')
    expect(onInputChange).toHaveBeenCalled()
    wrapper.find('.ant-input').simulate('change')
    expect(onInputChange).toHaveBeenCalledTimes(2)
  })
})
