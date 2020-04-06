class Api::BoardsController < ApplicationController
  before_action :require_login

  def index
    @boards = Board.all
    render :index
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = session_user.id
    if @board.save
      render :create, status: :created
    else
      @error = @board.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid board data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def show
    @board = Board.find(params[:id])
    render :show
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid board id provided"
    render 'api/shared/error', status: :not_found
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end