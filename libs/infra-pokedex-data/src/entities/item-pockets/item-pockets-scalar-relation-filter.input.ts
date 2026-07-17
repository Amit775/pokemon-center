import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsWhereInput } from './item-pockets-where.input';

@InputType()
export class ItemPocketsScalarRelationFilter {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    is?: Identity<ItemPocketsWhereInput>;

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    isNot?: Identity<ItemPocketsWhereInput>;
}
