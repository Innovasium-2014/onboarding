class StudentController < ApplicationController
  skip_before_action :verify_authenticity_token

  # create controller for student actions
end
