Search.setIndex({docnames:["docs/src/dev/architecture","docs/src/dev/development","docs/src/dev/folder-structure","docs/src/dev/index","docs/src/dev/setup","docs/src/python/index","docs/src/python/rafiki.client.Client","docs/src/python/rafiki.constants","docs/src/python/rafiki.model","docs/src/user/client-create-inference-job.include","docs/src/user/client-create-models.include","docs/src/user/client-create-train-job.include","docs/src/user/client-installation.include","docs/src/user/client-list-inference-jobs.include","docs/src/user/client-list-models.include","docs/src/user/client-list-train-jobs.include","docs/src/user/client-stop-inference-job.include","docs/src/user/creating-models","docs/src/user/datasets","docs/src/user/index","docs/src/user/making-predictions.include","docs/src/user/quickstart","docs/src/user/quickstart-admins","docs/src/user/quickstart-app-developers","docs/src/user/quickstart-app-users","docs/src/user/quickstart-model-developers","docs/src/user/tasks","docs/src/user/using-admin-web","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["docs/src/dev/architecture.rst","docs/src/dev/development.rst","docs/src/dev/folder-structure.rst","docs/src/dev/index.rst","docs/src/dev/setup.rst","docs/src/python/index.rst","docs/src/python/rafiki.client.Client.rst","docs/src/python/rafiki.constants.rst","docs/src/python/rafiki.model.rst","docs/src/user/client-create-inference-job.include.rst","docs/src/user/client-create-models.include.rst","docs/src/user/client-create-train-job.include.rst","docs/src/user/client-installation.include.rst","docs/src/user/client-list-inference-jobs.include.rst","docs/src/user/client-list-models.include.rst","docs/src/user/client-list-train-jobs.include.rst","docs/src/user/client-stop-inference-job.include.rst","docs/src/user/creating-models.rst","docs/src/user/datasets.rst","docs/src/user/index.rst","docs/src/user/making-predictions.include.rst","docs/src/user/quickstart.rst","docs/src/user/quickstart-admins.rst","docs/src/user/quickstart-app-developers.rst","docs/src/user/quickstart-app-users.rst","docs/src/user/quickstart-model-developers.rst","docs/src/user/tasks.rst","docs/src/user/using-admin-web.rst","index.rst"],objects:{"rafiki.client":{Client:[6,0,1,""]},"rafiki.client.Client":{create_advisor:[6,1,1,""],create_inference_job:[6,1,1,""],create_model:[6,1,1,""],create_train_job:[6,1,1,""],create_user:[6,1,1,""],delete_advisor:[6,1,1,""],feedback_to_advisor:[6,1,1,""],generate_proposal:[6,1,1,""],get_best_trials_of_train_job:[6,1,1,""],get_current_user:[6,1,1,""],get_inference_jobs_by_user:[6,1,1,""],get_inference_jobs_of_app:[6,1,1,""],get_models:[6,1,1,""],get_models_of_task:[6,1,1,""],get_running_inference_job:[6,1,1,""],get_train_job:[6,1,1,""],get_train_jobs_by_user:[6,1,1,""],get_train_jobs_of_app:[6,1,1,""],get_trial:[6,1,1,""],get_trial_logs:[6,1,1,""],get_trials_of_train_job:[6,1,1,""],login:[6,1,1,""],logout:[6,1,1,""],stop_inference_job:[6,1,1,""],stop_train_job:[6,1,1,""],stop_train_job_worker:[6,1,1,""]},"rafiki.constants":{BudgetType:[7,0,1,""],DatasetType:[7,0,1,""],InferenceJobStatus:[7,0,1,""],TaskType:[7,0,1,""],TrainJobStatus:[7,0,1,""],TrialStatus:[7,0,1,""],UserType:[7,0,1,""]},"rafiki.model":{BaseModel:[8,0,1,""],test_model_class:[8,1,1,""]},"rafiki.model.BaseModel":{destroy:[8,1,1,""],dump_parameters:[8,1,1,""],evaluate:[8,1,1,""],get_knob_config:[8,1,1,""],init:[8,1,1,""],load_parameters:[8,1,1,""],predict:[8,1,1,""],train:[8,1,1,""]},"rafiki.model.dataset":{CorpusDataset:[8,0,1,""],ImageFilesDataset:[8,0,1,""],ModelDatasetUtils:[8,0,1,""]},"rafiki.model.dataset.ModelDatasetUtils":{download_dataset_from_uri:[8,1,1,""],load_dataset_of_corpus:[8,1,1,""],load_dataset_of_image_files:[8,1,1,""],resize_as_images:[8,1,1,""]},"rafiki.model.log":{ModelLogUtils:[8,0,1,""]},"rafiki.model.log.ModelLogUtils":{define_loss_plot:[8,1,1,""],define_plot:[8,1,1,""],log:[8,1,1,""],log_loss_metric:[8,1,1,""],log_metrics:[8,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:method"},terms:{"08bc8d75e5b7":23,"0bd5":23,"1566aa58ffd7":23,"17adee63":23,"18a879dbbd1d":[9,13,21,23],"2017yfb1201001":28,"2ca0e607":23,"38383e64":23,"3a8a":23,"3f3b3bdd":[9,11,13,15,21,23],"406e":23,"416e":23,"43ac":[9,11,13,15,21,23],"44b6d2370695":23,"462b":23,"48bf":23,"48f3c8d0af42":23,"4c56":[14,21,23,25],"4d4a":23,"4db6":23,"4dd981fd":23,"4e18":23,"4e76":23,"4ebc":[9,13,21,23],"4f22b19f55c7":23,"64984d19":23,"64aeefa":23,"687fc38e7af0":23,"74b8f43a":[9,13,21,23],"80cb":23,"82fa":23,"8eb5":[14,21,23,25],"91c4":23,"92bc5aeada6d":23,"9681ff829939":23,"97f8":23,"99a5":[9,11,13,15,21,23],"99bc9628":23,"9bcf0fb9":23,"9cf9":23,"9e1b":23,"9e4b":23,"9fdefa23":[14,21,23,25],"abstract":[2,8],"class":[6,7,8,10,17,18,21,25,26],"default":[1,4,8,27],"export":[4,12,21,22,23,25],"float":[6,8,26],"import":[6,21,22,23,25],"int":[6,8],"new":[1,6],"return":[6,8],"throw":6,"true":[11,15,21,23],"try":1,"while":1,Adding:3,For:[6,18,27,28],POS:[18,26],The:[1,6,8,9,11,18,20,21,23,24,26,28],There:[0,26],These:[0,6,8,18],Using:[3,11,19,21,23,28],a643:[9,13,21,23],a730:23,abe342a085d3:23,abl:27,about:[10,21,25],abov:[4,11,21,23],absolut:18,access:[1,2,11,21,22,23,25,27],accord:8,accordingli:0,accuraci:8,across:4,action:6,add:4,adding:[4,21],addition:[6,17],address:4,adher:6,admin:[0,2,3,6,11,19,21,23,25,28],admin_host:[6,21,22,23,25],admin_port:[6,21,22,23,25,27],admin_web_port:[22,23,25],advisor:[0,2,4,6,8],advisor_host:6,advisor_id:6,advisor_port:6,after:[6,8,11,21,23],against:[4,8],all:[1,2,6,8],alloc:1,allow:4,alreadi:6,also:6,altern:[17,18,21],amount:6,analysi:8,ani:[1,4,6,8,17,28],anoth:[6,8],app:[0,6,9,11,13,15,16,19,24,26,28],app_develop:[22,23],app_vers:[6,9,11,13,15,21,23],appear:[8,18],applic:[2,19,20,21,26,28],architectur:[1,3,28],archiv:18,arrai:8,associ:[0,6,8,9,20,21,23,24,26],assum:[4,21,22,23,25],attempt:[],authent:[2,4],author:4,autom:28,automl:28,avail:[4,6,11,17,21,23],b13d:23,b70c903e:23,baa8:23,base:[0,8],basemodel:[2,6,8,10,17,21,25,26],bash:[1,4],batch:[0,8],batch_siz:[8,23],be0d:23,bearer:4,been:[6,11,21,23,27],befor:[1,6,21],below:[6,21],best:[6,9,19,21],better:6,bigramhmm:17,blob:[11,15,21,23],bodi:[20,21,24],branch:1,budget:[2,6,11,15,21,23],budget_amount:6,budget_typ:6,budgettyp:[6,7],build:[2,3,17],build_doc:1,build_imag:1,built:[1,28],c484:23,c4f8:[9,13,21,23],c838:[14,21,23,25],cach:[0,2,3],call:[4,8],can:[1,4,6,11,17,18,21,23,24,27,28],capabl:4,certain:6,chang:1,check:28,china:28,chosen:8,classif:18,clear:6,client:[0,1,2,5,9,10,11,12,13,14,15,16,17,19,28],client_quickstart:21,clone:[4,12,21,22,23,25],close:8,code:[1,2,6,11,21,23],collect:[2,8],column:[18,26],com:[4,11,12,15,21,22,23,25],command:[1,6],common:[17,18],complet:[4,6,9,21,23],compon:[2,3],conda:6,conf:2,config:[2,8],configur:[1,2,3,6,8,10,11,17,21,23,25,28],conform:[10,11,18,21,23,25],connect:[3,4,6,8],consid:8,constant:[2,5,6,28],contain:[0,1,2,4,6,8],content:20,context:0,continu:21,contribut:[21,28],conveni:8,convert:17,corpu:[8,19,26],corpusdataset:8,correspond:[6,8,18,26],could:6,cpu:[4,6,17],creat:[6,9,10,11,19,24,26,28],create_advisor:6,create_inference_job:[6,9,21,23],create_model:[6,10,17,21,25],create_train_job:[6,11,21,23],create_us:[6,22],creation:17,credenti:[1,27],criterion:23,csv:18,cuba:4,cuda:4,curl:[20,21,24],current:[6,27],custom:[2,6,17],cybersecur:28,d4d86006b68a:[9,11,13,15,21,23],d8ea9d7f:23,data:[0,2,6,8,26],databas:[0,2],dataset:[6,8,11,15,19,21,23,28],dataset_path:8,dataset_uri:8,datasettyp:7,datetime_complet:[15,21,23],datetime_cr:[14,21,23,25],datetime_start:[13,15,21,23],datetime_stop:[13,21,23],defin:[8,26],define_loss_plot:8,define_plot:8,definit:[2,6,8],delet:[1,6],delete_advisor:6,delimit:[8,18,26],depend:[0,6,8,10,12,14,17,18,20,21,22,23,24,25],dependency_nam:6,dependency_vers:6,deploi:[0,4,18,21,28],deploy:[2,4,9,21,23],descend:6,describ:[6,18],descript:6,deseri:8,destroi:[4,8],detail:[6,19,27],develop:[0,2,4,6,19,21,24,26,28],devic:1,dfa01f07d9c1:23,diagram:0,dict:[6,8],dictionari:[6,8],dimens:[8,26],directori:[4,18],disk:1,distribut:28,doc:[1,2],docker2:4,docker:[3,4,6,17],docker_imag:[6,14,17,21,23,25],dockerfil:2,document:[2,3],doe:[11,21,23],done:4,download:[8,17],download_dataset_from_uri:8,driver:4,due:1,dump_paramet:8,durat:27,dure:[0,8,17,27],dynam:[2,4],ea18:23,each:[0,4,8,18,26,27],eas:28,eb49:23,edit:4,effort:[],either:18,email:[4,6,21,22,23,25],empti:21,enabl:[3,6,11,21,23],enable_gpu:[6,8],encount:1,end:8,endpoint:[4,23],ensembl:28,ensur:8,entropi:23,env:[1,2,4],environ:[4,19],epoch:[8,23],error:[1,6],evalu:[8,26],even:1,everi:4,exact:[],exampl:[2,6,8,9,10,11,13,14,15,16,18,20,21,22,23,24,25],execut:6,expect:8,expertis:28,explicitli:1,expos:3,extend:[2,4,6,8,10,17,21,25],extern:[2,6],f625ff4245ab:[14,21,23,25],factori:1,fals:8,fashion:[11,17,21,23],fashion_mnist:[11,15,21,23],fashion_mnist_app:[9,11,13,15,16,21,23],fashion_mnist_for_image_classification_test:[11,15,21,23],fashion_mnist_for_image_classification_train:[11,15,21,23],featur:1,feedback:6,feedback_to_advisor:6,file:[2,6,8,10,18,21,25],filepath:18,filesystem:8,first:[4,17],float_exp:8,flow:[8,17,21],folder:[1,3,12,21,22,23,25,28],follow:[1,4,6,17,18,20,21,24],format:[6,8,11,17,18,20,21,23,24],foundat:28,free:8,from:[0,1,6,8,9,11,18,21,22,23,25,26],full:[1,8,17,18,21],fulli:8,gener:[0,6,26,27],generate_propos:6,get:6,get_best_trials_of_train_job:[6,23],get_current_us:6,get_inference_jobs_by_us:6,get_inference_jobs_of_app:[6,13,21,23],get_knob_config:8,get_model:6,get_models_of_task:[6,14,21,23,25],get_running_inference_job:[6,23],get_train_job:[6,23],get_train_jobs_by_us:6,get_train_jobs_of_app:[6,15,21,23],get_trial:6,get_trial_log:6,get_trials_of_train_job:6,github:[1,4,11,12,15,21,22,23,25],give:[1,6],given:8,gmt:[13,14,15,21,23,25],gpu:[3,6,11,17,21,23],grant:28,grayscal:[8,26],group:8,guid:[21,28],handl:0,has:[4,6,17,26,27],have:[6,11,17,18,21,22,23,24,25,26,27],haven:21,header:4,help:[8,17],here:4,hidden_layer_count:23,hidden_layer_unit:[8,23],higher:6,horizont:4,host:[1,6,24],how:[10,11,17,21,23,25],html:1,http:[0,3,11,12,15,18,21,22,23,24,25,28],hub:3,identifi:6,illustr:17,imag:[3,4,6,8,17,18,26],image_classif:[10,11,14,15,19,21,23,25],image_fil:[8,19,26],image_s:[8,23],imagefilesdataset:8,implement:[2,6,8,10,17,21,25],includ:[0,6,21,27],incom:4,index:[1,2,6],individu:1,infer:[0,2,4,6,8,9,17,19,24,26,28],inferencejobstatu:7,ingest:6,init:[4,8],initi:[2,6,8,19],insid:[6,8],instal:[4,6,12,17,19],instanc:[6,8,21,22,23,25,28],instruct:[1,4],int_cat:8,integ:[8,18,26],integr:28,intend:4,interfac:3,intern:[2,6],item:18,its:[4,6,27,28],itself:6,job:[0,2,6,9,11,19,24,26,28],jpeg:18,jpg:18,json:[8,20,21,24],just:21,k_i:[8,18],kei:28,kera:6,knob:[0,6,8,23,27],knob_config:6,knob_nam:6,knob_valu:6,kwarg:8,latest:[1,6,19,24],launch:27,layer:2,lazili:6,lead:18,learn:[6,10,14,17,21,23,25,28],learning_r:[8,23],least:17,left:1,level:2,leverag:[4,17,28],librari:17,like:1,line:[4,18],linux:4,list:[6,8,17,19,26],load:[8,19],load_dataset_of_corpu:8,load_dataset_of_image_fil:8,load_mnist_format:[11,17,21,23],load_paramet:8,load_ptb_format:17,local:[3,8,21],localhost:[1,6,21,22,23,25],log:[2,3,6,8,19],log_loss_metr:8,log_metr:8,logic:17,login:[6,21,22,23,25],logout:6,look:21,loss:8,mac:1,machin:[1,17,18,21,28],maco:4,made:26,main:0,make:[0,1,4,8,19,23,26],manag:[0,6],map:6,master:[2,4,11,15,21,23],max_count:6,max_depth:23,maximum:6,mayb:8,mesh:4,messag:[8,27],method:[2,6,8,17],metric:8,might:1,mind:28,minist:28,mnist:[11,17,21,23],model:[0,2,4,5,6,9,10,11,19,26,27,28],model_class:[6,8,10,14,21,23,25],model_develop:[22,25],model_file_path:[6,8,10,21,25],model_nam:23,model_trial_count:[6,11,15,21,23],modeldatasetutil:[8,17],modellogutil:[8,17],modul:[6,8],mojav:1,monitor:[11,21,23],more:[4,10,21,25],multipl:1,must:[6,18],name:[6,8,9,10,11,14,18,21,23,25],nation:28,natur:28,ncr002:28,necessari:6,need:[1,4,9,10,11,21,23,25],network:4,nginyc:[4,11,12,15,21,22,23,25],node:[1,3],non:6,none:[6,8,13,15,21,23],noth:6,nov:[13,14,15,21,23,25],nrf2016ncr:28,number:[6,8,18],numpi:[8,17],nusdbsystem:6,nvidia:4,obj:[6,8],obtain:4,oct:23,offic:28,offici:6,one:6,onli:[4,6,8,17,18,26],onward:1,open:1,option:17,order:[6,8,18],origin:[11,17,21,23],other:[4,8,18],otherwis:6,out:[1,28],output:[6,9,11,13,14,15,20,21,23,24,25],over:[4,23,24,28],overlai:4,overview:1,own:[2,17,18,28],packag:[2,6],page:[1,27],param:8,paramet:[0,6,8,10,11,17,21,23,25],pars:6,part:[3,18],pass:[6,26],password:[4,6,21,22,23,25],path:[6,8,18],penn:17,per:6,perform:[4,6],philip:18,pickl:8,pip:[6,12,17,21,22,23,25],plot:[8,27],png:18,point:[6,8,26],pool:28,port:[4,6],pos_tag:19,post:[4,20,21,24],postgres_db:1,postgres_host:1,postgres_password:1,postgres_port:1,postgres_us:1,postgresql:1,postico:1,pre:[1,11,17,18,21,23],predict:[0,8,19,20,23,28],predictor:[0,2,4,6],predictor_host:[6,9,13,20,21,23,24],prematur:6,prepar:[11,21,23,26],presid:18,previou:18,prime:28,prior:17,privaci:1,probabl:26,process:[11,17,18,21,23],profession:28,professor:18,program:[0,28],programm:28,project:[4,12,21,22,23,25],properli:8,properti:17,propos:[0,6],protect:1,protocol:18,publicli:[3,11,21,23],pull:1,push:3,push_imag:1,pwd:[12,21,22,23,25],pybilstm:17,pypi:6,python:[0,2,4,6,8,10,12,17,21,22,23,25,28],pythonpath:[12,21,22,23,25],queri:[0,8,20,21,23,24],quick:[3,19,28],quickstart:1,rafiki:[2,3,5,9,10,11,12,13,14,15,16,17,18,19,21,23,25,26],rafiki_cach:1,rafiki_host:[22,23,25,27],rafiki_ip_address:4,rafiki_work:[6,14,17,21,23,25],rafikiai:[6,14,17,21,23,25],rang:8,raw:[11,15,21,23],reach:6,read:3,rebrow:1,receiv:[0,24,26],redi:1,redis_host:1,redis_port:1,refer:[1,6,10,11,17,18,21,23,25],reflect:1,rel:18,remov:1,replica:23,repres:26,request:0,requir:[6,12,17,21,22,23,25],research:28,reset:1,resiz:8,resize_as_imag:8,respect:[4,17],respond:0,respons:[6,20,21,24],restart:1,retriev:[6,19],rmi:1,role:3,root:[12,18,21,22,23,25],rout:4,row:18,rst:2,run:[1,4,6,8,10,11,12,13,15,17,19,20,22,24,25],runtim:4,same:[6,8,26,27],sampl:[2,8,17,27],scale:4,scienc:28,scikit:[6,10,14,17,21,23,25],score:[6,23,27],script:[1,2,4,21],sdk:0,section:27,see:[10,11,20,21,23,24,25],send:[0,20,21,24,26],sent:26,sentenc:[8,18,26],separ:1,sequenc:[21,26],serial:8,serializ:8,serv:0,server:0,servic:[2,4],service_id:[6,23],session:[6,8],set:[1,4,6,8,12,21,22,23,25],setup:[3,21,28],shape:6,share:[17,24],shell:[1,2,20,21,24],should:[2,6,8,17,18,24,26],side:0,similar:8,simul:17,singa:6,singapor:28,singl:[1,6,8,10,21,25],size:[8,26],skdt:[10,14,17,21,23,25],sourc:[1,2,6,7,8,26],space:1,specif:[6,8,10,11,21,23,25],specifi:[6,8,11,17,21,23,26],sphinx:[1,2],split_bi:8,stack:[0,2,3,4,18],start:[2,3,4,6,17,19,28],start_rebrow:1,state:8,statu:[2,6,13,15,21,23],status:[0,27],stop:[0,2,4,6,19],stop_inference_job:[6,16,21,23],stop_train_job:6,stop_train_job_work:6,store:[0,2],str:[6,8],string:[8,18,26],structur:[1,3,28],subclass:17,submit:[6,9,10,11,21,23,25],subsampl:17,subsequ:[4,8],sun:[13,14,15,21,23,25],superadmin:[21,22],support:[6,10,11,19,20,21,23,24,25,28],sure:1,swarm:[1,4],system:[3,28],tag:[6,8,18,26],tag_1:8,tag_2:8,tag_i:8,tag_k:8,tag_num_class:8,take:18,talent:28,target:[6,11,21,23],task:[6,8,10,11,14,15,18,19,20,24,28],tasktyp:7,templat:[0,28],temporari:0,tensorflow:[6,10,14,17,21,23,25],test:[1,6,8,10,19,21,25,26],test_dataset_uri:[6,8,11,15,21,23,26],test_model_class:[8,17],text:18,tffeedforward:[10,14,21,23,25],tfsinglehiddenlay:[17,23],thei:[6,17,26,28],thi:[6,8,11,17,21,23],those:1,thousand:28,thu:23,time:8,titl:8,togeth:[11,21,23],token:[4,8,18,26],top:6,torch:[6,17],train:[0,2,4,6,8,9,11,17,19,24,26,28],train_dataset_uri:[6,8,11,15,21,23,26],train_job_id:[9,13,21,23],trainjobstatu:7,treebank:17,trial:[6,9,19,21,27],trial_id:6,trialstatu:7,troubleshoot:3,tsv:18,two:18,txt:[12,17,21,22,23,25],type:[2,6,8,19,20,21,24,28],ubuntu16:4,under:28,understand:[10,21,25],uniqu:6,updat:0,upload:[11,21,23],uri:[6,8,18],url:[11,21,23],usag:[2,11,17,21,23],use:[6,17,18,28],used:[2,8],user:[2,3,6,21,23,26,28],user_id:[6,14,21,23,25],user_typ:[6,22],usertyp:[6,7],uses:1,using:[1,6],util:[2,8,17],valid:2,valu:[2,8,18],variabl:[2,18],variou:2,ver:6,version:[6,26],veto:18,view:[1,19],want:21,web:[0,2,4,11,19,21,22,23,25,28],well:[1,2,6],when:[6,8,26],where:[6,8,10,18,20,21,24,25],whether:[6,8],which:24,within:[8,12,18,21,22,23,25],without:28,word:18,work:4,worker:[0,2,3,6,23],would:[4,6,9,21,23],write:[10,17,21,25],written:17,x_axi:8,you:[1,4,6,9,10,11,17,18,21,22,23,24,25,27],young:28,your:[1,10,11,17,18,21,23,24,25,28],zip:[11,15,18,21,23]},titles:["Architecture","Development","Folder Structure","Developer Guide","Setup &amp; Configuration","Python Documentation","rafiki.client.Client","rafiki.constants","rafiki.model","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","Creating Models","Supported Dataset Types","User Guide","&lt;no title&gt;","Quick Start","Quick Start (Rafiki Admins)","Quick Start (Application Developers)","Quick Start (Application Users)","Quick Start (Model Developers)","Supported Tasks","Using Rafiki\u2019s Admin Web","Welcome to Rafiki\u2019s Documentation!"],titleterms:{"static":0,Adding:4,Using:[4,27],acknowledg:28,admin:[4,22,27],app:[21,23],applic:[23,24],architectur:0,best:23,build:1,cach:1,client:[6,21,22,23,25],compon:0,configur:4,connect:1,constant:7,content:[0,1,4,17,18,21,22,23,24,25,26,27],corpu:18,creat:[17,21,22,23,25],dataset:[17,18,26],detail:23,develop:[1,3,23,25],docker:1,document:[1,5,28],dynam:0,enabl:4,environ:17,exampl:17,expos:4,folder:2,format:26,gpu:4,guid:[3,19],http:4,hub:1,imag:1,image_classif:[17,26],image_fil:18,index:28,infer:[21,23],initi:[21,22,23,25],instal:[21,22,23,25],interfac:4,job:[21,23,27],latest:[21,23],list:[21,23,25],load:17,local:1,log:[4,17,27],make:[21,24],model:[8,17,21,23,25],node:4,part:1,pos_tag:[17,26],predict:[21,24,26],publicli:4,push:1,python:5,queri:26,quick:[4,21,22,23,24,25],rafiki:[0,1,4,6,7,8,22,27,28],read:4,retriev:23,role:0,run:[21,23],setup:4,stack:1,start:[1,21,22,23,24,25],stop:[21,23],structur:2,support:[18,26],system:0,tabl:[0,1,4,17,18,21,22,23,24,25,26,27],task:[21,23,25,26],test:17,train:[21,23,27],trial:23,troubleshoot:1,type:[18,26],user:[0,19,22,24],view:27,web:27,welcom:28,what:28,worker:4}})