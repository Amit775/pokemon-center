import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutBerriesInput } from './items-create-without-berries.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBerriesInput } from './items-create-or-connect-without-berries.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutBerriesInput {

    @Field(() => ItemsCreateWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsCreateWithoutBerriesInput)
    create?: Identity<ItemsCreateWithoutBerriesInput>;

    @Field(() => ItemsCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutBerriesInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
