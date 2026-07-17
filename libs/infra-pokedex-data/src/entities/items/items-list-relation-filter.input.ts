import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsListRelationFilter {

    @Field(() => ItemsWhereInput, {nullable:true})
    every?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    some?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    none?: Identity<ItemsWhereInput>;
}
