# Карусель

Содержательный тип. [Пример](http://sedona.stage.constlab.ru/blocks/carousel/).

## Особенности

* Работает с помощью [Swiper](http://idangero.us/swiper/)
* Подключается к `.scene` или располагается внутри
* Может вкладываться во внутрь других блочных типов
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон
* Тон итемов так же принудительно можно настроить

## Настройка

```less
// Item

@carousel-item-background-color: transparent;
@carousel-item-background-image: none;
@carousel-item-background-repeat: no-repeat;
@carousel-item-background-position: 50%;
@carousel-item-background-size: cover;

// Bullet

@carousel-bullet-width: 7px;
@carousel-bullet-height: 7px;
@carousel-bullet-radius: 50%;
```

## Разметка

```html
<div class="carousel  swiper-container">
  <div class="carousel__list  swiper-wrapper">
    <div class="carousel__item  swiper-slide">
      …
    </div>

    …
  </div>

  <div class="carousel__pagination  swiper-pagination"></div>
</div>
```

## Модификаторы

### `carousel`

* `carousel--darken` — делает карусель в темных тонах
* `carousel--lighten` — делает карусель в светлых тонах
* `carousel--scene` — делает карусель сценой (добавляет отступы у итемов сверху и снизу)

### `carousel__item`

* `carousel__item--darken` — делает итем в темных тонах
* `carousel__item--lighten` — делает итем в светлых тонах

### `carousel__pagination`

* `carousel__pagination--inside` — перемещает пагинацию внутрь карусели
