<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'cmspost'], function() {
    //api get All Article information
    Route::get('/get-category', 'API\CategoryController@getCategory');
    Route::get('/get-article', 'API\ArticleController@getArticle');
    Route::get('/get-comments', 'API\CommentsController@getComments');
    Route::get('/get-detail/{id}', 'API\ArticleController@getDetail');     

    //api get tag information
    Route::get('/get-tag', 'API\TagController@getTag');
    Route::get('/get-posttag', 'API\PostTagController@getPostTag');
    Route::get('/get-tagbanner', 'API\TagBannersController@getTagBanner');
   Route::get('/get-tagdetail/{id}', 'API\PostTagController@getPostTagDetail');


    //api get all ads information
    Route::get('/get-adsposition', 'API\AdsPositionController@getAdsPosition');
    Route::get('/get-adspost', 'API\AdsPostController@getAdsPost');
});

