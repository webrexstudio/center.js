# center.js
Center.js is jQuery library to make element center as compared to his outside element. It's also work in responsive.

<h2>1. data-center <p>( Horizontally and vertically center with single element )</p></h2>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-center. So here inside element set center as compared to his outside element.</p>
<pre>
  <code>
&lt;div class="center" data-center data-box&gt;<br />
	&lt;div data-center data-box&gt;&lt;p data-center&gt;data-center&lt;/p&gt;&lt;/div&gt;<br />
&lt;/div&gt;
  </code>
</pre>
<div class="center" data-box>

	<div data-center data-box><p data-center>data-center</p></div>
</div>

<h2>2. data-mvcenter <p>( Vertically center with multipal element )</p></h2>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-mvcenter. So here all inside element set vertically center as compared to his outside element.</p>
<pre>
  <code>
&lt;div class="mvcenter" data-box&gt;<br />

    &lt;div data-mvcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;<br />
    &lt;div data-mvcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;<br />
    &lt;div data-mvcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;<br />
&lt;/div&gt;
  </code>
</pre>
<div class="mvcenter" data-box>
	<div data-mvcenter data-box><p data-center>data-mvcenter</p></div>
    <div data-mvcenter data-box><p data-center>data-mvcenter</p></div>
    <div data-mvcenter data-box><p data-center>data-mvcenter</p></div>
</div>
<h2>3. data-mhcenter <p>( Horizontally center with multipal element )</p></h2>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-mhcenter. So here all inside element set horizontally center as compared to his outside element.</p>
<pre>
  <code>
&lt;div class="mvcenter" data-box&gt;<br />
    &lt;div data-mhcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;<br />
    &lt;div data-mhcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;<br />
    &lt;div data-mhcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;<br />
&lt;/div&gt;
  </code>
</pre>
<div class="mvcenter" data-box>
	<div data-mhcenter data-box><p data-center>data-mvcenter</p></div>
    <div data-mhcenter data-box><p data-center>data-mvcenter</p></div>
    <div data-mhcenter data-box><p data-center>data-mvcenter</p></div>
</div>

<h2>4. data-vcenter <p>( Vertically center with single element )</p></h2>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-vcenter. So here inside element set vertically center as compared to his outside element.</p>
<pre>
  <code>
&lt;div class="vcenter" data-box&gt;<br />
	&lt;div data-vcenter data-box&gt;&lt;p data-center&gt;data-vcenter&lt;/p&gt;&lt;/div&gt;<br />
&lt;/div&gt;
  </code>
</pre>
<div class="vcenter" data-box>
	<div data-vcenter data-box><p data-center>data-vcenter</p></div>
</div>
<h2>5. data-hcenter <p>( Horizontally center with single element )</p></h2>
<p>This for first we need to assign outside element to data-box. Then need to assign inside element to data-hcenter. So here inside element set horizontally center as compared to his outside element.</p>
<pre>
  <code>
&lt;div class="hcenter" data-box&gt;<br />
	&lt;div data-hcenter data-box&gt;&lt;p data-center&gt;data-hcenter&lt;/p&gt;&lt;/div&gt;<br />
&lt;/div&gt;
  </code>
</pre>
<div class="hcenter" data-box>
	<div data-hcenter data-box><p data-center>data-hcenter</p></div>
</div>
<h2>Use multiple data</h2>
<p>Here below example in show that one data-box inside onther data-box. So we can use multipal center.js element (data-center, data-vcenter, data-hcenter, data-mvcenter, data-mhcenter). But we can't use one data-box in child in multipal center.js element.</p>
<pre>
  <code>
&lt;div class="mvcenter" data-box&gt;<br />
    &lt;div data-mvcenter data-box&gt;&lt;div data-hcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;<br />
    &lt;div data-mvcenter data-box&gt;&lt;div data-vcenter data-box&gt;&lt;p data-center&gt;data-mvcenter&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;<br />
    &lt;div data-mvcenter data-box&gt;&lt;div data-mhcenter&gt;&lt;/div&gt;&lt;div data-mhcenter&gt;&lt;/div&gt;&lt;/div&gt;<br />
&lt;/div&gt;
  </code>
</pre>
<div class="mvcenter" data-box>
	<div data-mvcenter data-box><div data-hcenter data-box><p data-center>data-hcenter</p></div></div>
    <div data-mvcenter data-box><div data-vcenter data-box><p data-center>data-vcenter</p></div></div>
    <div data-mvcenter data-box><div data-mhcenter></div><div data-mhcenter></div></div>
</div>
