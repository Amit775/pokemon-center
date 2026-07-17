import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { LocationsUpdateWithoutAreasInput } from './locations-update-without-areas.input';

@InputType()
export class LocationsUpdateToOneWithWhereWithoutAreasInput {

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: LocationsWhereInput;

    @Field(() => LocationsUpdateWithoutAreasInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutAreasInput)
    data!: LocationsUpdateWithoutAreasInput;
}
