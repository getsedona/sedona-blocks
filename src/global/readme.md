## Настройка

Вся настройка производится через переменные в файле [variables.less](https://github.com/constlab/sedona-basis/blob/master/src/less/variables.less). Если не хватает текущих настроек, то допускается создание новых переменных для конкретного сайта.

### Основное

Шаг от которого строятся все последующие размеры и радиус скругления:

```less
@rhythm: 4px;
@radius: @rhythm; // 4px
```

### Типографика

#### Шрифт

Шрифт на каждой системе свой. Вторичный шрифт служит для заголовков `H1`, `H2` и `H3`:

```less
@font-family-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "NotoColorEmoji", "Segoe UI Emoji", "Segoe UI Symbol";
@font-family-secondary: @font-family-primary; // -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "NotoColorEmoji", "Segoe UI Emoji", "Segoe UI Symbol"
…
```

#### Кегль и интерлиньяж

Базовый:

```less
@font-size: (@rhythm * 4); // 16px
@line-height: (@rhythm * 7); // 28px
```

Уменьшенный:

```less
@font-size-smaller: (@rhythm * 3); // 12px
@line-height-smaller: (@rhythm * 5); // 20px
```

Увеличенный:

```less
@font-size-larger: (@rhythm * 6); // 24px
@line-height-larger: (@rhythm * 8); // 32px
```

Заголовочный (обычный — для маленьких и увеличенный — для больших экранов):

```less
@font-size-h1: (@rhythm * 8); // 32px
@line-height-h1: (@rhythm * 10); // 40px

@font-size-h1-larger: (@rhythm * 9); // 36px
@line-height-h1-larger: (@rhythm * 11); // 44px

@font-size-h2: @font-size-h1; // 32px
@line-height-h2: @line-height-h1; // 40px

@font-size-h2-larger: @font-size-h1-larger; // 36px
@line-height-h2-larger: @line-height-h1-larger; // 44px

@font-size-h3: (@rhythm * 5); // 20px
@line-height-h3: (@rhythm * 7); // 28px

@font-size-h3-larger: @font-size-h3; // 20px
@line-height-h3-larger: @line-height-h3; // 28px
```

### Цвета

Основной цвет должен быть описан в переменной. Далее в коде его оттенки можно изменять с помощью [less-функций](http://lesscss.org/functions/#color-operations).

Цвет шрифта может быть темным (для светлого фона) или светлым (для темного фона).

Цвет имеет четыре оттенка (основной, вторичный, для подсказок и для разделителей):

```less
@dark-primary: lighten(#000, 12%); // #1f1f1f
@dark-secondary: lighten(#000, 54%); // #8a8a8a
@dark-hint: lighten(#000, 72%); // #b8b8b8
@dark-divider: lighten(#000, 88%); // #e0e0e0

@light-primary: #fff;
@light-secondary: darken(#fff, 30%); // #b3b3b3
@light-hint: darken(#fff, 50%); // #808080
@light-divider: darken(#fff, 72%); // #474747
```

Базовый цвет отвечает за цвет по-умолчанию (обычно это темный):

```less
@base-primary: @dark-primary; // #1f1f1f
@base-secondary: @dark-secondary; // #8a8a8a
@base-hint: @dark-hint; // #b8b8b8
@base-divider: @dark-divider; // #e0e0e0
```

Брендовые цвета:

```less
@brand-primary: #fec906;
@brand-secondary: #fe3b48;
…
```

Цвета ссылок и кнопок:

```less
@link-primary: #007aff;
…

@button-primary: @link-primary; // #007aff
…
```

Цвета уведомлений (успех, требуется внимание и ошибка):

```less
@alert-success: #4cd964;
@alert-warning: #fc0;
@alert-danger: #ff3b30;
```

### Сетка

Mobile first. Четыре контрольных точки:

```less
@grid-breakpoints-sm: 576px; // Phone
@grid-breakpoints-md: 768px; // Tablet
@grid-breakpoints-lg: 992px; // Notebook
@grid-breakpoints-xl: 1200px; // Desktop
```

Количество колонок и промежуток между ними:

```less
@grid-columns: 12;
@grid-gutter: (@indent * 2); // 32px
```

### Анимация

Продолжительность анимации и временна́я функция:

```less
@duration: 0.2s;
@timing-function: ease-out;
```

### Отступы ([1](https://downloader.disk.yandex.ru/preview/efb3a19b8ef997ee5319947f6257241417d8221ac619e549d57e08bbbca56720/5b0d5c26/owZRCHi1W379jUap3YR-jK4YZyd5Ttil2wmWFXYzBgDAzCLlWJEVs-euLktDoQGLeo8Jlj2h5xJ9a0rBDLP66w%3D%3D?uid=0&filename=2018-05-29_12-49-04.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048) [2](https://downloader.disk.yandex.ru/preview/09c633a118d869f99af6918065e34e96a7dabad97fac240e2e2e15663d9cc9f2/5b0d5c32/owZRCHi1W379jUap3YR-jH98fFwz_3axHr-EVKXkelyg6ZuT279w3Rn-x7gWGZeCqxsZiF36F7atEv70jYg77A%3D%3D?uid=0&filename=2018-05-29_12-50-04.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048) [3](https://downloader.disk.yandex.ru/preview/0f396f1d6c1a4ca29b712e654b7ebc246bb2c72d39881b5530b90a74e5b6783a/5b0d5c44/owZRCHi1W379jUap3YR-jEpmuxn02w8yYX2Q2-YRnLTwOiTkZEVwT2C2DcqquhACreMaS0jYQhnFMS_IN8xXlw%3D%3D?uid=0&filename=2018-05-29_12-50-04%20%282%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048) [4](https://downloader.disk.yandex.ru/preview/c99066e1e3071c36c2fd3f030034650805f5c2120701b4b3d278767260e128d0/5b0d5c50/owZRCHi1W379jUap3YR-jCsduczjkXrbrgKZLpYhkoFDPh2AAvClhKjJgMCCfgKmi_9gyW7jv-qyTgdVApDn_A%3D%3D?uid=0&filename=2018-05-29_12-50-04%20%282%29%20%282%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048))

Между параграфами:

```less
@indent: @font-size; // 16px
```

Между блоками (для маленьких и больших экранов):

```less
@indent-block-smaller: (@indent * 3); // 48px
@indent-block-larger: (@indent * 6); // 96px
```

Между элементами (для маленьких и больших экранов):

```less
@indent-element-smaller: (@indent * 2); // 32px
@indent-element-larger: (@indent * 3); // 48px
```
