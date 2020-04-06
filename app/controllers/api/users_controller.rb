class Api::UsersController < ApplicationController
  def create
    user = User.create(user_params)
    if user.valid?
      payload = {user_id: user.id, exp: 1.hours.from_now.to_i}
      token = encode_token(payload)
      render json: {user: user, token: token}
    else
      render json: {errors: user.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end