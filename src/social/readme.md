# Социальные кнопки

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/social/)

## Особенности

* Может располагаться внутри любого типа блока

## Настройка

```less
@social-width: @line-height;
@social-height: @social-width;

@social-gutter: (@indent / 2);

@social-border-radius: 50%;

@social-icon-width: 18px;
@social-icon-height: @social-icon-width;

@social-color: @light-primary;
@social-background-color: transparent;
```

## Разметка

```html
<ul class="social">
  <li><a class="social__vk" href="https://vk.com/nickname" rel="noopener noreferrer" target="_blank">ВКонтакте</a></li>
  <li><a class="social__fb" href="https://fb.com/nickname" rel="noopener noreferrer" target="_blank">Фейсбук</a></li>
  <li><a class="social__ig" href="https://instagram.com/nickname" rel="noopener noreferrer" target="_blank">Инстаграм</a></li>
  <li><a class="social__tg" href="tg://resolve?domain=nickname" rel="noopener noreferrer" target="_blank">Телеграм</a></li>
  <li><a class="social__yt" href="https://youtube.com/user/nickname" rel="noopener noreferrer" target="_blank">Ютюб</a></li>
  <li><a class="social__tw" href="https://twitter.com/nickname" rel="noopener noreferrer" target="_blank">Твиттер</a></li>
  <li><a class="social__ok" href="https://ok.ru/nickname" rel="noopener noreferrer" target="_blank">Одноклассники</a></li>
  <li><a class="social__vb" href="viber://pa?chatURI=nickname" rel="noopener noreferrer" target="_blank">Вайбер</a></li>
  <li><a class="social__wa" href="whatsapp://send?abid=nickname" rel="noopener noreferrer" target="_blank">Ватсап</a></li>
  <li><a class="social__sk" href="skype:nickname?chat" rel="noopener noreferrer" target="_blank">Скайп</a></li>
</ul>
```
