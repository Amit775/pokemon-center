import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutFlingEffectInput } from './items-update-without-fling-effect.input';

@InputType()
export class ItemsUpdateWithWhereUniqueWithoutFlingEffectInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateWithoutFlingEffectInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutFlingEffectInput)
    data!: Identity<ItemsUpdateWithoutFlingEffectInput>;
}
