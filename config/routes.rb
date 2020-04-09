Rails.application.routes.draw do

  root 'statics#top'
  get 'error', to: 'statics#error'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
