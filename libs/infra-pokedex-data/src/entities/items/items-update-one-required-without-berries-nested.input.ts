import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutBerriesInput } from './items-create-without-berries.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBerriesInput } from './items-create-or-connect-without-berries.input';
import { ItemsUpsertWithoutBerriesInput } from './items-upsert-without-berries.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutBerriesInput } from './items-update-to-one-with-where-without-berries.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutBerriesNestedInput {

    @Field(() => ItemsCreateWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsCreateWithoutBerriesInput)
    create?: Identity<ItemsCreateWithoutBerriesInput>;

    @Field(() => ItemsCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutBerriesInput>;

    @Field(() => ItemsUpsertWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutBerriesInput)
    upsert?: Identity<ItemsUpsertWithoutBerriesInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutBerriesInput)
    update?: Identity<ItemsUpdateToOneWithWhereWithoutBerriesInput>;
}
