import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyItemFlingEffectsArgs {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: ItemFlingEffectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
