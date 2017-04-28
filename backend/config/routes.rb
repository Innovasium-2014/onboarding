Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # map endpoints to controller methods here

  get '/get_students' => 'student#get'
  post '/add_student' => 'student#add'
  post '/edit_student' => 'student#edit'
  delete '/remove_student' => 'student#remove'

end
