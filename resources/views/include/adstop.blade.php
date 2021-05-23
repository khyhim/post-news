    
 @foreach ($adstop as $adstops)
 <a href="{{$adstops->url}}" target="_blank">
 <img class="img lozad" target="_blank" src="{{asset('')}}/{{$adstops->images}}">            
 </a>
       @endforeach
