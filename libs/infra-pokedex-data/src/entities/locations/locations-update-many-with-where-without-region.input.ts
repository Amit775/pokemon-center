import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsScalarWhereInput } from './locations-scalar-where.input';
import { Type } from 'class-transformer';
import { LocationsUpdateManyMutationInput } from './locations-update-many-mutation.input';

@InputType()
export class LocationsUpdateManyWithWhereWithoutRegionInput {

    @Field(() => LocationsScalarWhereInput, {nullable:false})
    @Type(() => LocationsScalarWhereInput)
    where!: Identity<LocationsScalarWhereInput>;

    @Field(() => LocationsUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationsUpdateManyMutationInput)
    data!: Identity<LocationsUpdateManyMutationInput>;
}
