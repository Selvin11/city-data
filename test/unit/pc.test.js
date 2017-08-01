import {province, city, area} from '../../data/china_address_pc'
import {actualProvince, actualCity, actualArea} from '../../scripts/actual-data'
import {expect} from 'chai'

describe('pc数据的测试', function() {
  it('省级数量与数据源一致', function() {
    expect(province.length).to.be.equal(actualProvince)
  })
  it('市级数量与数据源一致', function() {
    expect(city.length).to.be.equal(actualCity)
  })
  it('区级数量与数据源一致', function() {
    expect(area.length).to.be.equal(actualArea)
  })
})
