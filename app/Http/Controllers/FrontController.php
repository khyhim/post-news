<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories;
use App\Tag;
use App\PostTag;
use App\Article;
use App\AdsPost;
use App\AdsPosition;
use App\TagBanner;
use App\Comment;
use DB;
use Response;
class FrontController extends Controller
{
    public function index(){


      $categorylast = Categories::orderBy('id', 'ASC')->where('active',1)->get();
     
      $entertainment = Article::orderBy('id', 'desc')->where('categories_id',1)->paginate(8);
      $entertainmentleft = Article::orderBy('id', 'desc')->where('categories_id',1)->paginate(1);
      $socialseft = Article::orderBy('id', 'desc')->where('categories_id',3)->paginate(1);
      $social = Article::orderBy('id', 'desc')->where('categories_id',3)->paginate(8);
      $sportleft = Article::orderBy('id', 'desc')->where('categories_id',4)->paginate(1);
      $sport = Article::orderBy('id', 'desc')->where('categories_id',4)->paginate(8);
      $techleft = Article::orderBy('id', 'desc')->where('categories_id',2)->paginate(1);
      $tech = Article::orderBy('id', 'desc')->where('categories_id',2)->paginate(8);

      $adstop = AdsPost::orderBy('id', 'desc')->where('adsposition_id',3)->get();
      $adsvideo = AdsPost::orderBy('id', 'desc')->where('adsposition_id',2)->get();

      $article = Article::orderBy('id', 'desc')->paginate(8);

      $viewddd = Article::orderBy('id', 'desc')->where('categories_id',5)->paginate(11);

      $frontPost =  DB::table('articles')
      ->select('articles.*','categories.*')
      ->join("categories", "categories.id","=","articles.categories_id")
      ->orderBy('articles.id','DESC')->where('categories_id','!=', 5)->paginate(4);
     
        return view('index', compact('frontPost','social','entertainmentleft','tech','techleft','sport','adstop','socialseft','adsvideo','article','viewddd','categorylast','entertainment'));
     
    }





  public function press($id,Request $request){

    $categorylast = Categories::orderBy('id', 'ASC')->where('active',1)->get();
  
    $pressall=Article::orderBy('id', 'DESC')->where('categories_id',$id)->paginate(15); 
     
    return view('press')->with('tag',$tag)->with('categorylast',$categorylast)
    ->with('pressall',$pressall);
  }

  public function pressrelease($id,Request $request){
    $pressrelease=Article::find($id);  

    $view = DB::table('articles')->select('user_id')->first();

   $userId= $view->user_id;
    
    $cms_users = DB::table('cms_users')->where('id', '=', $userId)->first();
    //dd($cms_users->name);
    $wordCount = DB::table('comments')->where('article_id', '=', $id)->count();    

    $categorylast = Categories::orderBy('id', 'ASC')->where('active',1)->get();
   

    $countview = Article::where('view',$id); 
    $comment = Comment::orderBy('id', 'desc')->where('article_id',$id)->get();
    $relateTag =  DB::table('post_tags')
->select('post_tags.tag_id','post_tags.article_id','tags.*')
// ->join('posts','posts.id','=','post_tags.post_id')
->join('tags','tags.id','=','post_tags.tag_id')
->where('post_tags.article_id',$id)->get();
foreach($relateTag as $relateTags){
   $idTag =$relateTags->tag_id;
}
// dd($relateTag);
$relat_posts =  DB::table('post_tags')
->select('post_tags.tag_id','post_tags.article_id','tags.id','articles.*')
->join('articles','articles.id','=','post_tags.article_id')
->join('tags','tags.id','=','post_tags.tag_id')
->where('post_tags.tag_id',$idTag)->take(9)->get();




     return view('pressrelease')->with('pressrelease',$pressrelease)->with('cms_users',$cms_users)
    ->with('categorylast',$categorylast)->with('relateTag',$relateTag)
    ->with('relat_posts',$relat_posts)->with('countview',$countview)->with('comment',$comment)->with('wordCount',$wordCount);
      }

      public function tag($id){

          $categorylast = Categories::orderBy('id', 'ASC')->where('active',1)->get();
          $tagall =  DB::table('post_tags')
              ->select('post_tags.tag_id','post_tags.article_id','tags.id','articles.id','articles.images','articles.title_kh','articles.title_en','articles.description_kh','articles.description_en')
              ->join('articles','articles.id','=','post_tags.article_id')
              ->join('tags','tags.id','=','post_tags.tag_id')
              ->where('post_tags.tag_id',$id)->orderBy('articles.id','DESC')->paginate(15);

          $tagbanner=TagBanner::orderBy('id', 'desc')->where('tag_id',$id)->where('status',1)->paginate(1);

          return view('tag')
              ->with('categorylast',$categorylast)->with('tagall',$tagall)
              ->with('tag',$tag)->with('tagbanner',$tagbanner);
      }
    
    
        public function update(Request $request)
          { 
              $id = $request->postId;
              
              $view = DB::table('articles')->select('view')->where('id',$id)->first()->view;
              $view = $view + 1;
              
              $result = DB::table('articles')->where('id', $id)->update(['view' => $view]);
              
              if($result) {
                return response::json(['data' => "Success" ]);
              } else {
                return response::json(['data' => "Failed" ]);
              }
            
          }    
          
          
}