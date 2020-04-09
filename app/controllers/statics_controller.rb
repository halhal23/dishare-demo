class StaticsController < ApplicationController
  def top
  end

  def error
    raise 'わざとエラー起こしました。'
    redirect_to root_path
  end
end
