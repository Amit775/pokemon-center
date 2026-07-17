import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueItemPocketsOrThrowArgs {

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:false})
    @Type(() => ItemPocketsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;
}
