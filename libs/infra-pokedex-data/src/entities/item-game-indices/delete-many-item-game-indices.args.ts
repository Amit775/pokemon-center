import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemGameIndicesWhereInput } from './item-game-indices-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyItemGameIndicesArgs {

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    @Type(() => ItemGameIndicesWhereInput)
    where?: ItemGameIndicesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
