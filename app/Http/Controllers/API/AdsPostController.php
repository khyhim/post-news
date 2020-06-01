<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\AdsPost;
use Response;
use DB;
use Validator;
class AdsPostController extends Controller
{
   public function getAdsPost() {
        
        $adsPostapi = AdsPost::select('id', 'adsposition_id','images','url')->get();

        return Response::json([
            'code' => 200,// status OK
            //'data' => $cate
            'data'=>$adsPostapi
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