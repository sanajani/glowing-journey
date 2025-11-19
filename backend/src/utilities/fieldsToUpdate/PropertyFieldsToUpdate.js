export const propertyFieldsToUpdate = (propertyData) => {
    const fields = {}
    if(propertyData?.title){
        fields.title = propertyData.title
    }
    if(propertyData?.description){
        fields.description = propertyData.description
    }
    if(propertyData?.transaction){
        fields.transaction = propertyData.transaction
    }
    if(propertyData?.location?.province){
        fields['location.province'] = propertyData.location.province
    }
        if(propertyData?.location?.city){
        fields['location.city'] = propertyData.location.city
    }
        if(propertyData?.location?.district){
        fields['location.district'] = propertyData.location.district
    }
        if(propertyData?.location?.streetAddress){
        fields['location.streetAddress'] = propertyData.location.streetAddress
    }
        if(propertyData?.location?.exactLocation){
        fields['location.exactLocation'] = propertyData.location.exactLocation
    }
            if(propertyData?.location?.landmark){
        fields['location.landmark'] = propertyData.location.landmark
    }
                if(propertyData?.details?.badroom){
        fields['details.badroom'] = propertyData.details.badroom
    }
                if(propertyData?.details?.bathroom){
        fields['details.bathroom'] = propertyData.details.bathroom
    }

                    if(propertyData?.details?.area){
        fields['details.area'] = propertyData.details.area
    }

                    if(propertyData?.details?.floor){
        fields['details.floor'] = propertyData.details.floor
    }
                    if(propertyData?.details?.totalFloor){
        fields['details.totalFloor'] = propertyData.details.totalFloor
    }
                if(propertyData?.details?.yearBuild){
        fields['details.yearBuild'] = propertyData.details.yearBuild
    }

                    if(propertyData?.details?.furniture){
        fields['details.furniture'] = propertyData.details.furniture
    }

                    if(propertyData?.details?.parking){
        fields['details.parking'] = propertyData.details.parking
    }
                    if(propertyData?.details?.security){
        fields['details.security'] = propertyData.details.security
    }
    if(propertyData?.amenities){
        fields.amenities = propertyData.amenities
    }
     if(propertyData?.price?.amount){
        fields['price.amount'] = propertyData.price.amount
    }
        if(propertyData?.price?.currency){
        fields['price.currency'] = propertyData.price.currency
    }
        if(propertyData?.price?.period){
        fields['price.period'] = propertyData.price.period
    }
        if(propertyData?.price?.negotiable){
        fields['price.negotiable'] = propertyData.price.negotiable
    }
    if(propertyData?.media){
        fields.media = propertyData.media
    }
    return fields
}