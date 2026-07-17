import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationGameIndicesUpdateManyMutationInput } from './location-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateManyMutationInput)
    data!: LocationGameIndicesUpdateManyMutationInput;

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    @Type(() => LocationGameIndicesWhereInput)
    where?: LocationGameIndicesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
