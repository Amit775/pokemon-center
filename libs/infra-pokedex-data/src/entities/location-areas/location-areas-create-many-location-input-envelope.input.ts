import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasCreateManyLocationInput } from './location-areas-create-many-location.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationAreasCreateManyLocationInputEnvelope {

    @Field(() => [LocationAreasCreateManyLocationInput], {nullable:false})
    @Type(() => LocationAreasCreateManyLocationInput)
    data!: Array<LocationAreasCreateManyLocationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
