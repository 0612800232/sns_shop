OneBody::Application.routes.draw do
  
  
  resources :videos

  resources :dreams

  resources :activities do
    collection do
      get :invite_friend

    end
  end

  resources :shares do
    collection do
      get :admin
    end
  end
  
  resources :pictures do
    collection do
      get :get_stream_item
      get :upload
    end
  end

  namespace :location  do
    resources :postitions do
      collection do
        get :update_postition
      end
    end
    resources :impressions
    resources :place_shares
    resources :places do
      collection do
        post :search_ajax
        post :search
        get :search
        post :follow_place
        post :add_share
        post :tags_change
        post :add_temp_pic
        post :owner_manager
        post :add_impression
      end
    end
  end
    

  
  

  resources :addresses do
    collection do
      post :search_address
    end
  end
  

  resources :plans
  resources :markers do
    collection do
      get :marker_l_n
      post :follow
      get :follow
      post :search
      get :locus
      get :locus_index
      post :locus
    end
  end


  resources :maps

  root :to => 'pages#show_for_public'

  resource :account do
    member do
      get  :verify_code
      post :verify_code
      get  :select
      post :select
    end
  end

  resources :people do
    collection do
      get :get_all_people
      post :tags_change
      get  :schema
      get  :get_profile
      get :test
      get  :import
      post :import
      post :hashify
      post :batch
      put  :import
      get :get_friends
      post :change_pic
    end
    member do
      get  :favs
      get  :testimony
    end
    resources :friends do
      collection do
        post :reorder
      end
    end
    resources:activities do
      collection do
        get :deal_invite
        get :join_activity
      end
    end
    resources :relationships do
      collection do
        post :batch
      end
    end
    resources :contributions do
      collection do
        get  :sync
        post :sync
      end
    end
    resource :account do
      member do
        get  :verify_code
        post :verify_code
        get  :select
        post :select
      end
    end
    resource :wall do
      member do
        get :with
      end
    end
    resource :photo
    resources :groups, :pictures, :groupies, :services, :albums, :feeds, :notes, :verses
    resource :privacy, :blog, :calendar
  end

  resources :families do
    collection do
      get  :schema
      post :hashify
      post :batch
      post :select
    end
    member do
      post :reorder
    end
    resource :photo
    resources :relationships
  end

  resources :groups do
    collection do
      get :get_members
      get  :batch
      post :batch
      post :change_pic
    end
    resources :memberships do
      collection do
        get    :birthdays
        post   :batch
        delete :batch
      end
      resource :privacy
    end
    resources :messages do
      collection do
        post :new
      end
    end
    resources :attendance do
      collection do
        post :batch
      end
    end
    resource :photo
    resources :notes, :prayer_requests, :albums, :attachments
    resource :calendar
  end

  resources :memberships do
    collection do
      get  :batch
      post :batch
    end
  end

  resources :contributions do
    collection do
      get  :sync
      post :sync
    end
  end

  resources :service_categories do
    collection do
      get :batch_edit
      get :close_batch_edit
    end
  end

  resources :albums do
    resources :pictures do
      member do
        get :next
        get :prev
      end
      resource :photo
    end
    collection do
      post :get_pics_by_id
    end
  end

  resources :messages do
    resources :attachments
  end

  resources :tags, :only => :show

  resources :pictures, :prayer_signups, :authentications, :feeds, :verses, :shares,
    :publications, :notes, :comments, :prayer_requests, :podcasts,
    :generated_files

  resource  :setup, :stream, :session, :search, :printable_directory, :privacy, :pc_sync

  resources :news, :as => :news_items
  match 'news', :to => 'news#index'

  resource :style
  match 'style.css'          => 'styles#show', :format => 'css', :as => :style
  match 'style.:browser.css' => 'styles#show', :format => 'css', :as => :browser_style

  resources :attachments do
    member do
      get :get
    end
  end

  match 'bible(/:book(/:chapter))' => 'bibles#show',
    :defaults    => {:book => 'x', :chapter => '0'},
    :constraints => {:book => /[A-Za-z0-9 \+(%20)]+/, :chapter => /\d{1,3}/}

  resources :pages, :path => 'pages/admin' do
    resources :attachments
  end

  match 'pages/*path' => 'pages#show_for_public', :via => :get, :as => :page_for_public

  match '/admin' => 'administration/dashboards#show'

  namespace :administration, :path => :admin do
    resources :emails do
      collection do
        put :batch
      end
    end
    resources :log_items do
      collection do
        put :batch
      end
    end
    resources :settings do
      collection do
        put :batch
        put :reload
      end
    end
    resources :files, :constraints => {:id => /[a-z0-9_]+(\.[a-z0-9_]+)?/}
    resources :attendance do
      collection do
        get :prev
        get :next
      end
    end
    resources :syncs do
      member do
        post :create_items
      end
    end
    resources :deleted_people do
      collection do
        put :batch
      end
    end
    resources :updates, :admins, :membership_requests, :reports
    resource :theme, :api_key, :logo
  end
end
