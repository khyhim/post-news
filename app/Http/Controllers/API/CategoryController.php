<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Categories;
use Response;
use DB;
use Validator;

class CategoryController extends Controller
{
    public function index() {
        
       // http://127.0.0.1:8000/api/cmspost/get-category-article/2?per_page=2&page=2
        $data = Categories::select('*')->get();

        // $cate = [];
        // foreach($datas as $key => $data) {

        //     $article = DB::table('articles')
        //         ->whereCategoryId($data->cateId)->get();

        //     $cate[] = [
        //         'categoryName' => $data->name,
        //         'description' => $data->article,
        //         'posts' => $article
        //     ];
        // }

        return \Response::json([
            'message'=>'success',
            'success'=> true,
            'code' => 200,// status OK
            'data' => $data
        ]);
        
    }

    // public function postCategory(Request $request) {

    //     $validation = Validator::make($request->all(),[ 
    //         'name' => 'required',
    //         'article' => 'required',
    //     ]);
    
    //     if($validation->fails()){
    //         return Response::json([
    //             'code' => 200,// status OK
    //             'message' => $validation->messages()

    //         ]);
            
    //     }
        
    //     $cate = Category::create($request->all());

    //     return Response::json([
    //         'code' => 200,// status OK
    //         'message' => 'Category have been saved.'
    //     ]);

    // }
}

/*

    
<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Auth; 
use Validator;
use App\Post;
use App\Http\Controllers\ApiController; 


class PostController extends ApiController {​​​​​​​
    
    public $successStatus = 200;


    // === Register User === //
    public function register(Request $request) 
    {​​​​​​​ 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) {​​​​​​​ 
            return response()->json(['error'=>$validator->errors()], 401);            
        }​​​​​​​
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] =  $user->createToken('MyApp')->accessToken; 
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], $this->successStatus); 
    }​​​​​​​
    
    // === Login User === // 
    public function login(){​​​​​​​ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){​​​​​​​ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            return response()->json(['success' => $success], $this->successStatus); 
        }​​​​​​​ 
        else{​​​​​​​ 
            return response()->json(['error'=>'Unauthorized'], 401); 
        }​​​​​​​ 
    }​​​​​​​





    // === View Detail User === //
    public function details() 
    {​​​​​​​ 
        $user = Auth::user(); 
        return response()->json(['success' => $user], $this->successStatus); 
    }​​​​​​​ 


    // public function index(Request $request)
    // {​​​​​​​


    //     // using per_page //http://localhost:8000/api/getpost?per_page=1&page=2
    //      $queryPost = Post::with([
    //         'category'=>function($query){​​​​​​​
    //             $query->select('id','name');
    //         }​​​​​​​,
    //         'user'=>function($query){​​​​​​​
    //             $query->select('id','name');   
    //         }​​​​​​​
    //     ])->paginate($request->per_page);
    //     return \Response::json([
    //         'message'=>'success',
    //         'code' => 200,// status OK
    //         'data'=>$queryPost->items()
    //     ]);


    
    // }​​​​​​​


    public function index(Request $request){​​​​​​​
        
        $queryPost = Post::paginate($request->per_page);


        return \Response::json([
            'message'=>'success',
            "success": true,
            'code' => 200,// status OK
            'data'=>$queryPost->showAll($queryPost->items());
        ]);


        
    }​​​​​​​


    public function store(Request $request)
    {​​​​​​​
        
        $validation = Validator::make($request->all(),[ 
            'name' => 'required',
            'price' => 'required',
            'title' => 'required',
            'category_name' => 'required',
        ]);
    
        if($validation->fails()){​​​​​​​
            return \Response::json([
                'code' => 200,// status OK
                'message' => $validation->messages()


            ]);
            
        }​​​​​​​
        
        $queryPost = Post::create($request->all());


        // return \Response::json([
        //     'code' => 200,// status OK
        //     'message' => 'success'
        // ]);


        return $this->showOne($queryPost,201);
    }​​​​​​​



    public function update(Request $request, Post $post)
    {​​​​​​​
        $queryPost = Post::find($request->id);
        $queryPost->name = $request->name;
        $queryPost->price = $request->price;
        $queryPost->title = $request->title;
        $queryPost->category_name = $request->category_name;


        $queryPost->save();


        return \Response::json([
            'code' => 200,// status OK
            'message' => 'success'
        ]);
    }​​​​​​​


    public function destroy(Request $request, Post $post)
    {​​​​​​​
        $queryPost = Post::find($request->id);


        $queryPost->delete();


        return \Response::json([
            'code' => 200,// status OK
            'message' => 'success'
        ]);


    }​​​​​​​



}​​​​​​​



*/