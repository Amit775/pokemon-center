import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutBabyTriggerItemsInput } from './items-create-without-baby-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBabyTriggerItemsInput } from './items-create-or-connect-without-baby-trigger-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutBabyTriggerItemsInput {

    @Field(() => ItemsCreateWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutBabyTriggerItemsInput)
    create?: Identity<ItemsCreateWithoutBabyTriggerItemsInput>;

    @Field(() => ItemsCreateOrConnectWithoutBabyTriggerItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutBabyTriggerItemsInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutBabyTriggerItemsInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
