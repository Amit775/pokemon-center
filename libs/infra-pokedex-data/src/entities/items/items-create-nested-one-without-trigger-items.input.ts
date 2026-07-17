import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutTriggerItemsInput } from './items-create-without-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutTriggerItemsInput } from './items-create-or-connect-without-trigger-items.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutTriggerItemsInput {

    @Field(() => ItemsCreateWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutTriggerItemsInput)
    create?: ItemsCreateWithoutTriggerItemsInput;

    @Field(() => ItemsCreateOrConnectWithoutTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutTriggerItemsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutTriggerItemsInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
