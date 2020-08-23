// import React from 'react'
// import './crud.css'

// const Crud = (props) => (
//     <div>
//         <div className="main">
//             <h4>Step 1 : Install Laravel</h4>
//             <p>First of all we need to get fresh Laravel application using bellow command, So open your terminal OR command prompt and run bellow command:</p>
//             <pre>composer create-project --prefer-dist laravel/laravel LaravelCrud</pre>
//             <h4>Step 2: Database Configuration</h4>
//             <p>In second step, we will make database configuration.So let’s open .env file and fill all details like as bellow:</p>
//             <h3>.env</h3>
//             <pre>
//                 DB_CONNECTION=mysql<br />
//                 DB_HOST=127.0.0.1<br />
//                 DB_PORT=3306<br />
//                 DB_DATABASE=here your database name(LaravelCrud)<br />
//                 DB_USERNAME=here database username(root)<br />
//                 DB_PASSWORD=here database password()<br />
//             </pre>
//             <h4>Step 3: Create model with Migration</h4>
//             <p>Create Model and Migration Table using the below command.</p>
//             <pre>php artisan make:model Form -m</pre>
//             <em style={{ color: 'black'}}>*Note: This command will create both the model and migration file.</em>
//             <p>After this command you will find one file in following path “database/migrations” and you have to put bellow code in your migration file for create form table.</p>
//             <h3>database/migrations/create_forms_table.php</h3>
//             <pre>
//                 <code>
//                     &lt;?php.<br />
//                     use Illuminate\Support\Facades\Schema;<br />
//                     use Illuminate\Database\Schema\Blueprint;<br />
//                     use Illuminate\Database\Migrations\Migration;<br /><br />

//                     class CreateFormsTable extends Migration<br />
//                     &#123; <br />
//                     &nbsp;public function up()<br />
//                     &nbsp;&#123;<br />
//                     &nbsp;&nbsp;Schema::create('forms', function (Blueprint $table) &#123;<br />
//                     &nbsp;&nbsp;$table->bigIncrements('id');<br />
//                     &nbsp;&nbsp;$table->string('name');<br />
//                     &nbsp;&nbsp;$table->string('email');<br />
//                     &nbsp;&nbsp;$table->string('mobile_number');<br />
//                     &nbsp;&nbsp;$table->timestamps();<br />
//                     &nbsp;});<br />
//                     &nbsp;}<br />
//                     }
//                 </code>
//             </pre>
//             <p>Now you have to run this migration by using the following command:</p>
//             <pre>php artisan migrate</pre>
//             <h4>Step 4 : Add Route</h4>
//             <p>Here, we need to add route for our application. so open your “routes/web.php” file and add following route.</p>
//             <pre>
//                 <code>
//                     Route::get("/form","FormController@index");<br />
//                     Route::post("/form/store","FormController@store");<br />
//                     Route::get("/view","FormController@show");<br />
//                     Route::get("/view/&#123;id}/edit","FormController@edit");<br />
//                     Route::post("/view/&#123;id}/update","FormController@update");<br />
//                     Route::get("/view/&#123;id}/delete","FormController@destroy");<br />
//                 </code>
//             </pre>
//             <h4>Step 5 : Add Controller</h4>
//             <p>In this step, we should create new controller as FormController. So run bellow command and create new controller.</p>
//             <pre>php artisan make:controller FormController</pre>
//             <p>After bellow command you will find new file in this path “app/Http/Controllers/FormController.php”.</p><br />
//             <p>Now copy the bellow code and put on FormController.php file.</p>
//             <h3>app/Http/Controllers/FormController.php</h3>
//             <pre>
//                 <code>
//                     &lt;?php.<br />
//                     namespace App\Http\Controllers;<br /><br />
//                     use Illuminate\Http\Request;<br />
//                     use App\Form;<br /><br />
//                     class FormController extends Controller<br />
//                     &#123;<br />
//                     &nbsp;&nbsp;public function index()<br />
//                     &nbsp;&nbsp;&#123;<br />
//                     &nbsp;&nbsp;&nbsp;return view("Form");<br />
//                     &nbsp;&nbsp;}<br />
//                     }<br />
//                     public function store(Request $request)<br />
//                     &#123;<br />
//                     &nbsp;&nbsp;$request -> validate([<br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;'name' => 'required',<br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;'email' => 'required|email',<br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;'mobile_number' => 'required'<br />
//                     ]);<br />
//                     $form = new Form();<br />
//                     $form->name = $request->name;<br />
//                     $form->email = $request->email;<br />
//                     $form->mobile_number = $request->mobile_number;<br />
//                     $form->save();<br />
//                     return redirect()->back()->with('message', 'Submitted Succefully!');<br />
//                     }<br />
//                 </code>
//             </pre>
//         </div>
//     </div>


// );
// export default Crud;