# Карточка

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/card/).

## Особенности

* Располагается только внутри блочного типа
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
// Base

@card-padding: @indent;

@card-background-color: transparent;
@card-background-image: none;
@card-background-repeat: repeat;
@card-background-position: 0 0;
@card-background-size: auto auto;

@card-border-width: 1px;
@card-border-color: @base-divider;
@card-border-radius: @radius;

@card-frame-opacity: 0.2;

@card-media-ratio: 56.25%;

// Darken

@card-darken-background-color: @dark-primary;
@card-darken-background-image: none;
@card-darken-background-repeat: repeat;
@card-darken-background-position: 0 0;
@card-darken-background-size: auto auto;

@card-darken-border-color: @light-divider;

@card-darken-frame-opacity: @card-frame-opacity;

// Lighten

@card-lighten-background-color: @light-primary;
@card-lighten-background-image: none;
@card-lighten-background-repeat: repeat;
@card-lighten-background-position: 0 0;
@card-lighten-background-size: auto auto;

@card-lighten-border-color: @dark-divider;

@card-lighten-frame-opacity: @card-frame-opacity;
```

## Разметка

```html
<div class="card">
  <div class="card__frame">
    <div class="card__media">
      <img src="" width="" height="" alt="">
      <!-- или -->
      <video src="" poster="" width="" height="" autoplay playsinline loop muted></video>
    </div>
  </div>

  <div class="card__content  wysiwyg">
    …
  </div>
</div>
```

## Модификаторы

### `card`

* `card--dark-contour` — добавляет карточке темную обводку
* `card--light-contour` — добавляет карточке светлую обводку
* `card--darken` — делает карточку в темных тонах
* `card--lighten` — делает карточку в светлых тонах
* `card--fill` — делает медиа фоном карточки
