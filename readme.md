# Блоки

Набор типовых блоков для построения структуры страниц.

### [Гайдлайн по созданию](https://github.com/constlab/sedona-blocks/blob/master/guidelines.md)

## Типы

### Глобальные

* [global](https://github.com/constlab/sedona-blocks/tree/master/src/global)

### Системные

Основа без которой не обойтись.

* [scene](https://github.com/constlab/sedona-blocks/tree/master/src/scene) ([пример](http://sedona.stage.constlab.ru/blocks/scene/))
* [wysiwyg](https://github.com/constlab/sedona-blocks/tree/master/src/wysiwyg) ([пример](http://sedona.stage.constlab.ru/blocks/wysiwyg/))

### Шаблонные

Самостоятельные блоки. Не могут вкладываться в другие.

* contact
* [footer](https://github.com/constlab/sedona-blocks/tree/master/src/footer)
* [header](https://github.com/constlab/sedona-blocks/tree/master/src/header)
* heading
* [notify](https://github.com/constlab/sedona-blocks/tree/master/src/notify) ([пример](http://sedona.stage.constlab.ru/blocks/notify/))
* pricing
* testimonials
* teams

### Содержательные

Могут использоваться как самостоятельные блоки, так и вкладываться в другие, но не сами в себя.

* carousel
* collapse
* [grid](https://github.com/constlab/sedona-blocks/tree/master/src/grid) ([пример](http://sedona.stage.constlab.ru/blocks/grid/))
* [slider](https://github.com/constlab/sedona-blocks/tree/master/src/slider) ([пример](http://sedona.stage.constlab.ru/blocks/slider/))
* tabs

### Инлайновые

Не могут использоваться как самостоятельные блоки, обязательно должны вкладываться в шаблонный или содержательный типы.

* [card](https://github.com/constlab/sedona-blocks/tree/master/src/card) ([пример](http://sedona.stage.constlab.ru/blocks/card/))
* [form](https://github.com/constlab/sedona-blocks/tree/master/src/form) ([пример](http://sedona.stage.constlab.ru/blocks/form/),  [валидация](http://sedona.stage.constlab.ru/blocks/form/validate.html))
  * [file](https://github.com/constlab/sedona-blocks/tree/master/src/file) ([пример](http://sedona.stage.constlab.ru/blocks/file/))
  * [range](https://github.com/constlab/sedona-blocks/tree/master/src/range) ([пример](http://sedona.stage.constlab.ru/blocks/range/))
* [social](https://github.com/constlab/sedona-blocks/tree/master/src/social) ([пример](http://sedona.stage.constlab.ru/blocks/social/))
* [table](https://github.com/constlab/sedona-blocks/tree/master/src/table) ([пример](http://sedona.stage.constlab.ru/blocks/table/))

## Установка

```
npm i sedona-blocks
```

## Подключение

В файле [gulpfile.js](https://github.com/constlab/sedona-basis/blob/master/gulpfile.js):

```js
…
main: [
  'node_modules/sedona-blocks/src/global/global.less',
  'node_modules/sedona-blocks/src/scene/scene.less',
  'node_modules/sedona-blocks/src/wysiwyg/wysiwyg.less',
  'node_modules/sedona-blocks/src/footer/footer.less',
  'node_modules/sedona-blocks/src/header/header.less',
  'node_modules/sedona-blocks/src/notify/notify.less',
  'node_modules/sedona-blocks/src/grid/grid.less',
  'node_modules/sedona-blocks/src/slider/slider.less',
  'node_modules/sedona-blocks/src/card/card.less',
  'node_modules/sedona-blocks/src/form/form.less',
  'node_modules/sedona-blocks/src/file/file.less',
  'node_modules/sedona-blocks/src/range/range.less',
  'node_modules/sedona-blocks/src/social/social.less',
  'node_modules/sedona-blocks/src/table/table.less',
  'src/less/main.less'
]
…
app: [
  'node_modules/sedona-blocks/src/global/global.js',
  'node_modules/sedona-blocks/src/header/header.js',
  'node_modules/sedona-blocks/src/slider/slider.js',
  'node_modules/sedona-blocks/src/form/validate.js',
  'node_modules/sedona-blocks/src/file/file.js',
  'node_modules/sedona-blocks/src/range/range.js',
  'node_modules/sedona-blocks/src/table/table.js',
  'src/js/app.js'
]
…
```
