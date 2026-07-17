import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutBerriesInput } from './items-create-without-berries.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBerriesInput } from './items-create-or-connect-without-berries.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutBerriesInput {

    @Field(() => ItemsCreateWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsCreateWithoutBerriesInput)
    create?: ItemsCreateWithoutBerriesInput;

    @Field(() => ItemsCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutBerriesInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
