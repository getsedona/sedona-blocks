# Form

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/form/).

## Настройка

```less
// Control

@form-control-color: @base-primary;

@form-control-border-width: 1px;
@form-control-border-color: @base-divider;
@form-control-border-radius: @radius;

@form-control-padding-top: 6px;
@form-control-padding-bottom: @form-control-padding-top;
@form-control-padding-left: @indent;
@form-control-padding-right: @form-control-padding-left;

@form-control-height: (@line-height + @form-control-padding-top + @form-control-padding-bottom);

@form-control-background-color: @light-primary;
@form-control-background-image: none;
@form-control-background-repeat: repeat;
@form-control-background-position: 0 0;
@form-control-background-size: auto auto;

@form-control-hover-border-color: darken(@form-control-border-color, 15%);
@form-control-hover-background-color: @form-control-background-color;

@form-control-focus-outline-color: @form-control-border-color;
@form-control-focus-border-color: @form-control-hover-border-color;
@form-control-focus-background-color: @form-control-hover-background-color;

@form-control-danger-border-color: lighten(@alert-danger, 25%);
@form-control-danger-background-color: @form-control-background-color;

@form-control-danger-hover-border-color: darken(@form-control-danger-border-color, 10%);
@form-control-danger-hover-background-color: @form-control-danger-background-color;

@form-control-danger-focus-outline-color: @form-control-danger-border-color;
@form-control-danger-focus-border-color: @form-control-danger-hover-border-color;
@form-control-danger-focus-background-color: @form-control-danger-hover-background-color;

// Accent

@form-accent-color: @light-primary;

@form-accent-border-color: @base-secondary;

@form-accent-background-color: @form-accent-border-color;
@form-accent-background-image: none;
@form-accent-background-repeat: repeat;
@form-accent-background-position: 0 0;
@form-accent-background-size: auto auto;

@form-accent-hover-border-color: @form-accent-border-color;
@form-accent-hover-background-color: lighten(@form-accent-background-color, 20%);

// Hint

@form-hint-color: @base-hint;
@form-hint-danger-color: @alert-danger;

@form-hint-font-size: @font-size-smaller;
@form-hint-line-height: @line-height-smaller;

// Breakpoints

@form-breakpoints: @grid-breakpoints-md;
```

## Дополнительно

* Маски: [Inputmask](https://github.com/RobinHerbots/Inputmask)
* Календарь: [air-datepicker](https://github.com/t1m0n/air-datepicker)
