class EventsController < ApplicationController

  def index
    today = Date.today
    @year = params[:year] || today.year
    @month = params[:month] || today.month
    @events = Event.find(
      :all,
      :conditions => ['year(`when`) = ? and month(`when`) = ?', @year, @month],
      :order => '"when"'
    ).group_by &:when
  end

  def view
    @event = Event.find params[:id]
  end
  
  def edit
    if params[:id]
      @event = Event.find params[:id]
    else
      @event = Event.new :person => @logged_in
    end
    unless @event.admin?(@logged_in)
      raise 'You are not authorized to edit this event.'
    end
    if request.post?
      params[:event].cleanse 'when'
      if @event.update_attributes params[:event]
        redirect_to :action => 'view', :id => @event
      else
        flash[:notice] = @event.errors.full_messages.join('; ')
      end
    end
  end
  
  def delete
    @event = Event.find params[:id]
    @event.destroy if @event.admin? @logged_in
    redirect_to :action => 'index'
  end

end
