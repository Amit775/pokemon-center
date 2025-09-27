import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';

@InputType()
export class ItemFlagMapListRelationFilter {

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    every?: ItemFlagMapWhereInput;

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    some?: ItemFlagMapWhereInput;

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    none?: ItemFlagMapWhereInput;
}
