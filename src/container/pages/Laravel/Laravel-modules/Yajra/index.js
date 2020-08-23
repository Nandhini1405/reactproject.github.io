import React from 'react'
import './yajra.css'

const Yajra = (props) => (
    <div>
        <h3>YAJRA DATATABLE PACKAGE IN LARAVEL</h3>
        <div className="main-yajra">
            <h4>Step 1: Install Laravel 6</h4>
            <pre>composer create-project --prefer-dist laravel/laravel blog</pre>
            <h4>Step 2 : Install Yajra Datatable</h4>
            <p>We need to install yajra datatable composer package for datatable, so you can install using following command:</p>
            <pre>composer require yajra/laravel-datatables-oracle</pre>
            <p>After that you need to set providers and alias.</p>
            <h3>In config/app.php</h3>
            <pre>
                <code>
                .....<br />
                'providers' => [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;....<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Yajra\DataTables\DataTablesServiceProvider::class,<br />
                ]<br />
                'aliases' => [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;....<br />
                &nbsp;&nbsp;&nbsp;&nbsp;'DataTables' => Yajra\DataTables\Facades\DataTables::class,<br />
                ]<br />
                .....<br />
                </code>
            </pre>
            <h4>Step 3: Add Dummy Records</h4>
            <p>In this step, we will create some dummy users using tinker factory. so let’s create dummy records using bellow command:</p>
            <pre>
            php artisan tinker<br />
            factory(App\User::class, 200)->create();<br />
            </pre>
            <h4>Step 4: Add Route</h4>
            <p>In this is step we need to create route for datatables layout file and another one for getting data. so open your routes/web.php file and add following route.</p>
            <h3>In routes/web.php</h3>
            <pre>Route::get('users', ['uses'=>'UserController@index', 'as'=>'users.index']);</pre>
            <h4>Step 5: Create Controller</h4>
            <p>In this point, now we should create new controller as UserController. this controller will manage layout and getting data request and return response, so put bellow content in controller file:</p>
            <h3>In app/Http/Controllers/UserController.php</h3>
            <pre>
                <code>
                    &lt;?php<br />
                    namespace App\Http\Controllers;<br /><br />  
                    use App\User;<br />
                    use Illuminate\Http\Request;<br />
                    use DataTables;<br /><br />
                    class UserController extends Controller<br />
                    &#123;<br />
                    public function index(Request $request)
                    &#123;<br />
                    &nbsp;&nbsp;if ($request->ajax()) &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;$data = User::latest()->get();<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;return Datatables::of($data)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;->addIndexColumn()<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;->addColumn('action', function($row)&#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$btn = '&lt;a href="javascript:void(0)" class="edit btn btn-primary btn-sm">View&lt/a&gt';<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return $btn;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;->rawColumns(['action'])<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;->make(true);<br />
                    &nbsp;&nbsp;}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;return view('users');<br />
                    &nbsp;&nbsp;}<br />
                    }
                </code>
            </pre>
            <h4>Step 6: Create View</h4>
            <p>In Last step, let’s create users.blade.php(resources/views/users.blade.php) for layout and we will write design code here and put following code:</p>
            <h4>In resources/views/users.blade.php</h4>
            <pre>
                <code>
                &lt;!DOCTYPE html&gt;<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &nbsp;&nbsp;&lt;title&gt;Laravel 6 Datatables Tutorial&lt;/title&gt;<br />
                &nbsp;&nbsp;&lt;meta name="csrf-token" content="&#123;&#123; csrf_token() }}"&gt;<br />
                &nbsp;&nbsp;&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" /&gt;<br />
                &nbsp;&nbsp;&lt;link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet"&gt;<br />
                &nbsp;&nbsp;&lt;link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet"&gt;<br />
                &nbsp;&nbsp;&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"&gt;&lt;/script&gt;<br />
                &nbsp;&nbsp;&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.js"&gt;&lt;/script&gt;<br />
                &nbsp;&nbsp;&lt;script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"&gt;&lt;/script&gt;<br />
                &nbsp;&nbsp;&lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"&gt;&lt;/script&gt;<br />
                &nbsp;&nbsp;&lt;script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"&gt;&lt;/script&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &nbsp;&nbsp;&lt;div class="container"&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Laravel 6 Datatables Tutorial&lt;/h1&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;table class="table table-bordered data-table"&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;thead&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;No&lt;/th&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Email&lt;/th&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th width="100px"&gt;Action&lt;/th&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/thead&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/table&gt;<br />
                &nbsp;&nbsp;&lt;/div&gt;<br />
                &lt;/body&gt;<br />
                &lt;script type="text/javascript"&gt;<br />
                &nbsp;&nbsp;$(function () &#123;<br />

                &nbsp;&nbsp;&nbsp;&nbsp;var table = $('.data-table').DataTable(&#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;processing: true,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;serverSide: true,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;ajax: "&#123;&#123; route('users.index') }}",<br />
                &nbsp;&nbsp;&nbsp;&nbsp;columns: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;data: 'DT_RowIndex', name: 'DT_RowIndex'},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;data: 'name', name: 'name'},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;data: 'email', name: 'email'},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;data: 'action', name: 'action', orderable: false, searchable: false},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;});<br />
                &nbsp;&nbsp;&nbsp;&nbsp;});<br />
                &lt;/script&gt;<br />
                &lt;/html&gt;<br />
                </code>
            </pre>
            <p>Now run the below command in the Terminal</p>
            <pre>php artisan serve</pre>
            <p>Now you can open bellow url on your browser:</p>
            <pre>localhost:8000/users</pre>
        </div>
    </div>
    
);
export default Yajra;