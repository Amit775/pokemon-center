import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutHeldItemsInput } from './items-create-without-held-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutHeldItemsInput } from './items-create-or-connect-without-held-items.input';
import { ItemsUpsertWithoutHeldItemsInput } from './items-upsert-without-held-items.input';
import { ItemsWhereInput } from './items-where.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutHeldItemsInput } from './items-update-to-one-with-where-without-held-items.input';

@InputType()
export class ItemsUpdateOneWithoutHeldItemsNestedInput {

    @Field(() => ItemsCreateWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutHeldItemsInput)
    create?: ItemsCreateWithoutHeldItemsInput;

    @Field(() => ItemsCreateOrConnectWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutHeldItemsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutHeldItemsInput;

    @Field(() => ItemsUpsertWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutHeldItemsInput)
    upsert?: ItemsUpsertWithoutHeldItemsInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    disconnect?: ItemsWhereInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    delete?: ItemsWhereInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutHeldItemsInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutHeldItemsInput)
    update?: ItemsUpdateToOneWithWhereWithoutHeldItemsInput;
}
