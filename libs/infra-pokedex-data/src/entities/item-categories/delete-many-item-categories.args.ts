import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesWhereInput } from './item-categories-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyItemCategoriesArgs {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    @Type(() => ItemCategoriesWhereInput)
    where?: Identity<ItemCategoriesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
