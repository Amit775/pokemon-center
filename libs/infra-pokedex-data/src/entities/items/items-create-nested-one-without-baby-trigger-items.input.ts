import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutBabyTriggerItemsInput } from './items-create-without-baby-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBabyTriggerItemsInput } from './items-create-or-connect-without-baby-trigger-items.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutBabyTriggerItemsInput {

    @Field(() => ItemsCreateWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutBabyTriggerItemsInput)
    create?: ItemsCreateWithoutBabyTriggerItemsInput;

    @Field(() => ItemsCreateOrConnectWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutBabyTriggerItemsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutBabyTriggerItemsInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
