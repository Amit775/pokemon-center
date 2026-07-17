import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateInput } from './items-create.input';
import { ItemsUpdateInput } from './items-update.input';

@ArgsType()
export class UpsertOneItemsArgs {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateInput, {nullable:false})
    @Type(() => ItemsCreateInput)
    create!: Identity<ItemsCreateInput>;

    @Field(() => ItemsUpdateInput, {nullable:false})
    @Type(() => ItemsUpdateInput)
    update!: Identity<ItemsUpdateInput>;
}
