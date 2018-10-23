# Шапка

Шаблонный тип. [Пример](http://sedona.stage.constlab.ru/blocks/header/).

## Особенности

* Подключается к `<header>` или располагается внутри него
* По-умолчанию имеет максимальную для контента ширину — `@header-max-width`
* По-умолчанию имеет мобильный вид. Разворачивается, начиная с ширины `@header-breakpoints-desktop`

## Настройка

```less
@header-height: (@line-height + @indent * 2);

@header-color: @base-primary;
@header-link-color: inherit;

@header-background-color: transparent;
@header-background-image: none;
@header-background-repeat: repeat;
@header-background-position: 0 0;
@header-background-size: auto auto;

@header-breakpoints: @grid-breakpoints-md;
@header-max-width: @grid-breakpoints-xl;
@header-gutter: @indent;
```

## Разметка

```html
<header class="header">
  <div class="header__wrap">
    <div class="header__fold">
      <div class="header__logo">
        <a href="#">Sedona</a>
      </div>

      <ul class="header__mobile">
        <!-- Дополнительно (примеры) -->
        <li>Привет!</li>
        <li><a href="#">Вход</a></li>
        <li><a href="#">8 800 200-66-00</a></li>
        <li><a href="#">Поиск</a></li>
        <!-- / -->
  
        <li class="header__toggle"><button class="js-header-toggle">Меню</button></li>
      </ul>
    </div>

    <div class="header__collapse">
      <nav class="header__menu">
        <ul>
          <li><a href="#">Компания</a></li>
          <li><a href="#">Продукция</a></li>
          <li><a href="#">Услуги и цены</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      
      <!-- Дополнительно -->
      <ul class="header__extra">
        <li><a href="#">Вход</a></li>
        <li><a class="btn" href="#">Выход</a></li>
      </ul>
      <!-- / -->
      
      <!-- Дополнительно -->
      <ul class="header__extra  header__extra--nowrap">
        <li><a href="#">EN</a></li>
        <li><a href="#">FR</a></li>
      </ul>
      <!-- / -->
      
      <!-- Дополнительно -->
      <ul class="header__extra  header__extra--hidden-mobile">
        <li><a href="#">8 800 200-66-00</a></li>
        <li><a href="#">Поиск</a></li>
      </ul>
      <!-- / -->
    </div>
  </div>
</header>
```

## Модификаторы

### `header__extra`

* `header__extra--nowrap` — запрещает перенос внутренних элементов на новые строки
* `header__extra--hidden-mobile` — скрывает элементы, когда шапка становися мобильной
