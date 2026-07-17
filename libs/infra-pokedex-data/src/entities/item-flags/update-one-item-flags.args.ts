import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagsUpdateInput } from './item-flags-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';

@ArgsType()
export class UpdateOneItemFlagsArgs {

    @Field(() => ItemFlagsUpdateInput, {nullable:false})
    @Type(() => ItemFlagsUpdateInput)
    data!: ItemFlagsUpdateInput;

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;
}
