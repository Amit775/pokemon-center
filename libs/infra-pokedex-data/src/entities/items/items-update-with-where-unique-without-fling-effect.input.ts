import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutFlingEffectInput } from './items-update-without-fling-effect.input';

@InputType()
export class ItemsUpdateWithWhereUniqueWithoutFlingEffectInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateWithoutFlingEffectInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutFlingEffectInput)
    data!: ItemsUpdateWithoutFlingEffectInput;
}
