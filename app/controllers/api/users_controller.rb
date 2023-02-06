class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password', 'fname', 'lname']

  def find
    debugger
    @user = User.find_by(email: params[:email])

    if @user
      render 'api/users/show'
    else 
      render json: { user: nil }
    end
  end

  def create
    debugger
    @user = User.new(user_params)
    debugger
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :f_name, :l_name)
  end
end
