# Centum

A hundred-based CSS flex grid system with full flexibility to customize it exactly to your needs.

*"Stop including unneeded code!"*

1. [Installtion](#installtion)
2. [About Centum](#what-is-centum)
3. [Why Centum](#why-use-centum)
4. [The Grid](#building-the-grid)
5. [The CSS Classes](#the-generated-css-classes)
    - [Variables](#variables-mappings)
6. [Examples](#examples)
7. [Configuration](#configuration)
    - [Synopsis](#map-synopsis)
    - [Extra](#extra-features)
8. [Links](#links)
9. [License](#license)
10. [Changelog](./CHANGELOG.md)


---


### Installtion

Try Centum out now:

* **NPM:** `npm install centum`

* **Yarn:** `yarn add centum`

* **Bower:** `bower install marwanalsoltany/centum`

* **Git:** `git clone https://github.com/MarwanAlsoltany/centum.git` in your project and delete all files except `/src`, `/dist` and `centum.scss`

![#ff6347](https://via.placeholder.com/11/f03c15/000000?text=+) **Note:** *Add Centum as a development dependency if you are going to compile it yourself.*

After installation, you can import the CSS/SCSS file into your project using one line of these snippet:

###### In JavaScript (when using a bundler)

```js
import 'centum/centum.scss'; // scss file containing centum with default configuration
import 'centum/src/main.scss'; // same as the line above
import 'centum/dist/centum@VERSION.css'; // compiled css of the line above
import 'centum/dist/centum@VERSION.min.css'; // minified version of the line above
```

###### In SCSS

```scss
@import 'PATH/TO/node_modules/centum/centum.scss'; // scss file containing centum with default configuration
@import 'PATH/TO/node_modules/centum/src/main.scss'; // same as the line above
```

###### In CSS

```css
@import 'PATH/TO/node_modules/centum/dist/centum@VERSION.css'; /* compiled css of centum default configuration */
@import 'PATH/TO/node_modules/centum/dist/centum@VERSION.min.css'; /* minified version of the line above */
```

> See [jsdelivr.com/package/npm/centum](https://www.jsdelivr.com/package/npm/centum) (CDN).


---


### What is Centum?

Centum is a refined CSS flex grid system that gives both developers and editors a humanized interface and unlimited ability to customize the grid to their needs. Centum is a hundred-based (percentage-based) grid system and is built to be mobile-first.

### Why use Centum?

The main reason Centum was created is to give the developers the ability to really use what they really need for a specific project.

Every project's blueprint has a predefined grid that gets reused across the entire project, having 75% or more of the rest code of the grid system not being used is pointless. The problem with other grid systems is that they come mostly in a framework, shipped with thousands of lines of CSS that no one will ever use.

Centum focuses on the ability to give the developers unlimited possibilities to modify the grid to their needs in the same language they use for styling (no external config file is required) and the naming convention that fits their code-base (as every bit of Centum classes except `:` and `-` comes from the configuration map). This flexibility of modification gives the developers the ability to write friendly class-names that are easy to remember and not vague for editors or other developers.

Also, the hundred-based grid system is easier for humans to grasp offers the possibility to create layouts that no one has ever thought about due to the restrictions of twelve-based grid systems.


---


### Building the Grid

Centum in simple words is just a big SCSS map. It all depends on your requirements, they define how big or small this map can be. The following example is an example that pushes a CSS flex grid system to its absolute limits. That's why it's worth noting that it's really rare that you will encounter a project that can utilize the defined grid bellow.

![#ff6347](https://via.placeholder.com/11/f03c15/000000?text=+) **Note:** *Centum requires a full understanding of CSS Flex-Box in order to fully utilize it.*

1. **Breakpoints definition**

```scss
$breakpoints: (
  'xs': 36em, // 576px,
  'sm': 48em, // 768px,
  'md': 62em, // 992px,
  'lg': 80em, // 1280px,
  'xl': 100em, // 1600px,
) !default;
```

2. **Containers definition**

```scss
$containers: (
  'xs': 34em, // 544px,
  'sm': 46em, // 736px,
  'md': 60em, // 960px,
  'lg': 75em, // 1200px,
  'xl': 95em // 1520px
) !default;
```

3. **Cells definition**

```scss
$cells: (
  '0': 0, // 0%
  '5': 0.05, // 5%
  '10': 0.1, // 10%
  '15': 0.15, // 15%
  '16': 4/25, // 16%
  '20': 0.2, // 20%
  '25': 0.25, // 25%
  '30': 0.3, // 30%
  '33': 1/3, // 33.3333333333%
  '35': 0.35, // 35%
  '40': 0.4, // 40%
  '45': 0.45, // 45%
  '48': 0.48, // 48%
  '50': 0.5, // 50%
  '55': 0.55, // 55%
  '60': 0.6, // 60%
  '65': 0.65, // 65%
  '66': 2/3, // 66.6666666667%
  '70': 0.7, // 70%
  '75': 0.75, // 75%
  '80': 0.8, // 80%
  '85': 0.85, // 85%
  '90': 0.9, // 90%
  '95': 0.95, // 95%
  '100': 1 // 100%
) !default;
```

4. **Media queries definition**

```scss
$media-queries: true;
$media-breakpoints: map-merge((), $breakpoints);
```

5. **Grid definition**

```scss
$flex-grid: (
  'pack': (
    'name': 'pack',
    'map': map-merge((), $breakpoints),
    'responsive': true,
    'options': (
      'extent': (
        'property': 'width',
        'values': (
          'narrowest': 20%,
          'narrower': 30%,
          'narrow': 40%,
          'medium': 60%,
          'wide': 80%,
          'wider': 90%,
          'widest': 100%
        )
      )
    )
  ),
  'tier': (
    'name': 'tier',
    'map': map-merge((), $containers),
    'responsive': true,
    'options': (
      'content': (
        'property': 'align-content',
        'values': (
          'start': 'flex-start',
          'end': 'flex-end',
          'center': 'center',
          'stretch': 'stretch',
          'evenly': 'space-evenly',
          'between': 'space-between',
          'around': 'space-around'
        )
      ),
      'items': (
        'property': 'align-items',
        'values': (
          'start': 'flex-start',
          'end': 'flex-end',
          'center': 'center',
          'stretch': 'stretch',
          'baseline': 'baseline'
        )
      ),
      'justify': (
        'property': 'justify-content',
        'values': (
          'start': 'flex-start',
          'end': 'flex-end',
          'center': 'center',
          'stretch': 'stretch',
          'evenly': 'space-evenly',
          'between': 'space-between',
          'around': 'space-around'
        )
      ),
      'flow': (
        'property': 'flex-flow',
        'values': (
          'row-wrap': 'row wrap',
          'row-reverse-wrap': 'row-reverse wrap',
          'row-wrap-reverse': 'row wrap-reverse',
          'row-reverse-wrap-reverse': 'row-reverse wrap-reverse',
          'row-nowrap': 'row nowrap',
          'row-reverse-nowrap': 'row-reverse nowrap',
          'column-wrap': 'column wrap',
          'column-reverse-wrap': 'column-reverse wrap',
          'column-wrap-reverse': 'column wrap-reverse',
          'column-reverse-wrap-reverse': 'column-reverse wrap-reverse',
          'column-nowrap': 'column nowrap',
          'column-reverse-nowrap': 'column-reverse nowrap'
        )
      )
    )
  ),
  'cell': (
    'name': 'cell',
    'map': map-merge((), $cells),
    'responsive': true,
    'options': (
      'index': (
        'property': 'order',
        'values': (
          'first': -1,
          'last': 99,
          '0': 0,
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5,
          '6': 6,
          '7': 7,
          '8': 8,
          '9': 9
        )
      ),
      'push': (
        'property': 'transform',
        'wrapper': 'translateX(%var%)',
        'values': percentages(map-merge((), $cells), false)
      ),
      'pull': (
        'property': 'transform',
        'wrapper': 'translateX(%var%)',
        'values': percentages(map-merge((), $cells), true)
      ),
      'drop': (
        'property': 'transform',
        'wrapper': 'translateY(%var%)',
        'values': percentages(map-merge((), $cells), false)
      ),
      'lift': (
        'property': 'transform',
        'wrapper': 'translateY(%var%)',
        'values': percentages(map-merge((), $cells), true)
      ),
      'lead': (
        'property': 'margin-top',
        'values': (
          '0': 0,
          '0\\.5': 15px,
          '1': 30px,
          '1\\.5': 45px,
          '2': 60px,
          '3': 90px,
          '4': 120px,
          '5': 150px,
          '6': 180px,
          '7': 210px,
          '8': 240px,
          '9': 270px
        )
      ),
      'rear': (
        'property': 'margin-bottom',
        'values': (
          '0': 0,
          '0\\.5': 15px,
          '1': 30px,
          '1\\.5': 45px,
          '2': 60px,
          '3': 90px,
          '4': 120px,
          '5': 150px,
          '6': 180px,
          '7': 210px,
          '8': 240px,
          '9': 270px
        )
      )
    )
  ),
  'gutter': (
    'name': 'gutters',
    'size': 15px,
    'axis': 'x' // x, y, any other value will be translated to both
  )
);
```

6. **Building the grid (grid mixins)**
```scss
@include make-flex-grid-pack($flex-grid);
@include make-flex-grid-tier($flex-grid);
@include make-flex-grid-cell($flex-grid);
```

![#1e90ff](https://via.placeholder.com/11/1e90ff/000000?text=+) **Fact:** *About 200 lines of configuration in SCSS resulted in nearly 6700 lines (vendor-prefixed) of vanilla CSS, this is just shy of 3%.*

> See [variables](./src/sass/abstracts/_variables.scss), [grid](./src/sass/layout/_grid.scss).


---


## The Generated CSS Classes

![#ff6347](https://via.placeholder.com/11/f03c15/000000?text=+) **Note:** `?` *= optional,* `|` *= or.*

| Name | Class | Example |
| --- | --- | --- |
| Pack | `pack:{type?}` <br/> `{p-option}-{breakpoint?}:{value}` | `pack` <br/> `pack:no-gutters` <br/> `extent-xl:medium` <br/> `extent:wide` |
| Tier | `tier:{type?}` <br/> `{t-option}-{breakpoint?}:{value}` | `tier` <br/> `tier:no-gutters` <br/> `justify-md:between` <br/> `justify:center` |
| Cell | `cell-{breakpoint?}:{percentage}` <br/> <code>{c-option}-{breakpoint?}:{percentage&#124;number&#124;word}</code> | `cell` <br/> `cell:33` <br/> `cell-md:25` <br/> `lead-xs:3` <br/> `rear:1` |

#### Variables mappings

| Variable | Possible Values |
| --- | --- |
| `{breakpoint}` | `xs`, `sm`, `md`, `lg`, `xl` *(576px, 768px, 992px, 1280px, 1600px, no breakpoint = mobile)* |
| `{type}` | `no-gutters` |
| `{p-option}` | `extent` |
| `{p-value}` | `narrow`, `medium`, `wider` ... *(refer to `$flex-grid` for the full list)* |
| `{t-option}` | `content`, `items`, `justify`, `flow` |
| `{t-value}` | `start`, `stretch`, `between`, `row-nowrap` ... *(refer to `$flex-grid` for the full list)* |
| `{c-option}` | `index`, `push`, `pull`, `drop`, `lift`, `lead`, `rear` |
| `{percentage}` | `0`, `5`, `10`, `15`, `16`, `20`, `25`, `30`, `33`, `35`, `40`, `45`, `48`, `50`, `55`, `60`, `65`, `66`, `70`, `75`, `80`, `85`, `90`, `95`, `100` |
| `{number}` | `0.5`, `1`, `1.5`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `{word}` | `first`, `last` |


---


## Examples

* **A container on tablet and above containing three columns (two 25% columns and one 50%), the big column is divided into two sub-cells (spaced rows)**

```html
<div class="pack">
  <div class="tier">
    <div class="cell:100 cell-sm:25">
      Here comes your content
    </div>
    <div class="cell:100 cell-sm:50">
      <div class="sub-cell">
        Here comes your content
      </div>
      <div class="sub-cell">
        Here comes your content
      </div>
    </div>
    <div class="cell:100 cell-sm:25">
      Here comes your content
    </div>
  </div>
</div>
```

* **A narrow container containing two columns (1/3 and 2/3 on desktop, 1/2 and 1/2 on tablet and full-width on mobile)**

```html
<div class="pack extent-md:narrow">
  <div class="tier">
    <div class="cell:100 cell-sm:50 cell-md:33">
      Here comes your content
    </div>
    <div class="cell:100 cell-sm:50 cell-md:66">
      Here comes your content
    </div>
  </div>
</div>
```

* **A container on all devices without gutters containing five 20% columns in reversed order that can not wrap**

```html
<div class="pack">
  <div class="tier:no-gutters flow:row-reverse-nowrap">
    <div class="cell:20">
      Here comes your content
    </div>
    <div class="cell:20">
      Here comes your content
    </div>
    <div class="cell:20">
      Here comes your content
    </div>
    <div class="cell:20">
      Here comes your content
    </div>
    <div class="cell:20">
      Here comes your content
    </div>
  </div>
</div>
```

* **A container on all devices containing one 50% column in the dead center of the container (the cells' wrapper must have a bigger height than the cell itself!)**

```html
<div class="pack">
  <div class="tier justify:center content:center" style="height:500px">
    <div class="cell:50">
      Here comes your content
    </div>
  </div>
</div>
```

* **A container on large desktops containing two 40% columns pushed to the sides and full-width on mobile**

```html
<div class="pack">
  <div class="tier justify-xl:between">
    <div class="cell:100 cell-xl:40">
      Here comes your content
    </div>
    <div class="cell:100 cell-xl:40">
      Here comes your content
    </div>
  </div>
</div>
```

> See [demo.html](./tests/demo.html).

---


## Configuration

The nicest thing about Centum is when you do not like the implementation or behavior of a specific class, you can easily swap it just by changing the `property` passed in the map, for example, the `push` option under `cell` → `options` uses `transform` to translate the cell to another position. You can simply change it to `margin-left` for example and omit the `wrapper` line (as we don't need to warp the value anymore) to make it use `margin-left: 10%;` instead of `transform: translateX(10%);` etc ...

Any unused breakpoints and options can be commented out before the final compilation, this will result in a massive decrease in file size.

#### Map synopsis

```scss
$flex-grid: (
  // tacking the pack as example
  'pack': ( // the key ('pack') is required and used in mixins, must stay like this.
    'name': 'pack', // value ('pack') is used as pack class-name.
    'map': ( // the key ('map') is required and used in mixins, must stay like this.
      'xs': 36em, // the key ('xs') is used as breakpoint in class-names, the value (36em) is used as width.
      ...
    ),
    'responsive': true, // controls wether media queries (responsive classes) should be generated.
    'options': ( // the key ('options') is required and used in mixins, must stay like this.
      'extent': ( // the key ('extent') is used as option name in class-name.
        'property': 'width', // value ('width') is used as css property for this option.
        'values': ( // the key ('values') is required and used in mixins, must stay like this.
          'narrowest': 20%, // the key ('narrowest') is used as option value in class-name.
          'narrower': 40%, // the value (40%) is used as css value for the css propery ('width').
          ...
        )
      )
    )
  ),
  ...
  // everything that has no comment must stay as is, as the mixins expect that key.
  // when using the ('wrapper') in an option, the placeholder (%var%) is a keyword that the mixin looks for.
  // if for example ('options') are not need simply replace the value with null.
);
```

#### Extra Features

Centum is shipped with some neat SCSS mixins and function, few to mention:

* Mixins

```scss
@include viewport($breakpoint: 'md', $type: 'max', $dimension: 'width') {
  /* here comes your css for this breakpoint */
}

@include make-options(
  $options: (
    'bg': (
      'property': 'background-color',
      'values': (
        'red': #FF0000,
        'green': #00FF00
      )
    )
  ),
  $infix: '-basic'
);
/*
.bg-basic:red {
  background-color: #FF0000;
} 
.bg-basic:green {
  background-color: #00FF00;
} 
*/
```

* Functions

```scss
str-replace($subject, $search, $replace);
strip-unit($number)
percentages($map-or-list, $negative-values);
```

> See [mixins](./src/sass/abstracts/_mixins.scss), [functions](./src/sass/abstracts/_functions.scss).


---


## Links
* Raw file: [centum.css](https://raw.githubusercontent.com/MarwanAlsoltany/centum/master/dist/centum.css)
* Raw file: [centum.min.css](https://raw.githubusercontent.com/MarwanAlsoltany/centum/master/dist/centum.min.css)
* CDN: [jsdelivr.com/package/npm/centum](https://www.jsdelivr.com/package/npm/centum)


---


## License

Centum is an open-sourced package licensed under the [**MIT License**](./LICENSE).
<br/>
Copyright (c) 2020 Marwan Al-Soltany. All rights reserved.
<br/>