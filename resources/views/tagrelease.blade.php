@extends('layouts.frondend')
@section('contentlayout')

<?php $lang = session()->get('lang') ; ?>


<div class="mean-content" style="margin-top: 15px;">

  <div class="fix-bg">
    <div class="img lozad" data-background-image="{{asset('')}}/{{$tagsrelease->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$tagsrelease->images}}');"></div>
    <div class="inside"></div>
  </div>
  <div class="container article">
    <div class="single-left-content white-bg">
     
      <div class="content-outline  has-sponsor">
              <div class="sidebar sidebar-left" style="background: transparent linear-gradient(to bottom, #FFF 0%,  63%,  63%) repeat scroll 0% 0%;"></div>
                <div class="header post_content">

         @foreach ($adstoppress as $adstoppresss)
              <div class="post-top-bar">
                 <a href="{{$adstoppresss->url}}" target="_blank" title="Opens in a new window">
                    <div class="single sponsor">
                      <div class="sponsor_by">@lang('header.sponsor_by')</div>
                      <img class="sponsor_img" target="_blank" src="{{asset('')}}/{{$adstoppresss->images}}">  
                    </div>
                 </a>
               </div>
                 @endforeach               
             <div class="title detail">
                                      
              <p>
              @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{$tagsrelease->title_kh}}
                      @else  
                      {{$tagsrelease->title_en}}
                      @endif @else 
                      {{$tagsrelease->title_kh}}
                      @endif   
                       </p></div>
            
          </div>
    
      <!-- End of MSA ads -->
        <div class="detail content-detail">
                                      
                        <!-- Ad Tag: Mobile Underlay -->
                       
                        @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  <?php echo $tagsrelease->article_kh ?>
                      @else  
                      <?php echo $tagsrelease->article_en ?>
                      @endif @else 
                      <?php echo $tagsrelease->article_kh ?>
                      @endif                       
                      

         
                  </div>
       
    
                    
          <div class="row">
          
          <p class="author">
            <span class="title">@lang('header.articles') </span> {{$cms_users->name}}
          </p>
          
    
    </div>
   
        </div>

  
      <div class="content-footer">
     
        <div class="clear"></div>        
        <div id="related_posts" class="relative">
        <div class="news-items">
      <div class="title">
      @lang('header.relatedarticles')
        <div class="border"></div>
      </div>
      <div class="web no-ipad" style="position: relative;">
              <div class="page row related_post" id="1">
          @foreach($tag_posts as $tagposts)  
            <div class="col-sm-6 col-md-4 item">
              <a href="{{route('tagrelease',$tagposts->id)}}?tagrelease={{$tagposts->tag_id}}">
                <div class="box ratio16_9"> 
                <img class="ele" src="{{asset('')}}/{{$tagposts->images}}"> 
                </div>
                <div class="title">
                        
                @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{str_limit($tagposts->title_kh, 40)}}
                      @else  
                      {{str_limit($tagposts->title_en, 40)}}
                      @endif @else 
                      {{str_limit($tagposts->title_kh, 40)}}
                      @endif</div>
              </a>
            </div>
                        
         @endforeach
                        
                  </div>
                                 
            </div>
          
    </div>

    </div>
        <div class="clear"></div>
    </div>
    </div>


    <div class="single-right-content">
     
    <div id="ad_zone_02" class="ads_items web" zone="117">
    @foreach ($tagreleasetop as $tagreleasetops)
          <a href="{{$tagreleasetops->url}}" target="_blank">
          <img class="img lozad" target="_blank" src="{{asset('')}}/{{$tagreleasetops->images}}">            
          </a>
      @endforeach
      
    </div>
        <!-- Popular news block -->
    <div class="posts_item right-hot-news">
      <div class="bg">
        <div class="title">@lang('header.populararticles')<div class="border"></div></div>
        
               @foreach ($potstagview as $potstagviews) 
                     
                     <div class="media">
                      <div class="media-left right-small-post item">
                        <a href="{{route('tagrelease',$potstagviews->id)}}?tagrelease={{$potstagviews->tag_id}}">
                          <div class="img lozad" data-background-image="{{asset('')}}/{{$potstagviews->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$potstagviews->images}}');"></div>
                         
                        </a>
                      </div>
                      <div class="media-body">
                        <a href="{{route('tagrelease',$potstagviews->id)}}?tagrelease={{$potstagviews->tag_id}}">
                          
                 @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{str_limit($potstagviews->title_kh, 40)}}
                      @else  
                      {{str_limit($potstagviews->title_en, 40)}}
                      @endif @else 
                      {{str_limit($potstagviews->title_kh, 40)}}
                      @endif 
                        </a>
                      </div>
                    </div>
               @endforeach  
        <div class="clear"></div>
      </div>
    </div>

    <div id="ad_zone_02" class="ads_items web" zone="117">
    @foreach ($tagreleasecenter as $tagreleasecenters)
          <a href="{{$tagreleasecenters->url}}" target="_blank">
          <img class="img lozad" target="_blank" src="{{asset('')}}/{{$tagreleasecenters->images}}">            
          </a>
      @endforeach
    </div>

    <div class="posts_item right-hot-news">
      <div class="bg">
        <div class="title">@lang('header.newarticles')<div class="border"></div></div>
        @foreach ($potstag as $potstags) 
                     
                     <div class="media">
               <div class="media-left right-small-post item">
                 <a href="{{route('tagrelease',$potstags->id)}}?tagrelease={{$potstags->tag_id}}">
                   <div class="img lozad" data-background-image="{{asset('')}}/{{$potstags->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$potstags->images}}');"></div>
                  
                 </a>
               </div>
               <div class="media-body">
                 <a href="{{route('tagrelease',$potstags->id)}}?tagrelease={{$potstags->tag_id}}">
                  
                 @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{str_limit($potstags->title_kh, 40)}}
                      @else  
                      {{str_limit($potstags->title_en, 40)}}
                      @endif @else 
                      {{str_limit($potstags->title_kh, 40)}}
                      @endif
                 </a>
               </div>
             </div>
                     @endforeach    
       <div class="clear"></div>
      </div>
    </div>
    <div id="ad_zone_03" class="ads_items web" zone="117">
    @foreach ($tagreleasebottom as $tagreleasebottoms)
          <a href="{{$tagreleasebottoms->url}}" target="_blank">
          <img class="img lozad" target="_blank" src="{{asset('')}}/{{$tagreleasebottoms->images}}">            
          </a>
      @endforeach
    </div>    

        </div>
  </div>
    </div>
                

@stop