# Centum

A hundred-based CSS flex grid system with full flexibility to customize it exactly to your needs.

*"Stop including unneeded code!"*


---


### What is Centum?

Centum is a refined CSS flex grid system that gives both developers and editors a humanized interface and unlimited ability to customize the grid to their needs. Centum is a hundred based grid system and is built to be mobile-first.


### Why use Centum?

The main reason Centum was created is to give the developers the ability to really use what they really need for a specific project. 

Every project's blueprint has a predefined grid that gets reused across the entire project, having 75% or more of the rest code of the grid system, not being used is pointless. The problem with other grid systems is that they come mostly in a framework, shipped with thousands of lines of CSS that no one will ever use. 

Centum focuses on the ability to give the developers unlimited possibilities to modify the grid to their needs in the same language they use for styling (no external config file is required) and the naming convention that fits their code-base (as every bit of Centum classes except `:` and `-` comes from the configuration map). This flexibility of modification gives the developers the ability to write friendly class-names that are easy to remember and not vague for editors or other developers.

Also, the 100-based grid system is easier for humans to grasp offers the possibility to create layouts that no one has ever thought about due to the restrictions of 12-based grid systems.


---


### Building the Grid

Centum in simple words is just a big SCSS map. It all depends on your requirements, they define how big or small this map can be. The following example is an example that pushes a CSS Flex Grid System to its absolute limits. That's why it's worth noting that it's really rare that you will encounter a project that can utilize the defined grid bellow.

