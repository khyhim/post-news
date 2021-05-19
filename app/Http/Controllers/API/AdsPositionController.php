<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\AdsPosition;
use Response;
use DB;
use Validator;
class AdsPositionController extends Controller
{
     public function getAdsPosition() {
        
        $adsPositionapi = AdsPosition::select('id', 'position')->get();

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
            'adsPositionapi'=>$adsPositionapi
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
