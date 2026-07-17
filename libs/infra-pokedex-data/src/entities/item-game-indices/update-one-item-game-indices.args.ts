import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemGameIndicesUpdateInput } from './item-game-indices-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';

@ArgsType()
export class UpdateOneItemGameIndicesArgs {

    @Field(() => ItemGameIndicesUpdateInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateInput)
    data!: Identity<ItemGameIndicesUpdateInput>;

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;
}
