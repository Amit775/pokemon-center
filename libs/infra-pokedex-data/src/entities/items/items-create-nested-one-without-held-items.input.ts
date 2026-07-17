import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutHeldItemsInput } from './items-create-without-held-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutHeldItemsInput } from './items-create-or-connect-without-held-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutHeldItemsInput {

    @Field(() => ItemsCreateWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutHeldItemsInput)
    create?: Identity<ItemsCreateWithoutHeldItemsInput>;

    @Field(() => ItemsCreateOrConnectWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutHeldItemsInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutHeldItemsInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
