<!-- First, extends to the CRUDBooster Layout -->
@extends('crudbooster::admin_template')
@section('content')
<!-- Your html goes here -->
<form method='post' action='{{CRUDBooster::mainpath('add-save')}}' enctype="multipart/form-data">
    {!! csrf_field() !!}
    <div class='container'>
        <div class="row">
            <div class="col-md-8">

                <div class='form-group'>
                    <label for="title">ចំណងជើង</label>
                    <input type='text' name='title_kh' required class='form-control' />
                </div>
                <div class="form-group">
                    <label for="article_kh">អត្ថបទ</label>
                    <textarea id="textarea" class="form-control" name="article_kh"></textarea>
                </div>
                <div class='form-group'>
                    <label for="description_kh">ពិពណ៍នា</label>
                    <textarea class="form-control" name="description_kh"></textarea>
                </div>

                <div class='form-group'>
                    <label for="title">ចំណងជើង en</label>
                    <input type='text' name='title_en' required class='form-control' />
                </div>
                <div class="form-group">
                    <label for="article_en">អត្ថបទ en</label>
                    <textarea id="textarea" class="form-control" name="article_en"></textarea>
                </div>
                <div class='form-group'>
                    <label for="description_en">ពិពណ៍នា</label>
                    <textarea class="form-control" name="description_en"></textarea>
                </div>
            </div>


            <div class="col-md-3">

                <div class="box box-success">
                    <div class="box-header with-border">
                        <button type="submit" class="btn btn-success">បង្ហោះ</button>

                    </div>
                    <!-- /.box-header -->

                        <div class="box-header with-border">
                            <h3 class="box-title">បញ្ចូលរូបភាពច្រើន</h3>
                        </div>
                        <div class="box-body">
                            <div class="form-group">
                                <div class="file-loading">
                                    <input id="file-1" type="file" name="images"  class="file">
                                </div>

                            </div>
                            <!-- /.box-body -->
                        </div>

                    <div class="box-body">


                        <!-- select -->
                        <div class="form-group">
                            <label>បង្ហោះ ឬ មិនបង្ហោះ</label>
                            <select class="form-control" name="active">
                                <option value="">ជ្រើសរើស</option>
                                <option value="1">បង្ហោះ</option>
                                <option value="0">មិនបង្ហោះ</option>

                            </select>
                        </div>
                    </div>
                    <!-- /.box-body -->


                </div>


                <div class="box box-success">
                    <div class="box-header with-border">
                        <h3 class="box-title">ចាប់យកប្រភេទទិន្និន័យ</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <!-- checkbox -->
                        <div class="form-group">
                            @foreach($categories as $categorie)
                            <div class="checkbox">
                                <label>
                                    <input type='radio' name='categories_id' value='{{$categorie->id}}'>{{$categorie->ctitle_kh}}
                                </label>
                            </div>
                            @endforeach
                        </div>

                    </div>
                    <!-- /.box-body -->
                </div>
                <div class="box box-success" >
                    <div class="box-header with-border">
                        <h3 class="box-title">ចាប់យកប្រភេទស្លាក</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <!-- checkbox -->
                        <div class="form-group">
                            @foreach($tags as $tag)
                            <div class="checkbox">
                                <label>
                                    <input type='checkbox' name='tags[]' value='{{$tag->id}}'>{{ $tag->tag_title_kh}}
                                </label>
                            </div>
                            @endforeach


                        </div>

                    </div>
                    <!-- /.box-body -->
                </div>

               
            </div>

        </div>
</form>
@push('head')
<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
<link href="{{asset('bootstrap-fileinput/css/fileinput.css')}}" media="all" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" crossorigin="anonymous">
<link href="{{asset('bootstrap-fileinput/themes/explorer-fas/theme.css')}}" media="all" rel="stylesheet" type="text/css"/>


<link rel="stylesheet" type="text/css" href="{{asset('vendor/crudbooster/assets/summernote/summernote.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('js-css-crudbooster/file-upload-with-preview.min.css') }}">

<script src="{{asset('bootstrap-fileinput/js/plugins/piexif.js')}}" type="text/javascript"></script>
<script src="{{asset('bootstrap-fileinput/js/plugins/sortable.js')}}" type="text/javascript"></script>
<script src="{{asset('bootstrap-fileinput/js/fileinput.js')}}" type="text/javascript"></script>
<script src="{{asset('bootstrap-fileinput/js/locales/fr.js')}}" type="text/javascript"></script>
<script src="{{asset('bootstrap-fileinput/js/locales/es.js')}}" type="text/javascript"></script>
<script src="{{asset('bootstrap-fileinput/themes/fas/theme.js')}}" type="text/javascript"></script>
<script src="{{asset('bootstrap-fileinput/themes/explorer-fas/theme.js')}}" type="text/javascript"></script>

@endpush


@push('bottom')

<script type="text/javascript" src="{{asset('vendor/crudbooster/assets/summernote/summernote.min.js')}}"></script>
<script src="{{ asset('js-css-crudbooster/file-upload-with-preview.min.js')}}"></script>

<script type="text/javascript">
  $(document).ready(function() {

    $('#textarea').summernote({
      height: ($(window).height() - 300),
      fontSizes: ['8', '9', '10', '11', '12', '14', '16', '18', '24', '36', '48', '64', '82', '150'],
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'italic', 'underline', 'clear']],
        ['color', ['color']],
        ['fontsize', ['fontsize']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['para', ['ul', 'ol']],
        ['para', ['paragraph']],
        ['view', ['fullscreen', 'codeview', 'help']],
        ['table', ['table']],
        //['link', ['linkDialogShow', 'unlink']] 
      ],
      // callbacks: { 
      //    // onImageUpload: function (image) {
      //        //  uploadImage{{$name}}(image[0]); } } 
      //        

    });

  });
</script>

<script type="text/javascript">
  $("#file-1").fileinput({
      theme: 'fas',
      uploadUrl: '#', // you must set a valid URL here else you will get an error
      allowedFileExtensions: ['jpg', 'png', 'gif'],
      overwriteInitial: false,
      maxFileSize: 1000,
      maxFilesNum: 10,
      //allowedFileTypes: ['image', 'video', 'flash'],
      slugCallback: function (filename) {
          return filename.replace('(', '_').replace(']', '_');
      }
  });
  
</script>
@endpush
@endsection