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
    public function index(Request $request){
     // $pressrelease=Article::find($id);
      $category = Categories::orderBy('id', 'ASC')->where('order_level',1)->get();
      $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
      $tag = Tag::orderBy('id', 'ASC')->where('order_level',1)->get();     
     
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

      $potstag = PostTag::orderBy('id','DESC')->paginate(3);      
      $article = Article::orderBy('id', 'desc')->paginate(8);    
    
      return view('index')->with('category',$category)->with('tag',$tag)->with('entertainment',$entertainment)
      ->with('adstop',$adstop)->with('adsvideo',$adsvideo)->with('potstag',$potstag)->with('article',$article)->with('entertainmentleft',$entertainmentleft)
      ->with('categorylast',$categorylast)->with('socialseft',$socialseft)->with('social',$social)
      ->with('sportleft',$sportleft)->with('sport',$sport)->with('techleft',$techleft)->with('tech',$tech)
      ;
    }

  public function press($id,Request $request){
    //$press = Article::find($id);
    $category = Categories::orderBy('id', 'ASC')->where('order_level',1)->get();
    $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
    $tag = Tag::orderBy('id', 'ASC')->where('order_level',1)->get(); 
   
    
    $pressall=Article::orderBy('id', 'DESC')->where('categories_id',$id)->paginate(15); 
    $articleview = Article::orderBy('view','DESC')->paginate(8);      
    $article = Article::orderBy('id', 'desc')->paginate(8); 
    
    $adstoppress = AdsPost::orderBy('id', 'desc')->where('adsposition_id',3)->get();
    $adspressbartop = AdsPost::orderBy('id', 'desc')->where('adsposition_id',4)->get();
    $adspressbarcenter = AdsPost::orderBy('id', 'desc')->where('adsposition_id',5)->get();
    $adspressbarbottom = AdsPost::orderBy('id', 'desc')->where('adsposition_id',6)->get();
     
    return view('press')->with('category',$category)->with('tag',$tag)->with('categorylast',$categorylast)
    ->with('pressall',$pressall)->with('articleview',$articleview)->with('article',$article)
    ->with('adstoppress',$adstoppress)->with('adspressbartop',$adspressbartop)
    ->with('adspressbarcenter',$adspressbarcenter)->with('adspressbarbottom',$adspressbarbottom);
  }

  public function pressrelease($id,Request $request){
    $pressrelease=Article::find($id);  

    $view = DB::table('articles')->select('user_id')->first();

   $userId= $view->user_id;
    
    $cms_users = DB::table('cms_users')->where('id', '=', $userId)->first();
    //dd($cms_users->name);
    $wordCount = DB::table('comments')->where('article_id', '=', $id)->count();    
    $category = Categories::orderBy('id', 'ASC')->where('order_level',1)->get();
    $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
    $tag = Tag::orderBy('id', 'ASC')->where('order_level',1)->get(); 
   
    $articleview = Article::orderBy('view','DESC')->paginate(8);     
    $article = Article::orderBy('id', 'desc')->paginate(8); 
    $adstoppress = AdsPost::orderBy('id', 'desc')->where('adsposition_id',3)->get();

    $pressreleasetop = AdsPost::orderBy('id')->where('adsposition_id',7)->get();
    $pressreleasecenter = AdsPost::orderBy('id', 'desc')->where('adsposition_id',8)->get();
    $pressreleasebottom = AdsPost::orderBy('id', 'desc')->where('adsposition_id',9)->get();
    $countview = Article::where('view',$id); 
    $comment = Comment::orderBy('id', 'desc')->where('article_id',$id)->get();
    $relat_posts=Article::orderBy('id', 'DESC')->where('categories_id',$request->pressrelease)->paginate(9);
     return view('pressrelease')->with('pressrelease',$pressrelease)->with('category',$category)->with('tag',$tag)->with('cms_users',$cms_users)
    ->with('categorylast',$categorylast)->with('articleview',$articleview)->with('article',$article)->with('adstoppress',$adstoppress)
    ->with('pressreleasetop',$pressreleasetop)->with('pressreleasecenter',$pressreleasecenter)->with('pressreleasebottom',$pressreleasebottom)
    ->with('relat_posts',$relat_posts)->with('countview',$countview)->with('comment',$comment)->with('wordCount',$wordCount);
      }

      public function tag($id,Request $request){
        //$press = Article::find($id);  

        $category = Categories::orderBy('id', 'ASC')->where('order_level',1)->get();
        $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
        $tag = Tag::orderBy('id', 'ASC')->where('order_level',1)->get(); 
        $tagbanner=TagBanner::orderBy('id', 'desc')->where('tag_id',$id)->where('status',1)->paginate(1);
          
        $press=Article::orderBy('id', 'DESC')->where('categories_id',$id)->paginate(2); 
        $tagall=PostTag::orderBy('id', 'DESC')->where('tag_id',$id)->paginate(15); 
        $potstag = PostTag::orderBy('id','DESC')->paginate(8);      
        $potstagview = PostTag::orderBy('view', 'desc')->paginate(8); 
        
        $adstoppress = AdsPost::orderBy('id', 'desc')->where('adsposition_id',3)->get();
        $tagtop = AdsPost::orderBy('id', 'desc')->where('adsposition_id',10)->get();
        $tagcenter = AdsPost::orderBy('id', 'desc')->where('adsposition_id',11)->get();
        $tagbottom = AdsPost::orderBy('id', 'desc')->where('adsposition_id',12)->get();
         
        return view('tag')->with('press',$press)->with('category',$category)->with('tag',$tag)->with('categorylast',$categorylast)
        ->with('tagall',$tagall)->with('potstag',$potstag)->with('potstagview',$potstagview)
        ->with('tagbanner',$tagbanner)->with('adstoppress',$adstoppress)->with('tagtop',$tagtop)
        ->with('tagcenter',$tagcenter)->with('tagbottom',$tagbottom);
      }
    
      public function tagrelease($id,Request $request){
        $tagsrelease=PostTag::find($id);
        $view = DB::table('articles')->select('user_id')->first();
        $userId= $view->user_id;
        $cms_users = DB::table('cms_users')->where('id', '=', $userId)->first();

        $category = Categories::orderBy('id', 'ASC')->where('order_level',1)->get();
        $categorylast = Categories::orderBy('id', 'ASC')->where('order_level',2)->get();
        $tag = Tag::orderBy('id', 'ASC')->where('order_level',1)->get(); 
    
        $potstag = PostTag::orderBy('id','DESC')->paginate(8);      
        $potstagview = PostTag::orderBy('view', 'desc')->paginate(8); 
        $adstoppress = AdsPost::orderBy('id', 'desc')->where('adsposition_id',3)->get();
    
        $tagreleasetop = AdsPost::orderBy('id')->where('adsposition_id',13)->get();
        $tagreleasecenter = AdsPost::orderBy('id', 'desc')->where('adsposition_id',14)->get();
        $tagreleasebottom = AdsPost::orderBy('id', 'desc')->where('adsposition_id',15)->get();    
  
        $tag_posts=PostTag::orderBy('id', 'DESC')->where('tag_id',$request->tagrelease)->paginate(9);
         return view('tagrelease')->with('tagsrelease',$tagsrelease)->with('category',$category)->with('tag',$tag)
        ->with('categorylast',$categorylast)->with('potstag',$potstag)->with('potstagview',$potstagview)->with('adstoppress',$adstoppress)
        ->with('tagreleasetop',$tagreleasetop)->with('tagreleasecenter',$tagreleasecenter)->with('tagreleasebottom',$tagreleasebottom)
        ->with('tag_posts',$tag_posts)->with('cms_users',$cms_users);
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
