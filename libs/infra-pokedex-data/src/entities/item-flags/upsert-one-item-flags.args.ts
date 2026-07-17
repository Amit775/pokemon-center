import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';
import { Type } from 'class-transformer';
import { ItemFlagsCreateInput } from './item-flags-create.input';
import { ItemFlagsUpdateInput } from './item-flags-update.input';

@ArgsType()
export class UpsertOneItemFlagsArgs {

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;

    @Field(() => ItemFlagsCreateInput, {nullable:false})
    @Type(() => ItemFlagsCreateInput)
    create!: ItemFlagsCreateInput;

    @Field(() => ItemFlagsUpdateInput, {nullable:false})
    @Type(() => ItemFlagsUpdateInput)
    update!: ItemFlagsUpdateInput;
}
