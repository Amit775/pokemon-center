import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutHeldItemsInput } from './items-create-without-held-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutHeldItemsInput } from './items-create-or-connect-without-held-items.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutHeldItemsInput {

    @Field(() => ItemsCreateWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutHeldItemsInput)
    create?: ItemsCreateWithoutHeldItemsInput;

    @Field(() => ItemsCreateOrConnectWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutHeldItemsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutHeldItemsInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
