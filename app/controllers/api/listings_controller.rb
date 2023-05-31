class Api::ListingsController < ApplicationController

    def index
        @listings = Listing.includes(:host).all
        render "api/listings/index"
    end

    def show
        @listing = Listing.includes(:host).find_by(id: params[:id])
        render "api/listings/show"
    end

end