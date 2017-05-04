class StudentController < ApplicationController
  skip_before_action :verify_authenticity_token

  
  def get
  	return response_data('Got subreddits', Reddit.all, 200)
  end

  def create
  	
  end

end
