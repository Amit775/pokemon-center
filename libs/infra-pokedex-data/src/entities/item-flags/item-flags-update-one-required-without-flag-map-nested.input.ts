import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagsCreateWithoutFlagMapInput } from './item-flags-create-without-flag-map.input';
import { Type } from 'class-transformer';
import { ItemFlagsCreateOrConnectWithoutFlagMapInput } from './item-flags-create-or-connect-without-flag-map.input';
import { ItemFlagsUpsertWithoutFlagMapInput } from './item-flags-upsert-without-flag-map.input';
import { Prisma } from '@prisma/client';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';
import { ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput } from './item-flags-update-to-one-with-where-without-flag-map.input';

@InputType()
export class ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput {

    @Field(() => ItemFlagsCreateWithoutFlagMapInput, {nullable:true})
    @Type(() => ItemFlagsCreateWithoutFlagMapInput)
    create?: ItemFlagsCreateWithoutFlagMapInput;

    @Field(() => ItemFlagsCreateOrConnectWithoutFlagMapInput, {nullable:true})
    @Type(() => ItemFlagsCreateOrConnectWithoutFlagMapInput)
    connectOrCreate?: ItemFlagsCreateOrConnectWithoutFlagMapInput;

    @Field(() => ItemFlagsUpsertWithoutFlagMapInput, {nullable:true})
    @Type(() => ItemFlagsUpsertWithoutFlagMapInput)
    upsert?: ItemFlagsUpsertWithoutFlagMapInput;

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:true})
    @Type(() => ItemFlagsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;

    @Field(() => ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput, {nullable:true})
    @Type(() => ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput)
    update?: ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput;
}
