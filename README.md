# Centum

A hundred based CSS flex grid system with full flexibility to customize it exactly to your needs.

<span style="color:tomato">*"Stop including unneeded code!"*</span>


---


### What is Centum?

Centum is a refined CSS flex grid system that gives both developers and editors a humanized interface and unlimited ability to customize the grid to their needs. Centum is a hundred based grid system and is built to be mobile-first.


### Why use Centum?

The main reason Centum was created is to give the developers the abilty to really use what they really need for a specific project. Every project's blueprint has a predifined grid that gets reused across the entire project, having 75% or more of the rest code of the grid system not beig used is pointless. The problem with other grid system is that they come mostly in a framework, shipped with thousends of lines of CSS that no one will ever use. Centum focuses on the ability to give the developers unlimited possiblities to modify the grid to their needs in the same language they use for styling (no external config file required) and the naming convention that fits their code-base (as every bit of Centum classes except `:` and `-` comes from the config map). This flexiblity of modification gives the developers the abilty to write friendly class-names that are easy to remeber and not vague for editors or other developers.


---


### Building the Grid

Centum in simple words is just a big SCSS map. It all depends on your requirements, they define how big or small this map can be. The following example is an example that pushes a CSS Flex Grid System to its absolute limits. That's why it's worth noting that it's really rare that you will encounter a project that can utilize the definded grid bellow.

1. **Breakpoints definition**

```scss
$breakpoints: (
  "xs": 36em,
  "sm": 48em,
  "md": 62em,
  "lg": 80em,
  "xl": 100em,
) !default;
```

2. **Containers definition**

```scss
$containers: (
  "xs": 34em,
  "sm": 46em,
  "md": 60em,
  "lg": 75em,
  "xl": 95em
) !default;
```

3. **Cells definition**

```scss
$cells: (
  "0": 0,
  "10": 0.1,
  "15": 0.15,
  "20": 0.2,
  "25": 0.25,
  "30": 0.3,
  "33": 1/3,
  "50": 0.5
  "60": 0.6,
  "66": 2/3,
  "70": 0.7,
  "75": 0.75,
  "80": 0.8,
  "90": 0.9,
  "100": 1
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
  "pack": (
    "name": "pack",
    "map": map-merge((), $breakpoints),
    "responsive": true,
    "properties": (
      "extent": (
        "name": width,
        "values": (
          "narrowest": 20%,
          "narrower": 30%,
          "narrow": 40%,
          "medium": 60%,
          "wide": 80%,
          "wider": 90%,
          "widest": 100%
        )
      )
    )
  ),
  "tier": (
    "name": "tier",
    "map": map-merge((), $containers),
    "responsive": true,
    "properties": (
      "content": (
        "name": align-content,
        "values": (
          "start": "flex-start",
          "end": "flex-end",
          "center": "center",
          "stretch": "stretch",
          "evenly": "space-evenly",
          "between": "space-between",
          "around": "space-around"
        )
      ),
      "items": (
        "name": align-items,
        "values": (
          "start": "flex-start",
          "end": "flex-end",
          "center": "center",
          "stretch": "stretch",
          "baseline": "baseline"
        )
      ),
      "justify": (
        "name": justify-content,
        "values": (
          "start": "flex-start",
          "end": "flex-end",
          "center": "center",
          "stretch": "stretch",
          "evenly": "space-evenly",
          "between": "space-between",
          "around": "space-around"
        )
      ),
      "flow": (
        "name": "flex-flow",
        "values": (
          "row-wrap": "row wrap",
          "row-reverse-wrap": "row-reverse wrap",
          "row-wrap-reverse": "row wrap-reverse",
          "row-reverse-wrap-reverse": "row-reverse wrap-reverse",
          "row-nowrap": "row nowrap",
          "row-reverse-nowrap": "row-reverse nowrap",
          "column-wrap": "column wrap",
          "column-reverse-wrap": "column-reverse wrap",
          "column-wrap-reverse": "column wrap-reverse",
          "column-reverse-wrap-reverse": "column-reverse wrap-reverse",
          "column-nowrap": "column nowrap",
          "column-reverse-nowrap": "column-reverse nowrap"
        )
      )
    )
  ),
  "cell": (
    "name": "cell",
    "map": map-merge((), $cells),
    "responsive": true,
    "properties": (
      "index": (
        "name": "order",
        "values": (
          "first": -1,
          "last": 99,
          "0": 0,
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7,
          "8": 8,
          "9": 9
        )
      ),
      "push": (
        "name": "transform",
        "wrapper":  "translateY(var)",
        "values": percentages(map-merge((), $cells))
      ),
      "pull": (
        "name": "transform",
        "wrapper": "translateX(var)",
        "values": percentages(map-merge((), $cells), negative)
      ),
      "drop": (
        "name": "transform",
        "wrapper": "translateY(var)",
        "values": percentages(map-merge((), $cells))
      ),
      "lift": (
        "name": "transform",
        "wrapper":  "translateY(var)",
        "values": percentages(map-merge((), $cells), negative)
      ),
      "lead": (
        "name": "margin-top",
        "values": (
          "0": 0,
          "0\.5": 15px,
          "1": 30px,
          "1\.5": 45px,
          "2": 60px,
          "3": 90px,
          "4": 120px,
          "5": 150px,
          "6": 180px,
          "7": 210px,
          "8": 240px,
          "9": 270px
        )
      ),
      "rear": (
        "name": "margin-bottom",
        "values": (
          "0": 0,
          "0\.5": 15px,
          "1": 30px,
          "1\.5": 45px,
          "2": 60px,
          "3": 90px,
          "4": 120px,
          "5": 150px,
          "6": 180px,
          "7": 210px,
          "8": 240px,
          "9": 270px
        )
      )
    )
  ),
  "gutter": (
    "name": "gutters",
    "size": 15px,
    "axis": "x"
  )
);
```

