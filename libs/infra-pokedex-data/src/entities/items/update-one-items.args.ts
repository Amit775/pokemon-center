import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateInput } from './items-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@ArgsType()
export class UpdateOneItemsArgs {

    @Field(() => ItemsUpdateInput, {nullable:false})
    @Type(() => ItemsUpdateInput)
    data!: Identity<ItemsUpdateInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
