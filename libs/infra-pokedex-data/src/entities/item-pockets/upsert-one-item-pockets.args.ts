import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { Type } from 'class-transformer';
import { ItemPocketsCreateInput } from './item-pockets-create.input';
import { ItemPocketsUpdateInput } from './item-pockets-update.input';

@ArgsType()
export class UpsertOneItemPocketsArgs {

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:false})
    @Type(() => ItemPocketsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;

    @Field(() => ItemPocketsCreateInput, {nullable:false})
    @Type(() => ItemPocketsCreateInput)
    create!: ItemPocketsCreateInput;

    @Field(() => ItemPocketsUpdateInput, {nullable:false})
    @Type(() => ItemPocketsUpdateInput)
    update!: ItemPocketsUpdateInput;
}
