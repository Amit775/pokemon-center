import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemGameIndicesUpdateManyMutationInput } from './item-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesWhereInput } from './item-game-indices-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemGameIndicesArgs {

    @Field(() => ItemGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateManyMutationInput)
    data!: ItemGameIndicesUpdateManyMutationInput;

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    @Type(() => ItemGameIndicesWhereInput)
    where?: ItemGameIndicesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
