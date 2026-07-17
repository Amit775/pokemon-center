import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';

@InputType()
export class ItemFlagMapListRelationFilter {

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    every?: Identity<ItemFlagMapWhereInput>;

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    some?: Identity<ItemFlagMapWhereInput>;

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    none?: Identity<ItemFlagMapWhereInput>;
}
