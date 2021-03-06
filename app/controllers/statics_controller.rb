class StaticsController < ApplicationController
  def top
    gon.google_map_api_key = ENV['GOOGLE_MAP_API_KEY']
    @user = User.new
    @doumo = User.new(name: 'DOUMO')
  end

  def error
    raise 'わざとエラー起こしました。'
    redirect_to root_path
  end

  def modal
  end

  def login
  end

  def axios
    begin
      api_key = ENV['GNAVI_API_KEY']
      url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid='
      url << api_key  
      require 'open-uri'
      require 'json'
      require 'net/https'
      require 'active_support'
      require 'active_support/core_ext'
      # url << "&name=" << params[:keyword] << "&pref=PREF13"
      if params[:latitude].present?
        url << "&name=" << params[:keyword] 
        url << "&latitude=" << params[:latitude] 
        url << "&longitude=" << params[:longitude] 
        url << "&range=" << params[:range] 
      else
        url << "&name=" << params[:keyword] << "&pref=PREF13"
      end
      url=URI.encode(url)
      uri = URI.parse(url)
      json = Net::HTTP.get(uri)
      result = JSON.parse(json)
      rests = result['rest']
      # rests = params[:keyword]
  
      render json: rests
      rescue
        render json: "error"
      end
  end
end
