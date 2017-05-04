Rails.application.routes.draw do
  resources :reddit
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # map endpoints to controller methods here

  get '/get_favorites' => 'reddit#get'
  post '/create_favorite' => 'reddit#create'
  delete '/remove_favorite' => 'reddit#remove'
end
