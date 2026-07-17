import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutBabyTriggerItemsInput } from './items-create-without-baby-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBabyTriggerItemsInput } from './items-create-or-connect-without-baby-trigger-items.input';
import { ItemsUpsertWithoutBabyTriggerItemsInput } from './items-upsert-without-baby-trigger-items.input';
import { ItemsWhereInput } from './items-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput } from './items-update-to-one-with-where-without-baby-trigger-items.input';

@InputType()
export class ItemsUpdateOneWithoutBabyTriggerItemsNestedInput {

    @Field(() => ItemsCreateWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutBabyTriggerItemsInput)
    create?: Identity<ItemsCreateWithoutBabyTriggerItemsInput>;

    @Field(() => ItemsCreateOrConnectWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutBabyTriggerItemsInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutBabyTriggerItemsInput>;

    @Field(() => ItemsUpsertWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutBabyTriggerItemsInput)
    upsert?: Identity<ItemsUpsertWithoutBabyTriggerItemsInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    disconnect?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    delete?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput)
    update?: Identity<ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput>;
}
