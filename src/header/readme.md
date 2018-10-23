# Шапка

Шаблонный тип. [Пример](http://sedona.stage.constlab.ru/blocks/header/).

## Особенности

* Подключается к `<header>` или располагается внутри него
* По-умолчанию имеет максимальную для контента ширину — `@header-max-width`
* Если ширина экрана меньше `@header-breakpoints-desktop`, принимает мобильный вид

## Настройка

```less
// Base

@header-height: (@line-height + @indent * 4);

@header-color: inherit;
@header-link-color: inherit;
@header-link-border-width: @link-border-width;

@header-background-color: transparent;
@header-background-image: none;
@header-background-repeat: repeat;
@header-background-position: 0 0;
@header-background-size: auto auto;

@header-breakpoints: @grid-breakpoints-md;
@header-max-width: @grid-breakpoints-xl;
@header-gutter: @indent;

// Collapse mobile

@header-collapse-color: @header-color;
@header-collapse-link-color: inherit;

@header-collapse-background-color: @header-background-color;
@header-collapse-background-image: @header-background-image;
@header-collapse-background-repeat: @header-background-repeat;
@header-collapse-background-position: @header-background-position;
@header-collapse-background-size: @header-background-size;
```

## Модификаторы

### `header__nav`

* `header__nav--hidden-mobile` — скрывает элемент, когда шапка становися мобильной
* `header__nav--visible-mobile` — показывает элемент, когда шапка не является мобильной
