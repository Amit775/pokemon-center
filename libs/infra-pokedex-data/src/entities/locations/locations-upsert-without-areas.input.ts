import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsUpdateWithoutAreasInput } from './locations-update-without-areas.input';
import { Type } from 'class-transformer';
import { LocationsCreateWithoutAreasInput } from './locations-create-without-areas.input';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsUpsertWithoutAreasInput {

    @Field(() => LocationsUpdateWithoutAreasInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutAreasInput)
    update!: LocationsUpdateWithoutAreasInput;

    @Field(() => LocationsCreateWithoutAreasInput, {nullable:false})
    @Type(() => LocationsCreateWithoutAreasInput)
    create!: LocationsCreateWithoutAreasInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: LocationsWhereInput;
}
