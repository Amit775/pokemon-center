import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutBabyTriggerItemsInput } from './items-create-without-baby-trigger-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutBabyTriggerItemsInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutBabyTriggerItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutBabyTriggerItemsInput)
    create!: ItemsCreateWithoutBabyTriggerItemsInput;
}
