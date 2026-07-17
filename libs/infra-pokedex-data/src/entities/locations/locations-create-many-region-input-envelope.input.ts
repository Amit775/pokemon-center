import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsCreateManyRegionInput } from './locations-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationsCreateManyRegionInputEnvelope {

    @Field(() => [LocationsCreateManyRegionInput], {nullable:false})
    @Type(() => LocationsCreateManyRegionInput)
    data!: Array<LocationsCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
