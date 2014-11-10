Rails.application.routes.draw do
  resources :itineraries

  devise_for :users, controllers: { sessions: 'users/sessions' }  do
    get "sign_in", to: "users/sessions#new", as: :sign_in
  end

  root 'home#index'
end
