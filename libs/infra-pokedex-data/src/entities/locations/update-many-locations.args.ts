import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationsUpdateManyMutationInput } from './locations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LocationsWhereInput } from './locations-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLocationsArgs {

    @Field(() => LocationsUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationsUpdateManyMutationInput)
    data!: LocationsUpdateManyMutationInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: LocationsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
