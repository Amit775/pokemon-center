import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesUpdateManyMutationInput } from './item-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemCategoriesWhereInput } from './item-categories-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemCategoriesArgs {

    @Field(() => ItemCategoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateManyMutationInput)
    data!: Identity<ItemCategoriesUpdateManyMutationInput>;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    @Type(() => ItemCategoriesWhereInput)
    where?: Identity<ItemCategoriesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
