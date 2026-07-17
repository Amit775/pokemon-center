import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesUpdateInput } from './item-categories-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';

@ArgsType()
export class UpdateOneItemCategoriesArgs {

    @Field(() => ItemCategoriesUpdateInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateInput)
    data!: Identity<ItemCategoriesUpdateInput>;

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => ItemCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;
}
