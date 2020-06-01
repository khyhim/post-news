<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Comment;
use Response;
use DB;
use Validator;
class CommentsController extends Controller
{
    public function getComments() {
        
        $commentsapi = Comment::select('id', 'article_id','body')->get();

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

        return Response::json([
            'code' => 200,// status OK
            //'data' => $cate
            'commentsapi'=>$commentsapi
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
