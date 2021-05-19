@extends('layouts.frondend')
@section('contentlayout')
    <?php $lang = session()->get('lang') ; ?>
    <div class="mean-content">
        <div class="container" id="banner">
            <div id="features_post">
                <div class="row">
                    @foreach ($socialseft as $socialsefts)
                        <div class="col-sm-7 item">
                            <a class="get" rel="{{ $socialsefts->id }}" href="{{route('pressrelease',$socialsefts->id)}}?pressrelease={{$socialsefts->categories_id}}">

                                <div class="img lozad" data-background-image="{{asset('')}}/{{$socialsefts->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$socialsefts->images}}');"></div>

                                <div class="bg">
                                </div>
                                <div class="mean-decription">
                                    <div class="decription">
                                        <div class="title">

                                            @if(Session::has('lang'))
                                                @if($lang == 'kh')
                                                    {{str_limit($socialsefts->title_kh, 40)}}
                                                @else
                                                    {{str_limit($socialsefts->title_en, 40)}}
                                                @endif @else
                                                {{str_limit($socialsefts->title_kh, 40)}}
                                            @endif
                                        </div>
                                        <div class="content">

                                            @if(Session::has('lang'))
                                                @if($lang == 'kh')
                                                    {{str_limit($socialsefts->description_kh, 60)}}
                                                @else
                                                    {{str_limit($socialsefts->description_en, 60)}}
                                                @endif @else
                                                {{str_limit($socialsefts->description_kh, 60)}}
                                            @endif
                                        </div>
                                        <div class="date">
                                            <div class="pub-date" date="{{date('d/m/Y', strtotime($socialsefts->created_at))}}" style="float:left;">{{date('d/m/Y', strtotime($socialsefts->created_at))}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="caregory" style="background:#F9A62B;">
                                    @lang('header.life')
                                    <div class="corner" style="border-color: transparent transparent transparent
                #F9A62B;">
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach


                    @foreach ($techleft as $techlefts)
                        <div class="col-sm-5 item">
                            <a class="get" rel="{{ $techlefts->id }}" href="{{route('pressrelease',$techlefts->id)}}?pressrelease={{$techlefts->categories_id}}">

                                <div class="img lozad" data-background-image="{{asset('')}}/{{$techlefts->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$techlefts->images}}');"></div>

                                <div class="bg">
                                </div>
                                <div class="mean-decription">
                                    <div class="decription">
                                        @if(Session::has('lang'))
                                            @if($lang == 'kh')
                                                <div class="title">
                                                    {{str_limit($techlefts->title_kh, 40)}}
                                                </div>
                                                <div class="content">
                                                    {{str_limit($techlefts->description_kh, 60)}}
                                                </div>
                                            @else
                                                <div class="title">
                                                    {{str_limit($techlefts->title_en, 40)}}
                                                </div>
                                                <div class="content">
                                                    {{str_limit($techlefts->description_en, 60)}}
                                                </div>
                                            @endif @else
                                            <div class="title">
                                                {{str_limit($techlefts->title_kh, 40)}}
                                            </div>
                                            <div class="content">
                                                {{str_limit($techlefts->description_kh, 60)}}
                                            </div>
                                        @endif


                                        <div class="date">
                                            <div class="pub-date" date="{{ $techlefts->created_at->format('l j F Y H:i:s')}}" style="float:left;">{{ $techlefts->created_at->format('d/m/Y')}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="caregory" style="background:#38C378;">
                                    @lang('header.technology')
                                    <div class="corner" style="border-color: transparent transparent transparent
                #38C378;">
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach

                    @foreach ($entertainmentleft as $entertainmentsleft)
                        <div class="col-sm-7 item">
                            <a class="get" rel="{{ $entertainmentsleft->id }}" href="{{route('pressrelease',$entertainmentsleft->id)}}?pressrelease={{$entertainmentsleft->categories_id}}">

                                <div class="img lozad" data-background-image="{{asset('')}}/{{$entertainmentsleft->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$entertainmentsleft->images}}');"></div>

                                <div class="bg">
                                </div>
                                <div class="mean-decription">
                                    <div class="decription">
                                        @if(Session::has('lang'))
                                            @if($lang == 'kh')
                                                <div class="title">
                                                    {{str_limit($entertainmentsleft->title_kh, 40)}}
                                                </div>
                                                <div class="content">
                                                    {{str_limit($entertainmentsleft->description_kh, 60)}}
                                                </div>
                                            @else
                                                <div class="title">
                                                    {{str_limit($entertainmentsleft->title_en, 40)}}
                                                </div>
                                                <div class="content">
                                                    {{str_limit($entertainmentsleft->description_en, 60)}}
                                                </div>
                                            @endif @else
                                            <div class="title">
                                                {{str_limit($entertainmentsleft->title_kh, 40)}}
                                            </div>
                                            <div class="content">
                                                {{str_limit($entertainmentsleft->description_kh, 60)}}
                                            </div>
                                        @endif


                                        <div class="date">
{{--                                            <div class="pub-date" date="{{ $entertainmentsleft->created_at->format('l j F Y H:i:s')}}" style="float:left;">{{ $entertainmentsleft->created_at->format('d/m/Y')}}</div>--}}
                                        </div>
                                    </div>
                                </div>
                                <div class="caregory" style="background:#FA5480;">
                                    @lang('header.entertainment')
                                    <div class="corner" style="border-color: transparent transparent transparent
                #FA5480;">
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                    @foreach ($sportleft as $sportlefts)
                        <div class="col-sm-5 item">
                            <a class="get" rel="{{ $sportlefts->id }}" href="{{route('pressrelease',$sportlefts->id)}}?pressrelease={{$sportlefts->categories_id}}">

                                <div class="img lozad" data-background-image="{{asset('')}}/{{$sportlefts->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$sportlefts->images}}');"></div>

                                <div class="bg">
                                </div>
                                <div class="mean-decription">
                                    <div class="decription">
                                        @if(Session::has('lang'))
                                            @if($lang == 'kh')
                                                <div class="title">
                                                    {{str_limit($sportlefts->title_kh, 40)}}
                                                </div>
                                                <div class="content">
                                                    {{str_limit($sportlefts->description_kh, 60)}}
                                                </div>
                                            @else
                                                <div class="title">
                                                    {{str_limit($sportlefts->title_en, 40)}}
                                                </div>
                                                <div class="content">
                                                    {{str_limit($sportlefts->description_en, 60)}}
                                                </div>
                                            @endif @else
                                            <div class="title">
                                                {{str_limit($sportlefts->title_kh, 40)}}
                                            </div>
                                            <div class="content">
                                                {{str_limit($sportlefts->description_kh, 60)}}
                                            </div>
                                        @endif

                                        <div class="date">
                                            <div class="pub-date"  date="{{ $sportlefts->created_at->format('l j F Y H:i:s')}}" style="float:left;">{{ $sportlefts->created_at->format('d/m/Y')}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="caregory" style="background:#4390F8;">
                                    @lang('header.sport')
                                    <div class="corner" style="border-color: transparent transparent transparent
                #4390F8;">
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
            <div id="top_right_ads">
                @foreach ($adstop as $ads)
                    <div id="ad_zone_02" class="ads_items">
                        <a href="{{$ads->url}}">
                            <img class="img lozad" target="_blank" src="{{$ads->images}}">

                        </a>
                    </div>
                @endforeach
            </div>
            <div class="clear"></div>
        </div>

        <div class="container">
            <div class="tab-item home-tab-group" id="tab_hot_news">
                <ul class="nav nav-tabs home-tabs hot-new" role="tablist">
                    <li class="title font-strong">
                        <a>
                            @lang('header.hotvideo')

                            <div class="corner"></div>
                        </a>
                    </li>
                </ul>
                <div class="tab-content white-bg home-tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="new">
                        <div class="web">

                            <div class="row hot-news">
                                    @foreach ($view as $views)

                                    @if($views->view > 1)

                                        <div class="col-sm-4 item">
                                            <a class="get" rel="{{ $views->id }}" href="{{route('pressrelease',$views->id)}}">
                                                <div class="box ratio16_9">
                                                    <div class="ele lozad" data-background-image="{{asset('')}}/{{$views->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$views->images}}');"></div>

                                                </div>
                                                <div class="title">
                                                    @if(Session::has('lang'))
                                                        @if($lang == 'kh')
                                                            {{str_limit($views->title_kh, 40)}}
                                                        @else
                                                            {{str_limit($views->title_en, 40)}}
                                                        @endif @else
                                                        {{str_limit($views->title_kh, 40)}}
                                                    @endif
                                                </div>
                                            </a>
                                        </div>
                                        @endif
                                    @endforeach





                                <div class="col-sm-4 item">
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="hot-news-items">
                                <div class="row">
                                    @foreach ($article as $articles)
                                        <div class="col-sm-4 col-md-3 item">
                                            <a class="get" rel="{{ $articles->id }}" href="{{route('pressrelease',$articles->id)}}?pressrelease={{$articles->categories_id}}">

                                                <div class="box ratio16_9">
                                                    <div class="ele lozad" data-background-image="{{asset('')}}/{{$articles->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$articles->images}}');"></div>
                                                </div>
                                                <div class="title">
                                                    @if(Session::has('lang'))
                                                        @if($lang == 'kh')
                                                            {{str_limit($articles->title_kh, 40)}}
                                                        @else
                                                            {{str_limit($articles->title_en, 40)}}
                                                        @endif @else
                                                        {{str_limit($articles->title_kh, 40)}}
                                                    @endif
                                                </div>
                                            </a>
                                        </div>
                                    @endforeach

                                </div>
                                <div class="clear"></div>
                            </div>


                            <div class="hot-news-ads hidden-sm hidden-xs">
                                <div class="ads_items gateway-banner">
                                </div>
                                @foreach ($adsvideo as $adsvdo)
                                    <div id="gateway_banner_01" class="ads_items gateway-banner" zone="130"><ins style="text-decoration: none;">

                                            <a href="{{$adsvdo->url}}">
                                                <img class="img lozad" target="_blank" src="{{$adsvdo->images}}">

                                            </a>

                                    </div>
                                @endforeach
                                <div class="clear"></div>
                            </div>
                            <div class="clear"></div>
                        </div>

                        <div class="clear"></div>
                    </div>
                </div>
            </div>


            <div class="tab-item tab-by-category home-tab-group" id="tab_entertainment" rel="">
                <ul class="nav nav-tabs home-tabs entertainment" role="tablist">
                    <li class="title font-strong">
                        <a href="http://localhost:8000/press/1">
                            @lang('header.entertainment')
                            <i><img class="imgloadnext" src="{{asset('/front/images/icon/chevron-right.png')}}" alt="next tab"></i>
                            <div class="corner"></div>
                        </a>
                    </li>

                </ul>
                <!-- Tab panes -->
                <div class="tab-content white-bg home-tab-content">
                    <div role="tabpanel" class="tab-pane fade in active ajax-content" id="entertainment">
                        <div class="web">


                            <div class="news-items">
                                <div class="row">
                                    @foreach ($entertainment as $entertainments)
                                        <div class="col-md-3 col-sm-6 item">
                                            <a class="get" rel="{{ $entertainments->id }}" href="{{route('pressrelease',$entertainments->id)}}?pressrelease={{$entertainments->categories_id}}">
                                                <div class="box ratio16_9">
                                                    <div class="ele lozad" data-background-image="{{asset('')}}/{{$entertainments->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$entertainments->images}}');"></div>
                                                </div>
                                                <div class="title">
                                                    @if(Session::has('lang'))
                                                        @if($lang == 'kh')
                                                            {{str_limit($entertainments->title_kh, 40)}}
                                                        @else
                                                            {{str_limit($entertainments->title_en, 40)}}
                                                        @endif @else
                                                        {{str_limit($entertainments->title_kh, 40)}}
                                                    @endif

                                                </div>
                                            </a>
                                        </div>
                                    @endforeach


                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="clear"></div>

                        </div>

                    </div>
                </div>
            </div>

            <!--===============================================-->

            <div class="tab-item tab-by-category home-tab-group" id="tab_technology" rel="">
                <ul class="nav nav-tabs home-tabs technology" role="tablist">
                    <li class="title font-strong">
                        <a href="http://localhost:8000/press/2">
                            @lang('header.technology')
                            <i><img class="imgloadnext" src="{{asset('/front/images/icon/chevron-right.png')}}" alt="next tab"></i>
                            <div class="corner"></div>
                        </a>
                    </li>

                </ul>
                <!-- Tab panes -->
                <div class="tab-content white-bg home-tab-content">
                    <div role="tabpanel" class="tab-pane fade in active ajax-content" id="entertainment">
                        <div class="web">


                            <div class="news-items">
                                <div class="row">
                                    @foreach ($tech as $techs)
                                        <div class="col-md-3 col-sm-6 item">
                                            <a class="get" rel="{{ $techs->id }}" href="{{route('pressrelease',$techs->id)}}?pressrelease={{$techs->categories_id}}">
                                                <div class="box ratio16_9">
                                                    <div class="ele lozad" data-background-image="{{asset('')}}/{{$techs->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$techs->images}}');"></div>

                                                </div>
                                                <div class="title">
                                                    @if(Session::has('lang'))
                                                        @if($lang == 'kh')
                                                            {{str_limit($techs->title_kh, 40)}}
                                                        @else
                                                            {{str_limit($techs->title_en, 40)}}
                                                        @endif @else
                                                        {{str_limit($techs->title_kh, 40)}}
                                                    @endif
                                                </div>
                                            </a>
                                        </div>
                                    @endforeach


                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="clear"></div>

                        </div>

                    </div>
                </div>
            </div>
            <!--end-->
            <!--=====================start==========================-->

            <div class="tab-item tab-by-category home-tab-group" id="tab_life" rel="">
                <ul class="nav nav-tabs home-tabs life" role="tablist">
                    <li class="title font-strong">
                        <a href="http://localhost:8000/press/3">
                            @lang('header.life')
                            <i><img class="imgloadnext" src="{{asset('/front/images/icon/chevron-right.png')}}" alt="next tab"></i>
                            <div class="corner"></div>
                        </a>
                    </li>

                </ul>
                <!-- Tab panes -->
                <div class="tab-content white-bg home-tab-content">
                    <div role="tabpanel" class="tab-pane fade in active ajax-content" id="entertainment">
                        <div class="web">


                            <div class="news-items">
                                <div class="row">
                                    @foreach ($social as $socials)
                                        <div class="col-md-3 col-sm-6 item">
                                            <a class="get" rel="{{ $socials->id }}" href="{{route('pressrelease',$socials->id)}}?pressrelease={{$socials->categories_id}}">
                                                <div class="box ratio16_9">

                                                    <div class="ele lozad" data-background-image="{{asset('')}}/{{$socials->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$socials->images}}');"></div>

                                                </div>
                                                <div class="title">
                                                    @if(Session::has('lang'))
                                                        @if($lang == 'kh')
                                                            {{str_limit($socials->title_kh, 40)}}
                                                        @else
                                                            {{str_limit($socials->title_en, 40)}}
                                                        @endif @else
                                                        {{str_limit($socials->title_kh, 40)}}
                                                    @endif
                                                </div>
                                            </a>
                                        </div>
                                    @endforeach


                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="clear"></div>

                        </div>

                    </div>
                </div>
            </div>
            <!--end-->
            <!--=====================start==========================-->

            <div class="tab-item tab-by-category home-tab-group" id="tab_sport" rel="">
                <ul class="nav nav-tabs home-tabs sport" role="tablist">
                    <li class="title font-strong">
                        <a href="http://localhost:8000/press/4">
                            @lang('header.sport')
                            <i><img class="imgloadnext" src="{{asset('/front/images/icon/chevron-right.png')}}" alt="next tab"></i>
                            <div class="corner"></div>
                        </a>
                    </li>

                </ul>
                <!-- Tab panes -->
                <div class="tab-content white-bg home-tab-content">
                    <div role="tabpanel" class="tab-pane fade in active ajax-content" id="entertainment">
                        <div class="web">

                            <div class="news-items">
                                <div class="row">
                                    @foreach ($sport as $sports)
                                        <div class="col-md-3 col-sm-6 item">
                                            <a class="get" rel="{{ $sports->id }}" href="{{route('pressrelease',$sports->id)}}?pressrelease={{$sports->categories_id}}">
                                                <div class="box ratio16_9">
                                                    <div class="ele lozad" data-background-image="{{asset('')}}/{{$sports->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$sports->images}}');"></div>

                                                </div>
                                                <div class="title">
                                                    @if(Session::has('lang'))
                                                        @if($lang == 'kh')
                                                            {{str_limit($sports->title_kh, 40)}}
                                                        @else
                                                            {{str_limit($sports->title_en, 40)}}
                                                        @endif @else
                                                        {{str_limit($sports->title_kh, 40)}}
                                                    @endif
                                                </div>
                                            </a>
                                        </div>
                                    @endforeach


                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="clear"></div>

                        </div>

                    </div>
                </div>
            </div>
            <!--end-->

        </div>





    </div>

@stop