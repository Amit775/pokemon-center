import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagsWhereInput } from './item-flags-where.input';

@InputType()
export class ItemFlagsScalarRelationFilter {

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    is?: Identity<ItemFlagsWhereInput>;

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    isNot?: Identity<ItemFlagsWhereInput>;
}
