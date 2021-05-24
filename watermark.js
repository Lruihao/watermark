/* global Watermark */

var Watermark = function () {

  var _wmContainer;
  var _wmObserver;
  var _wmParentObserver;
  var _windowsWidth = window.outerWidth;
  var _windowsHeight = window.outerHeight;

  /**
   * create DOM of watermark's container 
   * @param {Watermark} watermark
   */
  var _createContainer = function (watermark) {
    watermark._container = document.createElement('div');
    $(watermark._container).appendTo(watermark.options.appendTo || '.cell-main-container')
            .addClass('cell-watermark-container')
            .css({
              'display': 'block',
              'pointer-events': 'none'
            })
            .attr('aria-hidden', true);
  };

  /**
   * create watermark's DOM
   * @param {Watermark} watermark
   * @param {Object} options
   */
  var _createWatermark = function (watermark, options) {
    options.rowSpaceing = options.rowSpaceing || 50;
    options.colSpaceing = options.colSpaceing || 30;
    options.width = options.width || 150;
    options.height = options.height || 20;
    let navbarHeight = $('.cell-navbar').outerHeight() || 0;
    let rows = parseInt((_windowsHeight - navbarHeight) / (options.height + options.rowSpaceing));
    let cols = parseInt(_windowsWidth / (options.width + options.colSpaceing));
    let offsetLeft = (_windowsWidth - options.width * cols - options.colSpaceing * (cols - 1)) / 2;
    let offsetTop = navbarHeight / 2 + (_windowsHeight - options.height * rows - options.rowSpaceing * (rows - 1)) / 2;
    let $watermark = $(document.createElement('div'))
            .addClass('cell-watermark')
            .css({
              'transform': 'rotate(15deg)',
              'opacity': '0.1',
              'font-size': '0.85rem',
              'text-align': 'center',
              'position': 'fixed',
              'user-select': 'none',
              'word-break': 'break-all',
              'overflow': 'hidden',
              'z-index': 999999
            });
    for (let row = 0; row < rows; row++) {
      let top = offsetTop + (options.rowSpaceing + options.height) * row;
      for (let col = 0; col < cols; col++) {
        let left = offsetLeft + (options.colSpaceing + options.width) * col;
        $watermark.clone().appendTo(watermark._container)
                .addClass('cell-watermark')
                .css({
                  'left': `${left}px`,
                  'top': `${top}px`,
                  'width': `${options.width}px`,
                  'height': `${options.height}px`,
                  'transform': `rotate(${options.rotate}deg)`,
                  'opacity': `${options.opacity}`,
                  'font-size': `${options.fontSize}rem`
                })
                .html(options.content);
      }
    }
    //Backup for recover the watermark's container when the its DOM is removed
    _wmContainer = watermark._container;
  };

  /**
   * Re render watermark
   * @param {Watermark} watermark
   * @param {Object} options
   */
  var _render = function (watermark, options) {
    _wmObserver.disconnect();
    $(watermark._container).empty();
    _createWatermark(watermark, options);
    _wmObserver.observe(watermark._container, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  };

  /**
   * Observe watermark and watermark's parentNode mutations
   * @param {Watermark} watermark
   */
  var _addObserve = function (watermark) {
    //observe watermark element and its child element
    _wmObserver = new MutationObserver(function (mutations, observer) {
      _render(watermark, watermark.options);
    });
    _wmObserver.observe(watermark._container, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
    //observe parent element, recreate if the element is deleted
    _wmParentObserver = new MutationObserver(function (mutations) {
      for (let m of mutations) {
        if (m.type === 'childList' && m.removedNodes.length > 0
                && $('.cell-watermark-container').length === 0) {
          $(_wmContainer).appendTo(watermark.options.appendTo || '.cell-main-container');
        }
      }
    });
    _wmParentObserver.observe(watermark._container.parentNode, {
      childList: true,
      subtree: true
    });
  };

  /**
   * windows resize listener
   * @param {Watermark} watermark
   */
  var _addResizeListener = function (watermark) {
    $(window).on('resize', function () {
      if (window.outerHeight !== _windowsHeight || window.outerWidth !== _windowsWidth) {
        _windowsHeight = window.outerHeight;
        _windowsWidth = window.outerWidth;
        _render(watermark, watermark.options);
      }
    });
  };

  /**
   * Watermark.
   * create watermark for webpage and automatic adjust when windows resie.
   * @param {Object} options
   * @param {String} [options.content] watermark's text
   * @param {String|Element} [options.appendTo || '.cell-main-container] parent of watermark's container 
   * @param {Number} [options.width=150] watermark's width. unit: px
   * @param {Number} [options.height=20] watermark's height. unit: px
   * @param {Number} [options.RowSpaceing=50] row spaceing of watermarks. unit: px
   * @param {Number} [options.colSpaceing=30] col spaceing of watermarks. unit: px
   * @param {Number} [options.rotate=15] watermark's tangent angle. unit: deg
   * @param {Number} [options.opacity=0.1] watermark's transparency
   * @param {Number} [options.fontSize=0.85] watermark's fontSize. unit: rem
   * @namespace Watermark
   * @class Watermark
   * @since 1.0.0
   * @author Lruihao
   */
  function Watermark(options = {}) {
    var _proto = Watermark.prototype;
    this.options = options;
    _createContainer(this);
    _createWatermark(this, this.options);
    _addObserve(this);
    _addResizeListener(this);

    /**
     * upload watermark's text content
     * @param {String} content watermark's text
     */
    _proto.upload = function (content) {
      if (!content) {
        return;
      }
      _wmParentObserver.disconnect();
      _wmObserver.disconnect();
      this.options.content = content;
      $(this._container).find('.cell-watermark')
              .html(content);
      _wmParentObserver.observe(this._container.parentNode, {
        childList: true,
        subtree: true
      });
      _wmObserver.observe(this._container, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });

    };

    /**
     * Re render watermark
     * @param {Object} options
     */
    _proto.render = function (options = {}){
      _render(this, Object.assign(this.options, options));
    };

    /**
     * Force destroy watermark
     */
    _proto.destroy = function () {
      _wmObserver.disconnect();
      _wmParentObserver.disconnect();
      $(window).off('resize');
      $(this._container).remove();
    };
  }
  return Watermark;
}();