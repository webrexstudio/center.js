# center.js
Center.js is jQuery library to make element center as compared to his outside element. It's also work in responsive.

Demo available on <a href="http://www.frontendevelopers.com/center/" target="_blank">http://www.frontendevelopers.com/center/</a>

<h2>1. data-center </h2>
<p>Horizontally and vertically center with single element.</p>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-center. So here inside element set center as compared to his outside element.</p>
<pre>
&lt;div class="center" data-center data-box&gt;
	&lt;div data-center data-box&gt;&lt;p data-center&gt;data-center&lt;/p&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
![data-center](assets/images/data-center.jpg?raw=true )
<h2>2. data-mvcenter </h2>
<p> Vertically center with multipal element.</p>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-mvcenter. So here all inside element set vertically center as compared to his outside element.</p>
<pre>
&lt;div class="mvcenter" data-box&gt;
    &lt;div data-mvcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;
    &lt;div data-mvcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;
    &lt;div data-mvcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
![data-mvcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-mvcenter.jpg)
<h2>3. data-mhcenter</h2>
 <p>Horizontally center with multipal element.</p>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-mhcenter. So here all inside element set horizontally center as compared to his outside element.</p>
<pre>
&lt;div class="mvcenter" data-box&gt;
    &lt;div data-mhcenter data-box&gt;&lt;p data-center&gt;data-mhcenter&lt;/p&gt;&lt;/div&gt;
    &lt;div data-mhcenter data-box&gt;&lt;p data-center&gt;data-mhcenter&lt;/p&gt;&lt;/div&gt;
    &lt;div data-mhcenter data-box&gt;&lt;p data-center&gt;data-mhcenter&lt;/p&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
![data-mhcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-mhcenter.jpg)
<h2>4. data-vcenter </h2>
<p>Vertically center with single element.</p>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-vcenter. So here inside element set vertically center as compared to his outside element.</p>
<pre>
&lt;div class="vcenter" data-box&gt;
	&lt;div data-vcenter data-box&gt;&lt;p data-center&gt;data-vcenter&lt;/p&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
![data-vcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-vcenter.jpg)
<h2>5. data-hcenter </h2>
<p>Horizontally center with single element.</p>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-hcenter. So here inside element set horizontally center as compared to his outside element.</p>
<pre>
&lt;div class="hcenter" data-box&gt;
	&lt;div data-hcenter data-box&gt;&lt;p data-center&gt;data-hcenter&lt;/p&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
![data-hcenter](https://github.com/makasanas/center.js/raw/master/assets/images/data-hcenter.jpg)
<h2>Use multiple data</h2>
<p>Here below example in show that one data-box inside onther data-box. So we can use multipal center.js element (data-center, data-vcenter, data-hcenter, data-mvcenter, data-mhcenter). But we can't use one data-box in child in multipal center.js element.</p>
<pre>
&lt;div class="mvcenter" data-box&gt;
    &lt;div data-mvcenter data-box&gt;&lt;div data-hcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div data-mvcenter data-box&gt;&lt;div data-vcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;div data-mvcenter data-box&gt;&lt;div data-mhcenter&gt;&lt;/div&gt;&lt;div data-mhcenter&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
![multiple-data](https://github.com/makasanas/center.js/raw/master/assets/images/multiple-data.jpg)
