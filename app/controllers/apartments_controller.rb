class ApartmentsController < ApplicationController
  before_action :set_apartment, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /apartments
  def index
    @apartments = Apartment.all

    render json: @apartments
  end

  # GET /apartments/1
  def show
    render json: @apartment
  end

  # POST /apartments
  def create
    @apartment = current_user.apartments.new(apartment_params)

    respond_to do |format|
        if @apartment.save
          format.html { redirect_to @apartment, notice: 'Apartment successfully created' }
          format.json { render :show, status: :created, location: @apartment}
        else
          format.html { render :new }
          format.json { render json: @apartment.errors, status: :unprocessable_entity }
        end
      end
  end

  # PATCH/PUT /apartments/1
  def update
    if @apartment.update(apartment_params)
      render json: @apartment
    else
      render json: @apartment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /apartments/1
  def destroy
    @apartment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_apartment
      @apartment = Apartment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def apartment_params
      params.require(:apartment).permit(:name, :address1, :address2, :city, :state, :zip, :country)
    end
end
