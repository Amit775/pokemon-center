import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasScalarWhereInput } from './location-areas-scalar-where.input';
import { Type } from 'class-transformer';
import { LocationAreasUpdateManyMutationInput } from './location-areas-update-many-mutation.input';

@InputType()
export class LocationAreasUpdateManyWithWhereWithoutLocationInput {

    @Field(() => LocationAreasScalarWhereInput, {nullable:false})
    @Type(() => LocationAreasScalarWhereInput)
    where!: Identity<LocationAreasScalarWhereInput>;

    @Field(() => LocationAreasUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationAreasUpdateManyMutationInput)
    data!: Identity<LocationAreasUpdateManyMutationInput>;
}
