# Watermark

Create watermark for webpage and automatic adjust when windows resize.

## [Documentation](/docs/README.md)

## Usage

### Browser

1. Clone source

    ```bash
    git clone git@github.com:Lruihao/watermark.git
    ```

2. Load `Watermark`

    ```html
    <script type="text/javascript" src="./src/watermark.js"></script>
    <!-- Or CDN -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/cell-watermark"></script>
    ```

3. Initialization

    ```javascript
    document.addEventListener('DOMContentLoaded', function () {
      new Watermark({
        content: "cell-watermark"
      })
    });
    ```

### NPM

1. Install

    ```bash
    npm i cell-watermark
    ```

2. Import

    ```javascript
    import Watermark from 'cell-watermark'
    /* Or */
    var Watermark = require("cell-watermark")
    ```
