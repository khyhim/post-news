<div class="title">@lang('header.populararticles')
  
  <div class="border"></div></div>
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