> cityData 中国省市区三级联动数据

  [![npm](https://img.shields.io/badge/npm-6.11.1-blue.svg)](https://www.npmjs.com/package/city-data)
  [![npm](https://img.shields.io/npm/dw/city-data.svg)](https://www.npmjs.com/package/city-data)

## 使用说明

1. 安装npm包：`npm install city-data`

2. 源数据为`back_end_data.js`，我司后端使用的源数据

3. 生成前端数据格式的指令：
  * `npm run build-cvux`：生成前端`cvux`中使用的数据格式，`./data/china_address_cvux.json`

    ```javascript
      [
        {
            "name": "北京市",
            "value": "110000"
        },
        ...
      ]
    ```

  * `npm run build-pc`：生成前端`pc`中使用的数据格式，`./data/china_address_pc.js`

    ```javascript
      export const province = [...]
      export const city = [...]
      export const area = [...]
    ```




## 数据来源说明

* 参照`china-area-data`npm包，使用国家统计局发布的省市区文件，根据我司业务情况，对数据进行了修改



## License

  [MIT](LICENSE)