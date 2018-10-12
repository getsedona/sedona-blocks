# Сцена

Секция, внутри которой строятся или находятся остальные блоки.

Системный тип. [Пример](http://sedona.stage.constlab.ru/blocks/scene/).

## Особенности

* Располагается только внутри `.main`
* Может идти только на одном уровне, то есть друг за другом. Вкладывать друг в друга нельзя
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
// Base

@scene-background-color: transparent;
@scene-background-image: none;
@scene-background-repeat: repeat;
@scene-background-position: 0 0;
@scene-background-size: auto auto;

// Darken

@scene-darken-background-color: @dark-primary;
@scene-darken-background-image: none;
@scene-darken-background-repeat: repeat;
@scene-darken-background-position: 0 0;
@scene-darken-background-size: auto auto;

@scene-darken-color: @light-primary;

// Lighten

@scene-lighten-background-color: @light-primary;
@scene-lighten-background-image: none;
@scene-lighten-background-repeat: repeat;
@scene-lighten-background-position: 0 0;
@scene-lighten-background-size: auto auto;

@scene-lighten-color: @dark-primary;
```

## Разметка

```html
<section class="scene">
  …
</section>

…
```

## Модификаторы

### `scene`

* `scene--darken` — делает сцену в темных тонах
* `scene--lighten` — делает сцену в светлых тонах
* `scene--fill` — добавляет отступ сверху
