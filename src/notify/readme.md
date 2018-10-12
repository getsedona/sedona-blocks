# Уведомление

Шаблонный тип. [Пример](http://sedona.stage.constlab.ru/blocks/notify/).

## Особенности

* Рекомендуемое расположение — после лейаута

## Настройка

```less
@notify-color: inherit;
@notify-link-color: @link-primary;

@notify-background-color: @base-divider;
@notify-background-image: none;
@notify-background-repeat: repeat;
@notify-background-position: 0 0;
@notify-background-size: auto auto;

@notify-border-width: 0;
@notify-border-color: transparent;
@notify-border-radius: @radius;

@notify-max-width: 500px;
```

## Разметка

```html
<div class="notify">
  <div class="notify__close">
    <button class="js-notify-close" aria-label="Закрыть" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>
  </div>

  <div class="notify__wrap">
    <div class="notify__content  wysiwyg">
      …
    </div>
  </div>
</div>
```
