class StreamsController < ApplicationController

  skip_before_filter :authenticate_user, :only => %w(show)
  before_filter :authenticate_user_with_code_or_session, :only => %w(show)

  def show
    @stream_items = @logged_in.shared_stream_items(300)
    @person = @logged_in
    @has_friendship_requests = @logged_in.pending_friendship_requests.count > 0
    @has_activity_invite = (@logged_in.invite_activities.count + @logged_in.process_activities.count)>0
    @album_names = @person.albums.all(:select => 'name').map { |a| a.name }
    3
  end

end
