class StudentController < ApplicationController
  skip_before_action :verify_authenticity_token

  def get
  	return response_data('all students', Student.all, 200)
  end

  def add
  	student = Student.create(add_params)
  	if student.save!
  		return response_data('created', student, 200)
  	end
  end

  def edit
    student = Student.find(edit_params[:id])
    if student
      student.update_attribute(:name, 'Andrew!')
      return response_data('found', student, 200)
    else
      return response_data('not found', nil, 200)
    end
  end

  def remove
  	student = Student.find(remove_params[:id])
  	if student
  		student.destroy
  		return response_data('removed', nil, 200)
  	else
  		return response_data('not found', nil, 200)
  	end
  end

  def add_params
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
