<?php

namespace App\Providers;
use Illuminate\Support\Facades\View;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Categories;
use App\Tag;
use App\Article;
use App\AdsPost;
use App\Social;
use App\GeneralSitting;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        View::share('adsbottom', AdsPost::orderBy('id', 'desc')->where('adsposition_id',8)->where('active',1)->get());

        View::share('adscenter',AdsPost::orderBy('id', 'desc')->where('adsposition_id',6)->where('active',1)->get());

        View::share('adstop',AdsPost::orderBy('id')->where('adsposition_id',7)->where('active',1)->get());
        View::share('adsTagHeadLine',AdsPost::orderBy('id', 'desc')->where('adsposition_id',12)->where('active',1)->first());

        View::share('adsheadline',AdsPost::where('adsposition_id',1)->where('active',1)->first());
        View::share('articleview', Article::orderBy('view', 'DESC')->paginate(8));
        View::share('article', Article::orderBy('id', 'DESC')->paginate(8));
        View::share('categorysssss', Categories::orderBy('id', 'ASC')->where('order_level',1)->get());
        View::share('tagssss', Tag::orderBy('id', 'DESC')->where('order_level',1)->get());
       View::share('socialssssss', Social::orderBy('id', 'ASC')->where('status',1)->get());
       View::share('generalSitting', GeneralSitting::first());
        View::share('adspressbarbottom', AdsPost::orderBy('id', 'desc')->where('adsposition_id',6)->get());
        View::share('adspressbarcenter', AdsPost::orderBy('id', 'desc')->where('adsposition_id',5)->get());
        View::share('adspressbartop', AdsPost::orderBy('id', 'desc')->where('adsposition_id',4)->get());
        View::share('adstoppress', AdsPost::orderBy('id', 'desc')->where('adsposition_id',3)->get());
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
