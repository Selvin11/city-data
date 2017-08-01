import * as cvux from '../../data/china_address_cvux'
import {actualProvince, actualCity, actualArea} from '../../scripts/actual-data'
import {expect} from 'chai'



describe('cvux数据的测试', function() {
  it('省市区数量总数与数据源一致', function() {
    expect(cvux.default.length).to.be.equal(actualProvince + actualCity + actualArea)
  })
})
