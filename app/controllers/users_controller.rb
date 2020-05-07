class UsersController < ApplicationController
  def index
    @user = User.new
    @users = User.all
  end

  def show
  end

  def create
    user = User.new(user_params)
    if user.save
      flash[:notice] = "signup successed"
      redirect_to users_path
    else
      flash[:notice] = "signup rejected"
      redirect_to root_path
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
