class RedditController < ApplicationController
  skip_before_action :verify_authenticity_token

  def get
    return response_data('all reddits', Reddit.all, 200)
  end

  def create
    reddit = Reddit.create(create_params)
    if reddit.save!
      return response_data('created', reddit, 200)
    end
  end

  def edit
    reddit = Reddit.find(edit_params[:id])
    if reddit
      reddit.update_attribute(:name, 'Andrew!')
      return response_data('found', reddit, 200)
    else
      return response_data('not found', nil, 200)
    end
  end

  def remove
    reddit = Reddit.find(remove_params[:id])
    if reddit
      reddit.destroy
      return response_data('removed', nil, 200)
    else
      return response_data('not found', nil, 200)
    end
  end

  def create_params
    params.permit(:name)
  end

  def edit_params
    params.permit(:id, :name)
  end

  def remove_params
    params.permit(:id)
  end

  def response_data(message, data, status)
    respond_to do |format|
      format.json { render json:
        { :status => status, :message => message, :data => data}
      }
    end
  end

end