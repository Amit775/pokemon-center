import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { LocationsUpdateWithoutAreasInput } from './locations-update-without-areas.input';

@InputType()
export class LocationsUpdateToOneWithWhereWithoutAreasInput {

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: Identity<LocationsWhereInput>;

    @Field(() => LocationsUpdateWithoutAreasInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutAreasInput)
    data!: Identity<LocationsUpdateWithoutAreasInput>;
}
