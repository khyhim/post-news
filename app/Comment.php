<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //use DatePresenter;
 
  // fields can be filled
  protected $fillable = ['body', 'article_id'];
 
  public function article()
  {
    return $this->belongsTo('App\Article');
  }
 
}
