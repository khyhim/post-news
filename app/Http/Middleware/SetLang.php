<?php
 
namespace App\Http\Middleware;
 
use Closure;
use Session;
use App;
use Config;
 
class SetLang
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Session::has("lang")) {
            $lang = Session::get("lang");
        } else {
            // check browser lang - https://learninglaravel.net/detect-and-change-language-on-the-fly-with-laravel
            $lang = substr($request->server('HTTP_ACCEPT_LANGUAGE'), 2, 0);
 
            if ($lang != 'kh' && $lang != 'en') {
                $lang = 'kh';
            }
        }
 
        App::setLocale($lang);
        return $next($request);
    }
}