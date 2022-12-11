<a name="Watermark"></a>

## Watermark
Create watermark for webpage and automatic adjust when windows resize.

**Kind**: global class  
**Version**: 1.0.4  
**Author**: Lruihao  

* [Watermark](#Watermark)
    * [new Watermark(options)](#new_Watermark_new)
    * [.upload(content)](#Watermark+upload)
    * [.render(options)](#Watermark+render)
    * [.destroy()](#Watermark+destroy)

<a name="new_Watermark_new"></a>

### new Watermark(options)
Constructor of Watermark


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| [options.content] | <code>String</code> |  | watermark's text |
| [options.appendTo] | <code>String</code> | <code>&#x27;body&#x27;</code> | parent of watermark's container |
| [options.width] | <code>Number</code> | <code>150</code> | watermark's width. unit: px |
| [options.height] | <code>Number</code> | <code>20</code> | watermark's height. unit: px |
| [options.rowSpacing] | <code>Number</code> | <code>60</code> | row spacing of watermarks. unit: px |
| [options.colSpacing] | <code>Number</code> | <code>30</code> | col spacing of watermarks. unit: px |
| [options.rotate] | <code>Number</code> | <code>15</code> | watermark's tangent angle. unit: deg |
| [options.opacity] | <code>Number</code> | <code>0.1</code> | watermark's transparency |
| [options.fontSize] | <code>Number</code> | <code>0.85</code> | watermark's fontSize. unit: rem |
| [options.fontFamily] | <code>Number</code> | <code>&#x27;inherit&#x27;</code> | watermark's fontFamily. |

<a name="Watermark+upload"></a>

### watermark.upload(content)
Upload watermark's text content

**Kind**: instance method of [<code>Watermark</code>](#Watermark)  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | watermark's text |

<a name="Watermark+render"></a>

### watermark.render(options)
Rerender watermark

**Kind**: instance method of [<code>Watermark</code>](#Watermark)  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | see [Constructor](#Watermark) |

<a name="Watermark+destroy"></a>

### watermark.destroy()
Force destroy watermark

**Kind**: instance method of [<code>Watermark</code>](#Watermark)  
**Since**: 1.0.0  
