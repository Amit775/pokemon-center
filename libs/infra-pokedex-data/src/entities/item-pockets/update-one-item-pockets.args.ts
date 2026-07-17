import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemPocketsUpdateInput } from './item-pockets-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';

@ArgsType()
export class UpdateOneItemPocketsArgs {

    @Field(() => ItemPocketsUpdateInput, {nullable:false})
    @Type(() => ItemPocketsUpdateInput)
    data!: ItemPocketsUpdateInput;

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:false})
    @Type(() => ItemPocketsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;
}
