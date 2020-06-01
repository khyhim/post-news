<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\TagBanner;
use Response;
use DB;
use Validator;
class TagBannersController extends Controller
{
    public function getTagBanner() {
        
        $tagbannerapi = TagBanner::select('id', 'tag_id', 'images','status')->get();

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
            'tagbannerapi'=>$tagbannerapi
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
