import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutTriggerItemsInput } from './items-create-without-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutTriggerItemsInput } from './items-create-or-connect-without-trigger-items.input';
import { ItemsUpsertWithoutTriggerItemsInput } from './items-upsert-without-trigger-items.input';
import { ItemsWhereInput } from './items-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutTriggerItemsInput } from './items-update-to-one-with-where-without-trigger-items.input';

@InputType()
export class ItemsUpdateOneWithoutTriggerItemsNestedInput {

    @Field(() => ItemsCreateWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutTriggerItemsInput)
    create?: Identity<ItemsCreateWithoutTriggerItemsInput>;

    @Field(() => ItemsCreateOrConnectWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutTriggerItemsInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutTriggerItemsInput>;

    @Field(() => ItemsUpsertWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutTriggerItemsInput)
    upsert?: Identity<ItemsUpsertWithoutTriggerItemsInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    disconnect?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    delete?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutTriggerItemsInput)
    update?: Identity<ItemsUpdateToOneWithWhereWithoutTriggerItemsInput>;
}
