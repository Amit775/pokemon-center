import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueItemFlingEffectsOrThrowArgs {

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlingEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;
}
