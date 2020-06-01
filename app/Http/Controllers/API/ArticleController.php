<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Article;
use Response;
use DB;
use Validator;
class ArticleController extends Controller
{
    public function getArticle() {
        
        $articleapi = Article::select('id', 'user_id', 'categories_id', 
        	'title_kh','title_en','description_kh','description_en',
        	'images','article_kh','article_en','view')->get();

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
            'data'=>$articleapi
        ]);
        
    }

  public function getDetail($id){
     $articleapi = Article::select('id', 'user_id', 'categories_id', 
            'title_kh','title_en','description_kh','description_en',
            'images','article_kh','article_en','view')->where('id',$id)->first();

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
            'data'=>$articleapi
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
