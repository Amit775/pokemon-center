import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutHeldItemsInput } from './items-create-without-held-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutHeldItemsInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutHeldItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutHeldItemsInput)
    create!: Identity<ItemsCreateWithoutHeldItemsInput>;
}
