import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutBabyTriggerItemsInput } from './items-create-without-baby-trigger-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutBabyTriggerItemsInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutBabyTriggerItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutBabyTriggerItemsInput)
    create!: Identity<ItemsCreateWithoutBabyTriggerItemsInput>;
}
