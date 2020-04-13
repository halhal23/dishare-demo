class StaticsController < ApplicationController
  def top
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
      api_key = "cccd05138db6e13ac16bf8e63a21cd2d"
      url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid='
      url << api_key  
      require 'open-uri'
      require 'json'
      require 'net/https'
      require 'active_support'
      require 'active_support/core_ext'
      url << "&name=肉"
      url=URI.encode(url)
      uri = URI.parse(url)
      json = Net::HTTP.get(uri)
      result = JSON.parse(json)
      rests = result['rest']
      # rests = 'koko'
  
      render json: rests
      rescue
        render json: "error"
      end
  end
end
