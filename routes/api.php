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
    Route::get('/get-category', 'API\CategoryController@index');
    Route::get('/get-article', 'API\ArticleController@index');
    Route::get('/get-category-article/{id}', 'API\ArticleController@getCategoryArticle');
    Route::get('/get-detail/{id}', 'API\ArticleController@getDetail');     

    //api get tag information
    Route::get('/get-tag', 'API\TagController@index');
    Route::get('/get-tag-detail/{id}', 'API\TagController@getPostTagDetail');


    //api get all ads information
    Route::get('/get-adsposition', 'API\AdsPositionController@getAdsPosition');
    Route::get('/get-adspost', 'API\AdsPostController@getAdsPost');
});

