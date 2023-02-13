class Api::ListingsController < ApplicationController

    def index
        @listings = Listing.includes(:host).all
        render "api/listings/index"
    end

end