import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesCreateInput } from './item-categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemCategoriesArgs {

    @Field(() => ItemCategoriesCreateInput, {nullable:false})
    @Type(() => ItemCategoriesCreateInput)
    data!: Identity<ItemCategoriesCreateInput>;
}
