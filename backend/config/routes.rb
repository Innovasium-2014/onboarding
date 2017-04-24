Rails.application.routes.draw do

  get '/get_students' => 'student#get'
  post '/add_student' => 'student#add'
  delete '/delete_student' => 'student#delete'
  resources :students

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
