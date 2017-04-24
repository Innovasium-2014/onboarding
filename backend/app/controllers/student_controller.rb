class StudentController < ApplicationController
  skip_before_action :verify_authenticity_token

  def response_data(message, data, status)
    respond_to do |format|
      format.json { render json:
        { :status => status, :message => message, :data => data}
      }
    end
  end

  def get
    students = Student.new
    students = students.get
    return response_data('got all', students, 200)
  end

  def add
    new_student = Student.new
    new_student = new_student.create(add_params[:name])
    return response_data('created', new_student, 200)
  end

  def delete
    new_student = Student.new
    new_student = new_student.delete(delete_params[:id])
    return response_data('deleted', nil, 200)
  end

  def add_params
    params.permit(:name)
  end

  def delete_params
    params.permit(:id)
  end

end
