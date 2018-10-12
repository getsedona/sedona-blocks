# Подвал

Шаблонный тип. [Пример](http://sedona.stage.constlab.ru/blocks/footer/).

## Особенности

* Подключается к `<footer>` или располагается внутри него
* По-умолчанию элементы идут друг под другом. Начиная с ширины `@footer-breakpoints-desktop`, выстраиваются на 100% ширину родителя с воздухом между (space-between)

## Настройка

```less
@footer-padding-top-smaller: 0;
@footer-padding-top-larger: 0;
@footer-padding-bottom-smaller: @indent-block-smaller;
@footer-padding-bottom-larger: @indent-block-larger;

@footer-font-size: inherit;
@footer-line-height: inherit;

@footer-color: inherit;
@footer-link-color: @link-primary;

@footer-background-color: transparent;
@footer-background-image: none;
@footer-background-repeat: repeat;
@footer-background-position: 0 0;
@footer-background-size: auto auto;

@footer-breakpoints: @grid-breakpoints-md;
@footer-max-width: @grid-breakpoints-xl;
```

## Разметка

```html
<footer class="footer">
  <div class="footer__wrap">
    <div class="footer__content">
      …
    </div>
    
    …
  </div>
</footer>
```
