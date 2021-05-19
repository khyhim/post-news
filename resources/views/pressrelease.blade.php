@extends('layouts.frondend')
@section('contentlayout')

<?php $lang = session()->get('lang') ; ?>


<div class="mean-content" style="margin-top: 15px;">

  <div class="fix-bg">
    <div class="img lozad" data-background-image="{{asset('')}}/{{$pressrelease->images}}" data-loaded="true" style="background-image: url('{{asset('')}}/{{$pressrelease->images}}');"></div>
    <div class="inside"></div>
  </div>
  <div class="container article">
    <div class="single-left-content white-bg">
      <div class="ad-wrapper">
        <div id="ad_zone_02" class="ads_items mobile top_category_ads ad-250" style="margin-top:15px;"></div>
      </div>
      <div class="content-outline  has-sponsor">
              <div class="sidebar sidebar-left" style="background: transparent linear-gradient(to bottom, #FFF 0%,  63%,  63%) repeat scroll 0% 0%;"></div>
                <div class="header post_content">

         @foreach ($adstoppress as $adstoppresss)
              <div class="post-top-bar">
                 <a href="{{$adstoppresss->url}}" target="_blank" title="Opens in a new window">
                    <div class="single sponsor">
                      <div class="sponsor_by" >@lang('header.sponsor_by')</div>
                      <img class="sponsor_img" target="_blank" src="{{asset('')}}/{{$adstoppresss->images}}">  
                    </div>
                 </a>
               </div>
                 @endforeach               
             <div class="title detail">
                                      
              <p>
              @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{$pressrelease->title_kh}}
                      @else  
                      {{$pressrelease->title_en}}
                      @endif @else 
                      {{$pressrelease->title_kh}}
                      @endif 
                       </p></div>
            <div class="small">
              <ul class="ico">
                <li> <span id="sdate">{{ $pressrelease->created_at}}</span></li>
                
                <li>
                   @lang('header.comment') <span>{{ $wordCount}}</span>
                  |
                  @lang('header.view') <span>{{$pressrelease->view}}</span>
                </li>
              </ul>
              <div class="clear"></div>
            </div>
          </div>
     
            
      <!-- End of MSA ads -->
        <div class="detail content-detail">
                                      
                        <!-- Ad Tag: Mobile Underlay -->
                       
                        @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  <?php echo $pressrelease->article_kh ?>
                      @else  
                      <?php echo $pressrelease->article_en ?>
                      @endif @else 
                      <?php echo $pressrelease->article_kh ?>
                      @endif                            
                       

         
                  </div>                        
      
            <div class="row">
            <p class="author">
            <span class="title">@lang('header.articles') </span> {{$cms_users->name}}
          </p>
          
    
    </div>
 
<form  action="{{ route('comments.store') }}" method="POST" enctype="multipart/form-data">
  {{ csrf_field() }}
    <input type="hidden" name="article_id" value="{{$pressrelease->id }}" />  
  <div class="form-group">
  <label for="comment">Comment:</label>
  <input class="form-control" type="text" name="body" placeholder="Comment..." id="comment" required="required"/>
  
</div>
<button type="submit" class="subcomment" value="Submit" onkeydown="submit(this)">Submit</button>
</form>
<script type="text/javascript">
      function submit(ele) {
          if(event.key === 'Enter') {
              alert(ele.value);        
          }
      }
  </script>


      <ul class="nav commentstyle" >         
          @foreach ($comment as $comments)             
                  <li>
                    {{$comments->body}}
                  </li>   
          @endforeach         

        </ul>

        </div>

      <div class="content-footer">
     
        <div class="clear"></div>        
        <div id="related_posts" class="relative"><div class="news-items">
      <div class="title">
      @lang('header.relatedarticles')
        <div class="border"></div>
      </div>
      <div class="web no-ipad" style="position: relative;">
              <div class="page row related_post" id="1">
          @foreach($relat_posts as $posts)  
            <div class="col-sm-6 col-md-4 item">
              <a class="get" rel="{{ $posts->id }}" href="{{route('pressrelease',$posts->id)}}?pressrelease={{$posts->categories_id}}">
                <div class="box ratio16_9"> 
                <img class="ele" src="{{asset('')}}/{{$posts->images}}"> 
                </div>
                <div class="title">
                  
                @if(Session::has('lang')) 
                  @if($lang == 'kh') 
                  {{str_limit($posts->title_kh, 40)}}
                      @else  
                      {{str_limit($posts->title_en, 40)}}
                      @endif @else 
                      {{str_limit($posts->title_kh, 40)}}
                      @endif                            
                       
                      </div>
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
    @foreach ($pressreleasetop as $pressreleasetops)
          <a  href="{{$pressreleasetops->url}}" target="_blank">
          <img class="img lozad" target="_blank" src="{{asset('')}}/{{$pressreleasetops->images}}">            
          </a>
      @endforeach
   
    </div>
        <!-- Popular news block -->
    <div class="posts_item right-hot-news">
      <div class="bg">
        @include('include.pop-news')
    </div>

    <div id="ad_zone_02" class="ads_items web" zone="117">
    @foreach ($pressreleasecenter as $pressreleasecenters)
          <a  href="{{$pressreleasecenters->url}}" target="_blank">
          <img class="img lozad" target="_blank" src="{{asset('')}}/{{$pressreleasecenters->images}}">            
          </a>
      @endforeach
    </div>

    <div class="posts_item right-hot-news">
      <div class="bg">
        @include('include.new-news')
    
    </div>
    <div id="ad_zone_03" class="ads_items web" zone="117">
    @foreach ($pressreleasebottom as $pressreleasebottoms)
          <a href="{{$pressreleasebottoms->url}}" target="_blank">
          <img class="img lozad" target="_blank" src="{{asset('')}}/{{$pressreleasebottoms->images}}">            
          </a>
      @endforeach
    </div>    

        </div>
  </div>
    </div>
                

@stop