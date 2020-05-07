Rails.application.routes.draw do

  root 'statics#top'
  get 'error', to: 'statics#error'
  get 'axios', to: 'statics#axios'
  get 'modal', to: 'statics#modal'
  get 'statics/login'

  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
