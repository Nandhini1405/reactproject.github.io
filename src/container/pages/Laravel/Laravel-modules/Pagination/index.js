import React from 'react'
import '../Pagination/pagination.css'

const Pagination = (props) => (
    <div>
        <h3>Pagination</h3>
        <div className="main-page">
            <h4>Step 1: Add Route</h4>
            <p>First thing is we put one route in one for list users with pagination. So simple add both routes in your route file.</p>
            <h3>In routes/web.php</h3>
            <pre>Route::get('users', 'UserController@index');</pre>
            <h4>Step 2: Create Controller</h4>
            <p>Same things as above for route, here we will add one new method for route. index() will return users with pagination data, so let’s add bellow:</p>
            <h3>app/Http/Controllers/UserController.php</h3>
            <pre>
            public function index()<br />
            &#123;<br />
            &nbsp;&nbsp;$data = User::paginate(10);<br />
            &nbsp;&nbsp;return view('users',compact('data'));<br />
            }
            </pre>
            <h4>Step 3: Create Blade File</h4>
            <p>In this step, you need to create users blade file and put bellow code with links() so it will generate pagination automatically. So let’s put it.</p>
            <h3>In resources/views/users.blade.php</h3>
            <pre>
                <code>
                @extends($theme)<br />
                @section('content')<br />
                &lt;table class="table table-bordered"&gt;<br />
                &nbsp;&lt;thead&gt;<br />
                &nbsp;&nbsp;&lt;tr&gt;<br />
                &nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt;<br />
                &nbsp;&nbsp;&lt;th width="300px;"&gt;Action&lt;/th&gt;<br />
                &nbsp;&nbsp;&lt;/tr&gt;<br />
                &nbsp;&lt;/thead&gt;<br />
                &nbsp;&lt;tbody&gt;<br />
                &nbsp;&nbsp;@if(!empty($data) &amp;&amp; $data->count())<br />
                &nbsp;&nbsp;@foreach($data as $key => $value)<br />
                &nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;&#123; $value->name }}&lt;/td&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btn btn-danger"&gt;Delete&lt;/button&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
                &nbsp;&nbsp;@endforeach<br />
                &nbsp;&nbsp;@else<br />
                &nbsp;&nbsp;&lt;tr&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;td colspan="10"&gt;There are no data.&lt;/td&gt;<br />
                &nbsp;&nbsp;&lt;/tr&gt;<br />
                &nbsp;&nbsp;@endif<br />
                &nbsp;&lt;/tbody&gt;<br />
                &lt;/table&gt;<br />
                &nbsp;&#123;!! $data-&gt;links() !!}<br />
                @endsection
                </code>
            </pre>
            <p>Now you can run and check this example.</p>
        </div>
    </div>
);
export default Pagination;