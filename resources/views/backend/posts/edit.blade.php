<!-- First, extends to the CRUDBooster Layout -->
@extends('crudbooster::admin_template')
@section('content')
    <!-- Your html goes here -->
    <form method='post' action='{{CRUDBooster::mainpath('edit-save/'.$row->id)}}' enctype="multipart/form-data">
        {!! csrf_field() !!}
        <div class='container'>
            <div class="row">
                <div class="col-md-8">
                    <div class='form-group'>
                        <label for="title_kh">ចំណងជើង</label>
                        <input type='text' name='title_kh' required class='form-control' value="{{$row->title_kh}}"/>
                    </div>
                    <div class="form-group">
                        <label for="article_kh">អត្ថបទ</label>
                        <textarea id="textarea" class="form-control" name="article_kh">{{$row->article_kh}}</textarea>
                    </div>

                    <div class='form-group'>
                        <label for="description_kh">ពិពណ៍នា</label>
                        <textarea class="form-control" name="description_kh">{{$row->description_kh}}</textarea>
                    </div>

                    <div class='form-group'>
                        <label for="title_en">ចំណងជើង</label>
                        <input type='text' name='title_en' required class='form-control' value="{{$row->title_en}}"/>
                    </div>
                    <div class="form-group">
                        <label for="article_en">អត្ថបទ</label>
                        <textarea id="textarea" class="form-control" name="article_en">{{$row->article_en}}</textarea>
                    </div>

                    <div class='form-group'>
                        <label for="description_en">ពិពណ៍នា</label>
                        <textarea class="form-control" name="description_en">{{$row->description_en}}</textarea>
                    </div>
                </div>
                <div class="col-md-3">

                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <button type="submit" class="btn btn-primary">កែប្រែបង្ហោះ</button>

                        </div>
                        <!-- /.box-header -->
                        <!-- form start -->
                        <div class="box-body">

                            <div class="form-group">
                                <div class="file-loading">
                                    <div class="form-group">
                                        <label>SEO Image Feature</label>
                                        @if ($row->images == null)
                                            <img id="previewImage" src="" class="img-responsive"/>
                                            <input type="file" name="images" placeholder="Image" accept="image/x-png,image/gif,image/jpeg" onchange="ValidateSingleInput(this);"/>
                                            <p class="help-block">The image should be: 770x480px</p>
                                        @else
                                            <a data-lightbox="roadtrip" href="{{ asset($row->images) }}">
                                                <img id="previewImage" width="100%" src="{{ ($row->images) ? asset($row->images) : '' }}" alt="Image" style="margin-bottom: 20px;max-width:100%;"/>
                                            </a>
                                            <p>
                                            <p><a class='btn btn-danger btn-delete btn-sm' onclick="if(!confirm('{{trans("crudbooster.delete_title_confirm")}}')) return false"
                                                  href='{{url(CRUDBooster::mainpath("delete-image?image=".$row->images."&id=".$row->id."&column=images"))}}'><i
                                                            class='fa fa-ban'></i> {{trans('crudbooster.text_delete')}} </a></p>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <!-- select -->
                            <div class="form-group">
                                <label>បង្ហោះ ឬ មិនបង្ហោះ</label>
                                <select class="form-control" name="active">
                                    <option value="">ជ្រើសរើស</option>
                                    <option value="1" {{ $row->active == 1 ? 'selected' : '' }}>បង្ហោះ</option>
                                    <option value="0" {{ $row->active == 0 ? 'selected' : '' }}>មិនបង្ហោះ</option>
                                </select>
                            </div>
                        </div>
                        <!-- /.box-body -->


                    </div>


                    <div class="box box-primary">
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
                                            <input type='radio' name='categories_id' value='{{$categorie->id}}'
                                                    {{ $categorie->id == $row->categories_id ? "checked" : "" }} >{{$categorie->title_kh}}
                                        </label>
                                    </div>
                                @endforeach


                            </div>

                        </div>
                        <!-- /.box-body -->
                    </div>
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">ចាប់យកប្រភេទស្លាក</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <!-- checkbox -->
                            <div class="form-group">

                                @php
                                    $checkCate = DB::table('post_tags')->where('article_id', $row->id)->get()->pluck('tag_id')->toArray();
                                @endphp
                                @foreach($tags as $tag)

                                    <?php $checked = in_array($tag->id, $checkCate) ? 'checked="checked"' : ''; ?>
                                    <div class="checkbox">
                                        <label>
                                            <input type='checkbox' name='tags[]'
                                                   value='{{$tag->id}}' {{$checked}}><img src="{{asset('')}}{{ $tag->title_kh}}" width="50">
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
        <link href="{{asset('bootstrap-fileinput/themes/explorer-fas/theme.css')}}" media="all" rel="stylesheet"
              type="text/css"/>


        <link rel="stylesheet" type="text/css" href="{{asset('vendor/crudbooster/assets/summernote/summernote.css')}}">
        <link rel="stylesheet" type="text/css"
              href="{{ asset('js-css-crudbooster/file-upload-with-preview.min.css') }}">

        <script src="{{asset('bootstrap-fileinput/js/plugins/piexif.js')}}" type="text/javascript"></script>
        <script src="{{asset('bootstrap-fileinput/js/plugins/sortable.js')}}" type="text/javascript"></script>
        <script src="{{asset('bootstrap-fileinput/js/fileinput.js')}}" type="text/javascript"></script>
        <script src="{{asset('bootstrap-fileinput/js/locales/fr.js')}}" type="text/javascript"></script>
        <script src="{{asset('bootstrap-fileinput/js/locales/es.js')}}" type="text/javascript"></script>
        <script src="{{asset('bootstrap-fileinput/themes/fas/theme.js')}}" type="text/javascript"></script>
        <script src="{{asset('bootstrap-fileinput/themes/explorer-fas/theme.js')}}" type="text/javascript"></script>

    @endpush


    @push('bottom')

        <script type="text/javascript"
                src="{{asset('vendor/crudbooster/assets/summernote/summernote.min.js')}}"></script>
        <script src="{{ asset('js-css-crudbooster/file-upload-with-preview.min.js')}}"></script>

        <script type="text/javascript">
            function readURLImage(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $('#previewImage').attr('src', e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            }
            var _validFileExtensions= [".jpg", ".jpeg", ".webp", ".gif", ".png"];
            function ValidateSingleInput(oInput) {
                if (oInput.type=="file") {
                    var sFileName=oInput.value;
                    if (sFileName.length>0) {
                        var blnValid=false;
                        for (var j=0; j < _validFileExtensions.length; j++) {
                            var sCurExtension = _validFileExtensions[j];
                            if (sFileName.substr(sFileName.length-sCurExtension.length, sCurExtension.length).toLowerCase() ==sCurExtension.toLowerCase()) {
                                blnValid=true;
                                break;
                            }
                        }

                        if (!blnValid) {
                            alert("Sorry, the file is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                            oInput.value="";
                            return false;
                        }
                        readURLImage(oInput);
                    }
                }
                return true;
            }


            $(document).ready(function () {

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