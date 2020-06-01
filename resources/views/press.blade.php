@extends('layouts.frondend')
@section('contentlayout')
<?php $lang = session()->get('lang') ; ?>

 <div class="mean-content" style="margin-top: 15px;">

<div class="container">
    <div class="single-left-content no-padding">
      <div class="tab-item tab-by-category" id="tab_entertainment">   

        <div id="ad_zone_02" class="ads_items mobile top_category_ads ad-250"></div>
        
        <ul class="nav nav-tabs home-tabs entertainment" role="tablist" style="border-color:#6f313a">
          
          @foreach ($adstoppress as $adstoppresss)
                    <li role="presentation" class="sponsor">
            <a target="_blank" href="{{$adstoppresss->url}}" title="Opens in a new window">              
              <div class="sponsor_by">
              @lang('header.sponsor_by')
              </div>
              
              <img class="sponsor_img lozad" target="_blank" src="{{asset('')}}/{{$adstoppresss->images}}">            
            </a>
          </li>
          @endforeach
          
        </ul>
        <!-- Tab panes -->
        <div class="tab-content white-bg category-tab-content">
            
          <div role="tabpanel" class="tab-pane fade in active ajax-content" id="entertainment">

            <div id="posts_list" class="list">
                                         
                 
                    @foreach ($pressall as $pressalllist)
                      <div class="list-items"> 
                      <div  class="row list-item item">
                    <a class="get" rel="{{ $pressalllist->id }}" href="{{ route('pressrelease',$pressalllist->id)}}?pressrelease={{$pressalllist->categories_id}}">
                      <div class="col-md-4 col-sm-12 tumbnail">
                        <div class="box ratio16_9"> 
                        <img class="ele lozad" src="{{asset('')}}/{{$pressalllist->images}}"> 
                        </div>
                      </div>
                      <div class="col-md-8 col-sm-12 content">
                        <div class="title">
                          <span class="web">
                          
                          @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{$pressalllist->title_kh}}
                      @else  
                      {{$pressalllist->title_en}}
                      @endif @else 
                      {{$pressalllist->title_kh}}
                      @endif 
                          </span>
                          
                          <div class="small">
                            <ul>
                              <li> <span class="pub-date" date="{{ $pressalllist->created_at->format('l j F Y H:i:s')}}">{{ $pressalllist->created_at->format('d/m/Y')}}</span></li>
                            </ul>
                            <div class="clear"></div>
                          </div>
                        </div>
                        <p class="detail">
                        @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{$pressalllist->description_kh}}​
                      @else  
                      {{$pressalllist->description_en}}​
                      @endif @else 
                      {{$pressalllist->description_kh}}​
                      @endif 
                        
                        </p>
                      </div>
                    </a>
                  </div>
                  </div>

                   
                  @endforeach               
                 
                  {{ $pressall->links() }}
                    <!-- pagination -->
                  </div>     
                 
           </div>   
        </div>
        
          </div>
          
          <div class="clear"></div>
         
  
      </div>
   
    <div class="single-right-content">
       
    <div id="ad_zone_02" class="ads_items web" zone="117">
    
 @foreach ($adspressbartop as $adspressbartops)
    <a href="{{$adspressbartops->url}}" target="_blank">
    <img class="img lozad" target="_blank" src="{{asset('')}}/{{$adspressbartops->images}}">            
    </a>
          @endforeach
   
   
    </div>
        <!-- Popular news block -->
    <div class="posts_item right-hot-news">
      <div class="">
        <div class="title">@lang('header.populararticles')<div class="border"></div></div>
        @foreach ($articleview as $articleviews)     
                     
                     <div class="media">
                                   <div class="media-left right-small-post item">
                                     <a class="get" rel="{{ $articleviews->id }}" href="{{route('pressrelease',$articleviews->id)}}?pressrelease={{$articleviews->categories_id}}">
                                       <div class="img lozad" data-background-image="{{asset('')}}/{{$articleviews->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$articleviews->images}}');"></div>
                                      
                                     </a>
                                   </div>
                                   <div class="media-body">
                                     <a class="get" rel="{{ $articleviews->id }}" href="{{route('pressrelease',$articleviews->id)}}?pressrelease={{$articleviews->categories_id}}">
                                     
                                     @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{str_limit($articleviews->title_kh, 40)}}
                      @else  
                      {{str_limit($articleviews->title_en, 40)}}
                      @endif @else 
                      {{str_limit($articleviews->title_kh, 40)}}
                      @endif 
                                     </a>
                                   </div>
                                 </div>
                                     @endforeach  
                                      <div class="clear"></div>
      </div>
    </div>
    <div id="ad_zone_02" class="ads_items web" zone="117">
    @foreach ($adspressbarcenter as $adspressbarcenters)
    <a href="{{$adspressbarcenters->url}}" target="_blank">
    <img class="img lozad" target="_blank" src="{{asset('')}}/{{$adspressbarcenters->images}}">            
    </a>
          @endforeach
    </div>
    
    
    <div class="posts_item right-hot-news">
      <div class="">
        <div class="title">@lang('header.newarticles')<div class="border"></div></div>
        @foreach ($article as $articles)     
                     
                     <div class="media">
                                   <div class="media-left right-small-post item">
                                     <a class="get" rel="{{ $articles->id }}" href="{{route('pressrelease',$articles->id)}}?pressrelease={{$articles->categories_id}}">
                                       <div class="img lozad" data-background-image="{{asset('')}}/{{$articles->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$articles->images}}');"></div>
                                      
                                     </a>
                                   </div>
                                   <div class="media-body">
                                     <a class="get" rel="{{ $articles->id }}" href="{{route('pressrelease',$articles->id)}}?pressrelease={{$articles->categories_id}}">
                                    
                                      
                                     @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{str_limit($articles->title_kh, 40)}}
                      @else  
                      {{str_limit($articles->title_en, 40)}}
                      @endif @else 
                      {{str_limit($articles->title_kh, 40)}}
                      @endif 
                                     </a>
                                   </div>
                                 </div>
                                     @endforeach  
        <div class="clear"></div>
      </div>
    </div>
    <div id="ad_zone_03" class="ads_items web" zone="117">
    
    @foreach ($adspressbarbottom as $adspressbarbottoms)
    <a href="{{$adspressbarbottoms->url}}" target="_blank">
    <img class="img lozad" target="_blank" src="{{asset('')}}/{{$adspressbarbottoms->images}}">            
    </a>
          @endforeach
     </div>    

        </div>
</div>

    </div>
                

@stop