<small>![#ff6347](https://via.placeholder.com/10/f03c15/000000?text=+) **Note:** *Centum requires full understanding of CSS Flex-Box in order to fully utilize it.*</small>

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
    'properties': (
      'extent': (
        'name': 'width',
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
    'properties': (
      'content': (
        'name': 'align-content',
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
        'name': 'align-items',
        'values': (
          'start': 'flex-start',
          'end': 'flex-end',
          'center': 'center',
          'stretch': 'stretch',
          'baseline': 'baseline'
        )
      ),
      'justify': (
        'name': 'justify-content',
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
        'name': 'flex-flow',
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
    'properties': (
      'index': (
        'name': 'order',
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
        'name': 'transform',
        'wrapper':  'translateY(%var%)',
        'values': percentages(map-merge((), $cells))
      ),
      'pull': (
        'name': 'transform',
        'wrapper': 'translateX(%var%)',
        'values': percentages(map-merge((), $cells), negative)
      ),
      'drop': (
        'name': 'transform',
        'wrapper': 'translateY(%var%)',
        'values': percentages(map-merge((), $cells))
      ),
      'lift': (
        'name': 'transform',
        'wrapper':  'translateY(%var%)',
        'values': percentages(map-merge((), $cells), negative)
      ),
      'lead': (
        'name': 'margin-top',
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
        'name': 'margin-bottom',
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

> <small>See [variables](./sass/abstracts/_variables.scss), [grid](./sass/layout/_grid.scss).</small>


---


## The Generated CSS Classes

<small>![#ff6347](https://via.placeholder.com/10/f03c15/000000?text=+) **Note:** `?` *optional*, `|` *or*.</small>

| Name | Class | Example |
| --- | --- | --- |
| Pack | `pack:{type?}` <br/> `{p-option}-{breakpoint?}:{value}` | `pack` <br/> `pack:no-gutters` <br/> `extent-xl:medium` <br/> `extent:wide` |
| Tier | `tier:{type?}` <br/> `{t-option}-{breakpoint?}:{value}` | `tier` <br/> `tier:no-gutters` <br/> `justify-md:between` <br/> `justify:center` |
| Cell | `cell-{breakpoint?}:{percentage}` <br/> <code>{c-option}-{breakpoint?}:{percentage&#124;number&#124;word}</code> | `cell` <br/> `cell-md:25` <br/> `lead-xs:3` <br/> `rear:1` |

#### Variables mappings

| Variable | Possible Values |
| --- | --- |
| `{breakpoint}` | `xs`, `sm`, `md`, `lg`, `xl` <small>*(576px, 768px, 992px, 1280px, 1600px, no breakpoint = mobile)*</small> |
| `{type}` | `no-gutters` |
| `{p-option}` | `extent` |
| `{p-value}` | `narrow`, `medium`, `wider` <small>*(refer to `$flex-grid` for the full list)*</small> |
| `{t-option}` | `content`, `items`, `justify`, `flow` |
| `{t-value}` | `start`, `stretch`, `between`, `row-nowrap` <small>*(refer to `$flex-grid` for the full list)*</small> |
| `{c-option}` | `index`, `push`, `pull`, `drop`, `lift`, `lead`, `rear` |
| `{percentage}` | `0`, `5`, `0`, `15`, `16`, `20`, `25`, `30`, `33`, `35`, `40`, `45`, `48`, `50`, `55`, `60`, `65`, `66`, `70`, `75`, `80`, `85`, `90`, `95`, `100` |
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
<div class="pack:no-gutters">
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

* **A container on all devices containing one 50% column in the dead center of the container**

```html
<div class="pack">
  <div class="tier justify:center content:center" style="height:500px">
    <div class="cell:50">
      Here comes your content
    </div>
  </div>
</div>
```

* **A container on large desktops containing two 30% columns pushed to the sides**

```html
<div class="pack">
  <div class="tier justify-xl:between">
    <div class="cell:100 cell-xl:50">
      Here comes your content
    </div>
  </div>
</div>
```

---


## Configuration
The nicest thing about Centum is when you do not like the implementation or behavior of a specific class, you can easily swap it just by changing the property (`name`) passed in the map, for example, the `push` option under `cell` → `properties` uses `transform` to translate the cell to another position. You can simply change it to `margin-left` for example and omit the extra `wrapper` line to make it use `margin-left: 10%;` instead of `transform: translateX(10%);` etc ...

Any unused breakpoints and options can be commented out before the final compilation, this results in a massive decrease in file size.

#### Map synopsis

```scss
$flex-grid: (
  'pack': ( // key ('pack') is a required used in the mixins, must stay like this
    'name': 'pack', // value ('pack') is used as pack class-name
    'map': ( // key ('map') is a required used in the mixins, must stay like this
      'xs': 36em, // key ('xs') is used as breakpoint in class-names, value is used as width
      ...
    ),
    'responsive': true, // controls wether media queries should be generated
    'properties': ( // key ('properties') is a required used in the mixins, must stay like this
      'extent': ( // key ('extent') is used as option name in class-name
        'name': 'width', // value ('width') is used as css property for this option
        'values': ( // key ('values') is a required used in the mixins, must stay like this
          'narrowest': 20%, // key ('narrowest') is used as option value in class-name
          'narrower': 40%, // value (30%) is used as css value for the css propery ('width')
          ...
        )
      )
    )
  ),
  ...
  // everything that has no comment must stay as is, as the mixins expect that key
  // if for example 'properties' are not need simply replace the value with null
);
```

#### Extra Features

Centum is shipped with some neat SCSS mixins and function, few to mention:

* Mixins

```scss
@include viewport($breakpoint: 'md', $type: 'max', $dimension: 'width') {
  // here comes your css for this breakpoint
}

@include make-options(
  $properties: (
    'bg': (
      'name': 'background-color',
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
str-replace($string, $search, $replace);
strip-unit($number)
percentages($map-or-list, $negative);
```

> <small>See [mixins](./sass/abstracts/_functions.scss), [functions](./sass/abstracts/_functions.scss).</small>


---


## Links
* [centum@1.0.0.css](https://raw.githubusercontent.com/MarwanAlsoltany/centum/master/centum@1.0.0.css)
* [centum@1.0.0.min.css](https://raw.githubusercontent.com/MarwanAlsoltany/centum/master/centum@1.0.0.min.css)


---


## License

Centum is an open-sourced package licensed under the **GPLv3** License.

<br/>