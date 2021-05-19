@extends('layout.frontend')
@section('yieldlayout')
<div class="wrapper-about">
    <div class="container">

        <div class="row">
            <div class="col-md-6">
                <h2 class="bout-h2">{{ $All_abouts->about}}</h2>
                <p>{{ $All_abouts->des_about}}</p>
            </div>
            <div class="col-md-6"><img src="{{asset('')}}{{ $All_abouts->image}}" width="100%"></div>
        </div>
        <div class="row">

            <div class="col-md-12">
                {!! $All_abouts->vision !!}
            </div>
        </div>
    </div>

</div>

@stop