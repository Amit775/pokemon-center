import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutFlingEffectInput } from './items-create-without-fling-effect.input';

@InputType()
export class ItemsCreateOrConnectWithoutFlingEffectInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutFlingEffectInput, {nullable:false})
    @Type(() => ItemsCreateWithoutFlingEffectInput)
    create!: Identity<ItemsCreateWithoutFlingEffectInput>;
}
