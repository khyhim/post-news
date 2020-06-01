<?php
 
namespace App\Http\Controllers;
 
use App\Comment;
use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
 
class CommentsController extends Controller
{
    
    public function store(Request $Request)
    {
        $comment= new Comment();    
        //$article = Article::findOrFail($request->article_id);     
        $comment->body=$Request->body;   
        $comment->article_id=$Request->article_id;   	
    	$comment->save();
		return back();
    }
}