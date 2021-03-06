class SharesController < ApplicationController
before_filter :only_admins
  
  
  def admin
    @shares = Share.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @shares }
    end
  end
  
  def index

  end


  def show
    @share = Share.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @share }
    end
  end


  def new
    @share = Share.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @share }
    end
  end


  def edit
    @share = Share.find(params[:id])
  end


  def create
    @share = Share.new(params[:share])

    respond_to do |format|
      if @share.save
        format.html { redirect_to(@share, :notice => 'Share was successfully created.') }
        format.xml  { render :xml => @share, :status => :created, :location => @share }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @share.errors, :status => :unprocessable_entity }
      end
    end
  end


  def update
    @share = Share.find(params[:id])

    respond_to do |format|
      if @share.update_attributes(params[:share])
        format.html { redirect_to(@share, :notice => 'Share was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @share.errors, :status => :unprocessable_entity }
      end
    end
  end


  def destroy
    @share = Share.find(params[:id])
    @share.destroy

    respond_to do |format|
      format.html { redirect_to(shares_url) }
      format.xml  { head :ok }
    end
  end
  
   private

    def only_admins
      if params[:action] !="index" and !@logged_in.super_admin?
        render :text => t('admin.must_be_superadmin'), :layout => true, :status => 401
        return false
      end
    end
end
