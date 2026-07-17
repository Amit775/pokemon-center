import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsScalarRelationFilter {

    @Field(() => ItemsWhereInput, {nullable:true})
    is?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    isNot?: Identity<ItemsWhereInput>;
}
