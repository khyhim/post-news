<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
      <title>index</title>       
  <meta content="width=device-width,initial-scale=1" name=viewport>    
      <link href="{{asset('front/css/style.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('front/css/customiz.css')}}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    </head>

  <body>
<section id="top">
   
    <div class="container"> 
       <div class="top-bar">
        <div class="container wrap_con_cic">
            <div class="row">
                <div class="col-md-7 header_contact">
                    <nav class="left-topbar navbar navbar-expand px-0">
                        <ul class="navbar-nav mx-auto mx-md-0 hide_rsp">
                            <li class="nav-item"><img class="iconcall" src="{{url('front/images/icon/phone_h.png')}}">+ 202-555-0167</li>
                            <li class="nav-item"><img class="iconsms" src="{{url('front/images/icon/mail_h.png')}}"></i>fakeemail @info.com</li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-5 header_socail">
                    <nav class="right-topbar navbar navbar-expand px-0">
                        <ul class="navbar-nav ml-md-auto mr-md-0 mx-auto">
                            <li class="nav-item"><a target="_blank" class="imgsocial" href="https://www.facebook.com"><img class="fbright" src="{{url('front/images/icon/fb.png')}}"></a></li>
                            <li class="nav-item"><a target="_blank" class="imgsocial" href="https://www.facebook.com"><img src="{{url('front/images/icon/insta.png')}}"></a></li>
                            <li class="nav-item"><a target="_blank" class="imgsocial" href="https://twitter.com/"><img src="{{url('front/images/icon/twiter.png')}}"></a></li>
                            <li class="nav-item"><a target="_blank" class="imgsocial" href="https://www.youtube.com/watch?v=60hFQFndVQg"><img src="{{url('front/images/icon/youtube.png')}}"></a></li>
                         
                            <li class="nav-item"><a class="dropdown-item" href="{{ route('change_lang', ['lang' => 'kh']) }}">KH</a></li>
                            <li class="nav-item border_nav">|</li>
                            <li class="nav-item"><a class="dropdown-item" href="{{ route('change_lang', ['lang' => 'en']) }}">EN</a>  </li>
                            
                        </ul>
                        
                    </nav>
                    
                </div>
            </div>
        </div>

    <div class="logo">
        <a href="/">
          <img class="lozad" data-src="{{url('logo.png')}}" src="{{url('logo.png')}}" data-loaded="true">
        </a>
      </div>  

       <div class="ads web ads_items" id="ad_zone_01" zone="7">
              <ins style="text-decoration: none;"><a href="" target="_blank"><img src="{{url('smart.jpg')}}" width="728" height="90" alt="" title="" border="0"></a><div id="beacon_2786146acf" style="position: absolute; left: 0px; top: 0px; visibility: hidden;">
               </div></ins>
              </div>
          </div>

     
    </div>
    </div>
  </section>
  <div id="before_menu"></div>
  <!-- Navigation -->
  <nav id="menu" class="navbar navbar-inverse navbar-static-top " role="navigation">
    <div class="container">
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">FeedNews</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
                <li class="active home">
                    <a href="/"> <i class="fa fa-home"></i></a>                 
                </li>
                <?php $lang = session()->get('lang') ; ?>
                @foreach ($categorysssss as $categories)                            
                           
            <li class="category ">
                    <a href="{{route('press',['id'=>$categories->id])}}">                  

                    @if(Session::has('lang')) 
                      @if($lang == 'kh') 
                          {{$categories->title_kh}}
                      @else {{$categories->title_en}} 
                      @endif @else 
                      {{$categories->title_kh}} 
                      @endif

                    </a>
                </li>
                @endforeach          
                
                @foreach ($tagssss as $tags)      
                    <li class="tag" id="road-home-3">
                         <a href="{{route('tag',['id'=>$tags->id])}}" class="web menu_road-home-3">
                        
                        @if(Session::has('lang')) 
                      @if($lang == 'kh')                          
                        <img class="lozad" src="{{asset('')}}/{{$tags->title_kh}}" />
                      @else 
                       <img class="lozad" src="{{asset('')}}/{{$tags->title_en}}" />
                      @endif @else 
                     
                      <img class="lozad" src="{{asset('')}}/{{$tags->title_kh}}" />
                      @endif
                         </a>
                            
                    </li>
                @endforeach     
                     
       
              <li class="link">
                  <a href="#" class="web">
                 ផ្សព្វផ្សាយ
                  </a>
                 
                </li>
        <li class="link">
                  <a href="#" class="web">
                 អំពីយើង
                  </a>
                 
                </li>

            </ul>
            
        </div>
        <!-- /.navbar-collapse -->
                    </div>
    <!-- /.container -->
  </nav>   




  @yield('contentlayout')

<section id="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4 copyright">
        <!-- <img class="lozad footer-logo" data-src=""> -->
        <div class="title">NewsFeed</div>
        <p class="small">@lang('header.capyrights')</p>
        <p class="small">
          <strong>@lang('header.address')</strong><br/>
          @lang('header.cambodianatural')
        </p>
      </div>

      <div class="col-md-5 about">
                <div class="title">@lang('header.aboutus')</div>
        <p>
        
        @lang('header.document')
        </p>   
        <div class="clear"></div>
                  
       </div>


      <div class="col-md-3 socail copyright">
        <div class="title"> @lang('header.socialmedia')</div>
        <div class="list-socail">
          <a href="https://www.facebook.com" target="_blank"><img src="{{url('front/images/icon/fb.png')}}"></a>
          <a href="https://www.instagram.com/?hl=en" target="_blank"><img src="{{url('front/images/icon/insta.png')}}"></a>
          <a href="https://twitter.com/" target="_blank"><img src="{{url('front/images/icon/twiter.png')}}"></a>
          <a href="https://www.youtube.com/watch?v=60hFQFndVQg" target="_blank"><img src="{{url('front/images/icon/youtube.png')}}"></a>
        </div>

        <p class="small" style="margin-top:15px;">
          <strong>@lang('header.contact')</strong> <br />
          <a href="mailto:info@NewsFeed.com">info@NewsFeed.com</a> <br />
          202-555-0167
        </p>

      </div>
    </div>
    
  </div>
</section>

<script src="{{asset('front/js/script.js')}}" type="text/javascript"></script> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript">
  //ajax goto sever
  $(document).ready(function(){
    
    $(".get").on("click", function() {
      var  postId = $(this).prop("rel"); //post id stored in rel attribute
       //alert(postId);
      $.ajax({
        type: "POST",
        url: "{{ route('viewCount') }}",
        data: { 
          "_token" : "{{ csrf_token() }}",
          postId : postId
        },
      });
              
    });

  });
</script>
    </body>
</html>
