import {province, city, area} from '../../data/china_address_pc'
import * as data from '../../back_end_data'
import {expect} from 'chai'

let actualProvince = Object.keys(data['86']).length

describe('cvux数据的测试', function() {
  it('总数与数据源一致', function() {
    expect(province.length).to.be.equal(actualProvince)
  })
})
