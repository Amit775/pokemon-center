import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutFlingEffectInput } from './items-create-without-fling-effect.input';

@InputType()
export class ItemsCreateOrConnectWithoutFlingEffectInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutFlingEffectInput, {nullable:false})
    @Type(() => ItemsCreateWithoutFlingEffectInput)
    create!: ItemsCreateWithoutFlingEffectInput;
}
