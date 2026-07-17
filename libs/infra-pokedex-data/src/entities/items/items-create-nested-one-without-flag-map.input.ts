import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutFlagMapInput } from './items-create-without-flag-map.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutFlagMapInput } from './items-create-or-connect-without-flag-map.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutFlagMapInput {

    @Field(() => ItemsCreateWithoutFlagMapInput, {nullable:true})
    @Type(() => ItemsCreateWithoutFlagMapInput)
    create?: ItemsCreateWithoutFlagMapInput;

    @Field(() => ItemsCreateOrConnectWithoutFlagMapInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutFlagMapInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutFlagMapInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