6. **Building the grid (grid mixins)**
```scss
@include make-flex-grid-pack($flex-grid);
@include make-flex-grid-tier($flex-grid);
@include make-flex-grid-cell($flex-grid);
```

> <small>see [variables.scss](./sass/abstracts/_variables.scss), [grid.scss](./sass/layout/_grid.scss)</small>

---

## The Generated CSS Classes

* <small> **Note:** `?` *optional*, `|` *or*</small>

| Name | Class | Example |
| --- | --- | --- |
| Pack | `pack` <br/> `pack:{type?}` <br/> `{p-option}-{breakpoint?}:{value}` | `pack` <br/> `pack:no-gutters` <br/> `extent-xl:medium` <br/> `extent:wide` |
| Tier | `tier` <br/> `tier:{type?}` <br/> `{t-option}-{breakpoint?}:{value}` | `tier` <br/> `tier:no-gutters` <br/> `justify-md:between` <br/> `justify:center` |
| Cell | `cell` <br/> `cell-{breakpoint?}:{percentage}` <br/> `{c-option}-{breakpoint?}:{percentage|number|word}` | `cell` <br/> `cell-md:25` <br/> `lead-xs:3` <br/> `rear:1` |

###### Variables mappings

| Variable | Possible Values |
| --- | --- |
| `{breakpoint}` | `xs`, `sm`, `md`, `lg`, `xl` *<small>(576px, 768px, 992px, 1280px, 1600px, no breakpoint = mobile)</small>* |
| `{type}` | `no-gutters` |
| `{p-option}` | `extent` |
| `{p-value}` | `narrow`, `medium`, `wider` *<small>(refer to `$flex-grid` for the full list)</small>* |
| `{t-option}` | `content`, `items`, `justify`, `flow` |
| `{t-value}` | `start`, `stretch`, `between`, `row-nowrap` *<small>(refer to `$flex-grid` for the full list)</small>* |
| `{c-option}` | `index`, `push`, `pull`, `drop`, `lift`, `lead`, `rear` |
| `{percentage}` | `0`, `5`, `0`, `15`, `16`, `20`, `25`, `30`, `33`, `35`, `40`, `45`, `48`, `50`, `55`, `60`, `65`, `66`, `70`, `75`, `80`, `85`, `90`, `95`, `100` |
| `{number}` | `0.5`, `1`, `1.5`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `{word}` | `first`, `last` |


---


## Examples

* **A container on tablet and above containing three coulmns (two 25% columns and one 50%)**

```html
<div class="pack">
  <div class="tier">
    <div class="cell:100 cell-sm:25">
      Here comes your content
    </div>
    <div class="cell:100 cell-sm:25">
      Here comes your content
    </div>
    <div class="cell:100 cell-sm:50">
      Here comes your content
    </div>
  </div>
</div>
```

* **A narrow container on desktop containing two 50% columns**

```html
<div class="pack extent-md:narrow">
  <div class="tier">
    <div class="cell:100 cell-md:50">
      Here comes your content
    </div>
    <div class="cell:100 cell-md:50">
      Here comes your content
    </div>
  </div>
</div>
```

* **A container on all devices with no gutters containing five 20% columns in reversed order that can not wrap**

```html
<div class="pack">
  <div class="tier flow:row-reverse-nowrap">
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

---


## Links
* [centum@1.0.0.css](https://raw.githubusercontent.com/MarwanAlsoltany/centum/master/centum@1.0.0.css)
* [centum@1.0.0.min.css](https://raw.githubusercontent.com/MarwanAlsoltany/centum/master/centum@1.0.0.min.css)

---


## License

Centum is an open-sourced package licensed under the **GPLv3** License