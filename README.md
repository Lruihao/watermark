# Class: Watermark
## Watermark(options)

#### new Watermark(options)

##### Parameters:

| Name    | Type   | Description                       |
| ------- | ------ | --------------------------------- |
| options | Object | 選項（[Properties](#properties)） |

###### Properties:

| Name       | Type   | Attributes | Default | Description                          |
| ---------- | ------ | ---------- | :------ | ------------------------------------ |
| content    | String | \<optional\> |         | watermark's text                     |
| width      | Number | \<optional\> | 150     | watermark's width. unit: px          |
| height     | Number | \<optional\> | 20      | watermark's height. unit: px         |
| rowSpacing | Number | \<optional\> | 60      | row spacing of watermarks. unit: px  |
| colSpacing | Number | \<optional\> | 30      | col spacing of watermarks. unit: px  |
| rotate     | Number | \<optional\> | 15      | watermark's tangent angle. unit: deg |
| opacity    | Number | \<optional\> | 0.1     | watermark's transparency             |
| fontSize   | Number | \<optional\> | 0.85    | watermark's fontSize. unit: rem      |


> Version: 1.0.1
> Author: Lruihao

### Methods

#### upload(content)

Upload watermark's text content

##### Parameters:
|  Name   |  Type  |   Description    |
| :-----: | :----: | :--------------: |
| content | String | watermark's text |

#### render(options)
Rerender watermark

##### Parameters:

| Name    | Type   | Description                         |
| ------- | ------ | ----------------------------------- |
| options | Object | 選項（[Properties](#properties-1)） |

###### Properties:

| Name       | Type   | Attributes | Default | Description                          |
| ---------- | ------ | ---------- | :------ | ------------------------------------ |
| content    | String | \<optional\> |         | watermark's text                     |
| width      | Number | \<optional\> | 150     | watermark's width. unit: px          |
| height     | Number | \<optional\> | 20      | watermark's height. unit: px         |
| rowSpacing | Number | \<optional\> | 60      | row spacing of watermarks. unit: px  |
| colSpacing | Number | \<optional\> | 30      | col spacing of watermarks. unit: px  |
| rotate     | Number | \<optional\> | 15      | watermark's tangent angle. unit: deg |
| opacity    | Number | \<optional\> | 0.1     | watermark's transparency             |
| fontSize   | Number | \<optional\> | 0.85    | watermark's fontSize. unit: rem      |

#### destroy()

Force destroy watermark