import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutHeldItemsInput } from './items-create-without-held-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutHeldItemsInput } from './items-create-or-connect-without-held-items.input';
import { ItemsUpsertWithoutHeldItemsInput } from './items-upsert-without-held-items.input';
import { ItemsWhereInput } from './items-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutHeldItemsInput } from './items-update-to-one-with-where-without-held-items.input';

@InputType()
export class ItemsUpdateOneWithoutHeldItemsNestedInput {

    @Field(() => ItemsCreateWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutHeldItemsInput)
    create?: Identity<ItemsCreateWithoutHeldItemsInput>;

    @Field(() => ItemsCreateOrConnectWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutHeldItemsInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutHeldItemsInput>;

    @Field(() => ItemsUpsertWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutHeldItemsInput)
    upsert?: Identity<ItemsUpsertWithoutHeldItemsInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    disconnect?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    delete?: Identity<ItemsWhereInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutHeldItemsInput)
    update?: Identity<ItemsUpdateToOneWithWhereWithoutHeldItemsInput>;
}
