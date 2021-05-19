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