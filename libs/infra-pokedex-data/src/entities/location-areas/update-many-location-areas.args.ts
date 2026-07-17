import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasUpdateManyMutationInput } from './location-areas-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLocationAreasArgs {

    @Field(() => LocationAreasUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationAreasUpdateManyMutationInput)
    data!: Identity<LocationAreasUpdateManyMutationInput>;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: Identity<LocationAreasWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
