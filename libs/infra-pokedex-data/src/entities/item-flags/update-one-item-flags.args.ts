import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagsUpdateInput } from './item-flags-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';

@ArgsType()
export class UpdateOneItemFlagsArgs {

    @Field(() => ItemFlagsUpdateInput, {nullable:false})
    @Type(() => ItemFlagsUpdateInput)
    data!: Identity<ItemFlagsUpdateInput>;

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;
}
