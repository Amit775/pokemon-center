import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationGameIndicesUpdateManyMutationInput } from './location-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateManyMutationInput)
    data!: Identity<LocationGameIndicesUpdateManyMutationInput>;

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    @Type(() => LocationGameIndicesWhereInput)
    where?: Identity<LocationGameIndicesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
