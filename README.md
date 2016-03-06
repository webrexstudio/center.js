# center.js
Center.js is jQuery library to make element center as compared to his outside
element. It's also work in responsive.

Demo available on http://www.webrexstudio.com/center/

Add script like this

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="dist/center.js"></script>
```

## 1. data-center
Horizontally and vertically center with single element.

This for first we need to assign outside element to data-box. Then need to
assign inside element to data-center. So here inside element set center as
compared to his outside element.

```html
<div class="center" data-center data-box>
	<div data-center data-box><p data-center>data-center</p></div>
</div>
```

![data-center](assets/images/data-center.jpg?raw=true )
## 2. data-mvcenter
Vertically center with multipal element.

This for first we need to assign outside element to data-box. Then need to
assign inside element to data-mvcenter. So here all inside element set
vertically center as compared to his outside element.

```html
<div class="mvcenter" data-box>
    <div data-mvcenter data-box><p data-center>data-mvcenter</p></div>
    <div data-mvcenter data-box><p data-center>data-mvcenter</p></div>
    <div data-mvcenter data-box><p data-center>data-mvcenter</p></div>
</div>
```

![data-mvcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-mvcenter.jpg)
## 3. data-mhcenter
Horizontally center with multipal element.

This for first we need to assign outside element to data-box. Then need to
assign inside element to data-mhcenter. So here all inside element set
horizontally center as compared to his outside element.

```html
<div class="mvcenter" data-box>
    <div data-mhcenter data-box><p data-center>data-mhcenter</p></div>
    <div data-mhcenter data-box><p data-center>data-mhcenter</p></div>
    <div data-mhcenter data-box><p data-center>data-mhcenter</p></div>
</div>
```

![data-mhcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-mhcenter.jpg)
## 4. data-vcenter
Vertically center with single element.

This for first we need to assign outside element to data-box. Then need to
assign inside element to data-vcenter. So here inside element set vertically
center as compared to his outside element.

```html
<div class="vcenter" data-box>
	<div data-vcenter data-box><p data-center>data-vcenter</p></div>
</div>
```

![data-vcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-vcenter.jpg)
## 5. data-hcenter
Horizontally center with single element.

This for first we need to assign outside element to data-box. Then need to
assign inside element to data-hcenter. So here inside element set horizontally
center as compared to his outside element.

```html
<div class="hcenter" data-box>
	<div data-hcenter data-box><p data-center>data-hcenter</p></div>
</div>
```

![data-hcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-hcenter.jpg)
## Use multiple data
Here below example in show that one data-box inside onther data-box. So we can
use multipal center.js element (data-center, data-vcenter, data-hcenter,
data-mvcenter, data-mhcenter). But we can't use one data-box in child in
multipal center.js element.

```html
<div class="mvcenter" data-box>
    <div data-mvcenter data-box><div data-hcenter data-box><p data-center>data-mvcenter</p></div></div>
    <div data-mvcenter data-box><div data-vcenter data-box><p data-center>data-mvcenter</p></div></div>
    <div data-mvcenter data-box><div data-mhcenter></div><div data-mhcenter></div></div>
</div>
```

![multiple-data](https://github.com/makasanas/center.js/raw/master/assets/images/multiple-data.jpg)
