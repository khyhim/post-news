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


      $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
     
      $entertainment = Article::orderBy('id', 'desc')->where('categories_id',1)->paginate(8);
      $entertainmentleft = Article::orderBy('id', 'desc')->where('categories_id',1)->paginate(1);
      $socialseft = Article::orderBy('id', 'desc')->where('categories_id',3)->paginate(1);
      $social = Article::orderBy('id', 'desc')->where('categories_id',3)->paginate(8);
      $sportleft = Article::orderBy('id', 'desc')->where('categories_id',4)->paginate(1);
      $sport = Article::orderBy('id', 'desc')->where('categories_id',4)->paginate(8);
      $techleft = Article::orderBy('id', 'desc')->where('categories_id',2)->paginate(1);
      $tech = Article::orderBy('id', 'desc')->where('categories_id',2)->paginate(8);

        $adstop = AdsPost::orderBy('id', 'desc')->where('adsposition_id',1)->get();
        $adsvideo = AdsPost::orderBy('id', 'desc')->where('adsposition_id',2)->get();

        $article = Article::orderBy('id', 'desc')->paginate(8);

        $view = Article::orderBy('view', 'desc')->paginate(3);

        return view('index')->with('entertainment',$entertainment)
      ->with('adstop',$adstop)->with('adsvideo',$adsvideo)->with('view',$view)->with('article',$article)->with('entertainmentleft',$entertainmentleft)
      ->with('categorylast',$categorylast)->with('socialseft',$socialseft)->with('social',$social)
      ->with('sportleft',$sportleft)->with('sport',$sport)->with('techleft',$techleft)->with('tech',$tech)
      ;
    }





  public function press($id,Request $request){

    $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
  
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

    $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
   

    $pressreleasetop = AdsPost::orderBy('id')->where('adsposition_id',7)->get();
    $pressreleasecenter = AdsPost::orderBy('id', 'desc')->where('adsposition_id',8)->get();
    $pressreleasebottom = AdsPost::orderBy('id', 'desc')->where('adsposition_id',9)->get();

    $countview = Article::where('view',$id); 
    $comment = Comment::orderBy('id', 'desc')->where('article_id',$id)->get();
    $relat_posts=Article::orderBy('id', 'DESC')->where('categories_id',$request->pressrelease)->paginate(9);
     return view('pressrelease')->with('pressrelease',$pressrelease)->with('cms_users',$cms_users)
    ->with('categorylast',$categorylast)
    ->with('pressreleasetop',$pressreleasetop)->with('pressreleasecenter',$pressreleasecenter)->with('pressreleasebottom',$pressreleasebottom)
    ->with('relat_posts',$relat_posts)->with('countview',$countview)->with('comment',$comment)->with('wordCount',$wordCount);
      }

      public function tag($id){

          $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
          $tagall =  DB::table('post_tags')
              ->select('post_tags.tag_id','post_tags.article_id','tags.id','articles.id','articles.images','articles.title_kh','articles.title_en','articles.description_kh','articles.description_en')
              ->join('articles','articles.id','=','post_tags.article_id')
              ->join('tags','tags.id','=','post_tags.tag_id')
              ->where('post_tags.tag_id',$id)->orderBy('articles.id','DESC')->paginate(15);

          $tagbanner=TagBanner::orderBy('id', 'desc')->where('tag_id',$id)->where('status',1)->paginate(1);
          $adstoppress = AdsPost::orderBy('id', 'desc')->where('adsposition_id',3)->get();
          $tagtop = AdsPost::orderBy('id', 'desc')->where('adsposition_id',10)->get();
          $tagcenter = AdsPost::orderBy('id', 'desc')->where('adsposition_id',11)->get();
          $tagbottom = AdsPost::orderBy('id', 'desc')->where('adsposition_id',12)->get();

          return view('tag')->with('adstoppress',$adstoppress)
              ->with('categorylast',$categorylast)->with('tagcenter',$tagcenter)->with('tagall',$tagall)
              ->with('tag',$tag)->with('tagbanner',$tagbanner)->with('tagtop',$tagtop)
              ->with('tagbottom',$tagbottom);
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