<?php namespace App\Http\Controllers;

	use Session;
	use Request;
	use DB;
	use CRUDBooster;
    use Illuminate\Support\Facades\Input;

	class AdminArticlesController extends \crocodicstudio\crudbooster\controllers\CBController {

	    public function cbInit() {

			# START CONFIGURATION DO NOT REMOVE THIS LINE
			$this->title_field = "title_kh";
			$this->limit = "20";
			$this->orderby = "id,desc";
			$this->global_privilege = false;
			$this->button_table_action = true;
			$this->button_bulk_action = true;
			$this->button_action_style = "button_icon";
			$this->button_add = true;
			$this->button_edit = true;
			$this->button_delete = true;
			$this->button_detail = true;
			$this->button_show = true;
			$this->button_filter = true;
			$this->button_import = false;
			$this->button_export = false;
			$this->table = "articles";
			# END CONFIGURATION DO NOT REMOVE THIS LINE

			# START COLUMNS DO NOT REMOVE THIS LINE
			$this->col = [];
			$this->col[] = ["label"=>"User Id","name"=>"user_id","join"=>"cms_users,name"];
			$this->col[] = ["label"=>"Categories Id","name"=>"categories_id"];
			$this->col[] = ["label"=>"Images","name"=>"images","image"=>true];
			$this->col[] = ["label"=>"Title Kh","name"=>"title_kh"];
			$this->col[] = ["label"=>"Title En","name"=>"title_en"];
			$this->col[] = ["label"=>"Active","name"=>"active","width"  => "10%",
			"callback_php"=>'number_format($row->active)== 1 ? "ON" : "OFF"'];
			// "width"  => "10%",
			// "callback_php"=>'number_format($row->active) == 1 ? "ON" : "OFF" '
			# END COLUMNS DO NOT REMOVE THIS LINE

			# START FORM DO NOT REMOVE THIS LINE
			$this->form = [];
			$this->form[] = ['label'=>'Categories Id','name'=>'categories_id','type'=>'select2','validation'=>'required','width'=>'col-sm-10','datatable'=>'categories,title_kh'];
			$this->form[] = ['label'=>'Title Kh','name'=>'title_kh','type'=>'text','width'=>'col-sm-10'];
			$this->form[] = ['label'=>'Title En','name'=>'title_en','type'=>'text','width'=>'col-sm-10'];
			$this->form[] = ['label'=>'Description Kh','name'=>'description_kh','type'=>'textarea','width'=>'col-sm-9'];
			$this->form[] = ['label'=>'Description En','name'=>'description_en','type'=>'textarea','width'=>'col-sm-9'];
			$this->form[] = ['label'=>'Images','name'=>'images','type'=>'upload','validation'=>'required','width'=>'col-sm-9'];
			$this->form[] = ['label'=>'Article Kh','name'=>'article_kh','type'=>'wysiwyg','width'=>'col-sm-10'];
			$this->form[] = ['label'=>'Article En','name'=>'article_en','type'=>'wysiwyg','width'=>'col-sm-10'];
			$this->form[] = ['label'=>'Active','name'=>'active','type'=>'select','validation'=>'required','width'=>'col-sm-9','dataenum'=>'1;0'];
			# END FORM DO NOT REMOVE THIS LINE

			# OLD START FORM
			//$this->form = [];
			//$this->form[] = ['label'=>'Categories Id','name'=>'categories_id','type'=>'select2','validation'=>'required','width'=>'col-sm-10','datatable'=>'categories,title_kh'];
			//$this->form[] = ['label'=>'Title Kh','name'=>'title_kh','type'=>'text','width'=>'col-sm-10'];
			//$this->form[] = ['label'=>'Title En','name'=>'title_en','type'=>'text','width'=>'col-sm-10'];
			//$this->form[] = ['label'=>'Description Kh','name'=>'description_kh','type'=>'textarea','width'=>'col-sm-9'];
			//$this->form[] = ['label'=>'Description En','name'=>'description_en','type'=>'textarea','width'=>'col-sm-9'];
			//$this->form[] = ['label'=>'Images','name'=>'images','type'=>'upload','validation'=>'required','width'=>'col-sm-9'];
			//$this->form[] = ['label'=>'Article Kh','name'=>'article_kh','type'=>'wysiwyg','width'=>'col-sm-10'];
			//$this->form[] = ['label'=>'Article En','name'=>'article_en','type'=>'wysiwyg','width'=>'col-sm-10'];
			# OLD END FORM

			/* 
	        | ---------------------------------------------------------------------- 
	        | Sub Module
	        | ----------------------------------------------------------------------     
			| @label          = Label of action 
			| @path           = Path of sub module
			| @foreign_key 	  = foreign key of sub table/module
			| @button_color   = Bootstrap Class (primary,success,warning,danger)
			| @button_icon    = Font Awesome Class  
			| @parent_columns = Sparate with comma, e.g : name,created_at
	        | 
	        */
	        $this->sub_module = array();


	        /* 
	        | ---------------------------------------------------------------------- 
	        | Add More Action Button / Menu
	        | ----------------------------------------------------------------------     
	        | @label       = Label of action 
	        | @url         = Target URL, you can use field alias. e.g : [id], [name], [title], etc
	        | @icon        = Font awesome class icon. e.g : fa fa-bars
	        | @color 	   = Default is primary. (primary, warning, succecss, info)     
	        | @showIf 	   = If condition when action show. Use field alias. e.g : [id] == 1
	        | 
	        */
	        $this->addaction = array();

$this->addaction[] = ['label'=>'Set Active','url'=>CRUDBooster::mainpath('set-status/0/[id]'),'icon'=>'fa fa-check','color'=>'success','showIf'=>"[active] == '1'"];
$this->addaction[] = ['label'=>'Set Pending','url'=>CRUDBooster::mainpath('set-status/1/[id]'),'icon'=>'fa fa-ban','color'=>'warning','showIf'=>"[active] == '0'", 'confirmation' => true];
	        /* 
	        | ---------------------------------------------------------------------- 
	        | Add More Button Selected
	        | ----------------------------------------------------------------------     
	        | @label       = Label of action 
	        | @icon 	   = Icon from fontawesome
	        | @name 	   = Name of button 
	        | Then about the action, you should code at actionButtonSelected method 
	        | 
	        */
	        $this->button_selected = array();

	                
	        /* 
	        | ---------------------------------------------------------------------- 
	        | Add alert message to this module at overheader
	        | ----------------------------------------------------------------------     
	        | @message = Text of message 
	        | @type    = warning,success,danger,info        
	        | 
	        */
	        $this->alert        = array();
	                

	        
	        /* 
	        | ---------------------------------------------------------------------- 
	        | Add more button to header button 
	        | ----------------------------------------------------------------------     
	        | @label = Name of button 
	        | @url   = URL Target
	        | @icon  = Icon from Awesome.
	        | 
	        */
	        $this->index_button = array();



	        /* 
	        | ---------------------------------------------------------------------- 
	        | Customize Table Row Color
	        | ----------------------------------------------------------------------     
	        | @condition = If condition. You may use field alias. E.g : [id] == 1
	        | @color = Default is none. You can use bootstrap success,info,warning,danger,primary.        
	        | 
	        */
	        $this->table_row_color = array();     	          

	        
	        /*
	        | ---------------------------------------------------------------------- 
	        | You may use this bellow array to add statistic at dashboard 
	        | ---------------------------------------------------------------------- 
	        | @label, @count, @icon, @color 
	        |
	        */
	        $this->index_statistic = array();



	        /*
	        | ---------------------------------------------------------------------- 
	        | Add javascript at body 
	        | ---------------------------------------------------------------------- 
	        | javascript code in the variable 
	        | $this->script_js = "function() { ... }";
	        |
	        */
	        $this->script_js = NULL;


            /*
	        | ---------------------------------------------------------------------- 
	        | Include HTML Code before index table 
	        | ---------------------------------------------------------------------- 
	        | html code to display it before index table
	        | $this->pre_index_html = "<p>test</p>";
	        |
	        */
	        $this->pre_index_html = null;
	        
	        
	        
	        /*
	        | ---------------------------------------------------------------------- 
	        | Include HTML Code after index table 
	        | ---------------------------------------------------------------------- 
	        | html code to display it after index table
	        | $this->post_index_html = "<p>test</p>";
	        |
	        */
	        $this->post_index_html = null;
	        
	        
	        
	        /*
	        | ---------------------------------------------------------------------- 
	        | Include Javascript File 
	        | ---------------------------------------------------------------------- 
	        | URL of your javascript each array 
	        | $this->load_js[] = asset("myfile.js");
	        |
	        */
	        $this->load_js = array();
	        
	        
	        
	        /*
	        | ---------------------------------------------------------------------- 
	        | Add css style at body 
	        | ---------------------------------------------------------------------- 
	        | css code in the variable 
	        | $this->style_css = ".style{....}";
	        |
	        */
	        $this->style_css = NULL;
	        
	        
	        
	        /*
	        | ---------------------------------------------------------------------- 
	        | Include css File 
	        | ---------------------------------------------------------------------- 
	        | URL of your css each array 
	        | $this->load_css[] = asset("myfile.css");
	        |
	        */
	        $this->load_css = array();
	        
	        
	    }


	    /*
	    | ---------------------------------------------------------------------- 
	    | Hook for button selected
	    | ---------------------------------------------------------------------- 
	    | @id_selected = the id selected
	    | @button_name = the name of button
	    |
	    */
	    public function actionButtonSelected($id_selected,$button_name) {
	        //Your code here
	            
	    }


	    /*
	    | ---------------------------------------------------------------------- 
	    | Hook for manipulate query of index result 
	    | ---------------------------------------------------------------------- 
	    | @query = current sql query 
	    |
	    */
	    public function hook_query_index(&$query) {
	        //Your code here
	            
	    }

	    /*
	    | ---------------------------------------------------------------------- 
	    | Hook for manipulate row of index table html 
	    | ---------------------------------------------------------------------- 
	    |
	    */    
	    public function hook_row_index($column_index,&$column_value) {	        
	    	//Your code here
	    }

	    /*
	    | ---------------------------------------------------------------------- 
	    | Hook for manipulate data input before add data is execute
	    | ---------------------------------------------------------------------- 
	    | @arr
	    |
	    */
	    public function hook_before_add(&$postdata) {        
	        //Your code here
			$postdata['user_id']=CRUDBooster::myID();
		    return $postdata;
	    }

	    /* 
	    | ---------------------------------------------------------------------- 
	    | Hook for execute command after add public static function called 
	    | ---------------------------------------------------------------------- 
	    | @id = last insert id
	    | 
	    */
	    public function hook_after_add($id) {        
	        //Your code here

	    }

	    /* 
	    | ---------------------------------------------------------------------- 
	    | Hook for manipulate data input before update data is execute
	    | ---------------------------------------------------------------------- 
	    | @postdata = input post data 
	    | @id       = current id 
	    | 
	    */
	    public function hook_before_edit(&$postdata,$id) {        
	        //Your code here
           $postdata['user_id']=CRUDBooster::myID();
           return $postdata;
	    }

	    /* 
	    | ---------------------------------------------------------------------- 
	    | Hook for execute command after edit public static function called
	    | ----------------------------------------------------------------------     
	    | @id       = current id 
	    | 
	    */
	    public function hook_after_edit($id) {
	        //Your code here 

	    }

	    /* 
	    | ---------------------------------------------------------------------- 
	    | Hook for execute command before delete public static function called
	    | ----------------------------------------------------------------------     
	    | @id       = current id 
	    | 
	    */
	    public function hook_before_delete($id) {
	        //Your code here

	    }

	    /* 
	    | ---------------------------------------------------------------------- 
	    | Hook for execute command after delete public static function called
	    | ----------------------------------------------------------------------     
	    | @id       = current id 
	    | 
	    */
	    public function hook_after_delete($id) {
	        //Your code here

	    }



	    //By the way, you can still create your own method in here... :)
        public function getAdd()
        {
            //Create an Auth
            if (!CRUDBooster::isCreate() && $this->global_privilege == FALSE || $this->button_add == FALSE) {
                CRUDBooster::redirect(CRUDBooster::adminPath(), trans("crudbooster.denied_access"));
            }

            $data = [];
            $data['page_title'] = 'បញ្ចូលទិន្និន័យ';

            $data['categories'] = DB::table('categories')->get();
            $data['tags'] = DB::table('tags')->get();

            //Please use cbView method instead view method from laravel
            $this->cbView('backend.posts.create', $data);
        }

        // (function) Save Post
        public function postAddSave()
        {
            $postdatas = $this->hook_before_add($postdata);
            foreach ($postdatas as $uid) {
               $user_id = $uid;
            }
            $images = CRUDBooster::uploadFile('images', false, '', '', 'post_photo');
           
			//first 1
			//copy all input insert hare
			//it is database name articles
			//get id post [postnotification_id]
			$postnotification_id = DB::table('articles')->insertGetId([
				'title_kh' => Input::get('title_kh'),
                'title_en' => Input::get('title_en'),
                'article_kh' => Input::get('article_kh'),
                'article_en' => Input::get('article_en'),
                'description_kh' => Input::get('description_kh'),
                'description_en' => Input::get('description_en'),
                'active' => Input::get('active'),
                'categories_id' => Input::get('categories_id'),
                'user_id'      =>  $user_id,
                'images' => $images
				
				]);
				
			
			DB::table('articles')->insert([
                'title_kh' => Input::get('title_kh'),
                'title_en' => Input::get('title_en'),
                'article_kh' => Input::get('article_kh'),
                'article_en' => Input::get('article_en'),
                'description_kh' => Input::get('description_kh'),
                'description_en' => Input::get('description_en'),
                'active' => Input::get('active'),
                'categories_id' => Input::get('categories_id'),
                'user_id'      =>  $user_id,
                'images' => $images
            ]);


            $last_id = DB::table('articles')->latest('id')->first();

			
	
			$tags = $_POST['tags'];
			if($last_id !=null &&  $tags !=null){
				foreach ($tags as $tag) {
					DB::table("post_tags")->insert([
						'tag_id' => $tag,
						'article_id' => $last_id->id,
					]);
				}
			}

			//second
			$config['content'] = Input::get('title_kh');
			//$config['to'] = CRUDBooster::adminPath('articles');
			$config['to'] = CRUDBooster::adminPath('articles/edit/'.$postnotification_id);
			$config['id_cms_users'] = [1]; //This is an array of id users
			CRUDBooster::sendNotification($config);


            CRUDBooster::redirect(CRUDBooster::mainpath(), trans("crudbooster.alert_add_data_success"), 'success');
        }

        public function getEdit($id)
        {
            //Create an Auth
            if (!CRUDBooster::isUpdate() && $this->global_privilege == FALSE || $this->button_edit == FALSE) {
                CRUDBooster::redirect(CRUDBooster::adminPath(), trans("crudbooster.denied_access"));
            }

            $data = [];
            $data['page_title'] = 'Edit Data';
            $data['row'] = DB::table('articles')->where('id', $id)->first();
            $data['categories'] = DB::table('categories')->get();
            $data['tags'] = DB::table('tags')->get();

            //Please use cbView method instead view method from laravel
            $this->cbView('backend.posts.edit', $data);
        }


        // (function) Edit Post
        public function postEditSave($id)
        {
            $postdatas = $this->hook_before_edit($postdata,$id);
            foreach ($postdatas as $uid) {
                $user_id = $uid;
            }

            DB::table('articles')->where('id', $id)->update([
                'title_kh' => Input::get('title_kh'),
                'title_en' => Input::get('title_en'),
                'article_kh' => Input::get('article_kh'),
                'article_en' => Input::get('article_en'),
                'description_kh' => Input::get('description_kh'),
                'description_en' => Input::get('description_en'),
                'active' => Input::get('active'),
                'categories_id' => Input::get('categories_id'),
                'user_id'      =>  $user_id
            ]);
            if (Request::hasFile('images')) {
                $images = CRUDBooster::uploadFile('images', false, '', '', 'post_photo');
                DB::table('articles')->where('id', $id)->update([
                    'images' => $images
                ]);
            }

            DB::table("post_tags")->where('article_id', $id)->delete();

			$tags = $_POST['tags'];

			if($tags !=null){
            foreach ($tags as $tag) {
                DB::table("post_tags")->insert([
                    'tag_id' => $tag,
                    'article_id' => $id,
                ]);
            	}
			}

            CRUDBooster::redirect(CRUDBooster::mainpath(), trans("crudbooster.alert_update_data_success"), 'success');
        }



	public function getSetStatus($status,$id) {
   		DB::table('articles')->where('id',$id)->update(['active'=>$status]);
   
   	//This will redirect back and gives a message
   		CRUDBooster::redirect($_SERVER['HTTP_REFERER'],"The status product has been updated !","info");
	}


	}