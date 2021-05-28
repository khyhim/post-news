<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tag;
use App\PostTag;
use Response;
use DB;
use Validator;
class TagController extends Controller
{
    public function index() {
        
        $data = Tag::select('id', 'tag_title_kh', 'title_kh')->where('active',1)->get();

        return \Response::json([
            'message'=>'success',
            'success'=> true,
            'code' => 200,// status OK
            'data' => $data
        ]);
        
    }

    public function getPostTagDetail($id,Request $request) {

        $data =  PostTag::select('post_tags.tag_id','post_tags.article_id','tags.id','articles.id','articles.images','articles.title_kh','articles.description_kh')
        ->join('articles','articles.id','=','post_tags.article_id')
        ->join('tags','tags.id','=','post_tags.tag_id')
       ->where('post_tags.tag_id',$id)->orderBy('articles.id','DESC')->paginate($request->per_page);

        return \Response::json([
            'message'=>'success',
            'success'=> true,
            'code' => 200,// status OK
            'data' => $data->items()
        ]);

    }
}
