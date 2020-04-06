class AuthController < ApplicationController

  def login
    user = User.find_by(email: params[:email])
    if (user && user.authenticate(params[:password]))
      payload = {user_id: user.id}
      token = encode_token(payload)
      render json: {user: user, token: token}
    else
      render json: {failure: "Log in failed! Username or password invalid"}
  end
end