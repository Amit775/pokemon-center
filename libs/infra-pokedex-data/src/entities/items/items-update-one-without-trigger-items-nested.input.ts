import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutTriggerItemsInput } from './items-create-without-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutTriggerItemsInput } from './items-create-or-connect-without-trigger-items.input';
import { ItemsUpsertWithoutTriggerItemsInput } from './items-upsert-without-trigger-items.input';
import { ItemsWhereInput } from './items-where.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutTriggerItemsInput } from './items-update-to-one-with-where-without-trigger-items.input';

@InputType()
export class ItemsUpdateOneWithoutTriggerItemsNestedInput {

    @Field(() => ItemsCreateWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutTriggerItemsInput)
    create?: ItemsCreateWithoutTriggerItemsInput;

    @Field(() => ItemsCreateOrConnectWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutTriggerItemsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutTriggerItemsInput;

    @Field(() => ItemsUpsertWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutTriggerItemsInput)
    upsert?: ItemsUpsertWithoutTriggerItemsInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    disconnect?: ItemsWhereInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    delete?: ItemsWhereInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutTriggerItemsInput)
    update?: ItemsUpdateToOneWithWhereWithoutTriggerItemsInput;
}
