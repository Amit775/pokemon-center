import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutBerriesInput } from './items-create-without-berries.input';

@InputType()
export class ItemsCreateOrConnectWithoutBerriesInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutBerriesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutBerriesInput)
    create!: Identity<ItemsCreateWithoutBerriesInput>;
}
