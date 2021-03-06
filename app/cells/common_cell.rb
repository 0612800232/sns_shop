class CommonCell < Cell::Rails
  helper  ApplicationHelper
  cache :marker_info, :marker_info ,:new_place,:new_see_all ,:comment,:add_note_windows,:add_pic_windows
  def marker_info
    render
  end

  def menus
    render
  end

  def new_place
    render
  end
  def new_see_all 
    render
  end
  
  def new_share
    render
  end

  def place_info
    render
  end

  def tool_bar
    @logged_in = options[:logged_in]
    @person = options[:person]
    render
  end
  
  def new_destination
    render
  end
  
  def i_want_go
    render
  end
  
  def activity
    @logged_in = options[:logged_in]
    render
  end

  def get_friend_group
    @logged_in = options[:logged_in]
    @friends = @logged_in.friends.paginate(:order => 'created_at desc', :page => params[:page])
    @groups = @logged_in.groups.paginate(:order => 'created_at desc', :page => params[:page])
    render
  end

  def friend_list
    @friends = options[:friends]
    render
  end
  
  def comment
    @comment = options[:comment]
    render 
  end
  
  def dream
    render
  end
  def add_note_windows
    render
  end
  def add_pic_windows
    render
  end
  def add_video_windows
    render
  end
end
