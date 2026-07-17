import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutTriggerItemsInput } from './items-create-without-trigger-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutTriggerItemsInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutTriggerItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutTriggerItemsInput)
    create!: ItemsCreateWithoutTriggerItemsInput;
}
