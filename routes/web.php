<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


    // Frond end
    Route::get('/', ['uses' => 'FrontController@index', 'as' => 'index']);
    Route::get('/press/{id}', ['uses' => 'FrontController@press', 'as' => 'press']);    
    Route::get('/pressrelease/{id}', ['uses' => 'FrontController@pressrelease', 'as' => 'pressrelease']);
    Route::get('/tag/{id}', ['uses' => 'FrontController@tag', 'as' => 'tag']);    
    Route::get('/tagrelease/{id}', ['uses' => 'FrontController@tagrelease', 'as' => 'tagrelease']);
    //route Language
    Route::get('lang/{lang}', function($lang) {
        \Session::put('lang', $lang);
        return \Redirect::back();
      })->middleware('web')->name('change_lang');

    Route::post('/comments', ['uses' => 'CommentsController@store', 'as' => 'comments.store']);
    Route::post('/view', ['uses' => 'FrontController@update', 'as' => 'view.update']);

    Route::post('/shareCount', 'FrontController@share')->name('shareCount');
    Route::post('/viewCount', 'FrontController@update')->name('viewCount');
   
