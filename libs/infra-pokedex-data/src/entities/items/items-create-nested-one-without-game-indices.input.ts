import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutGameIndicesInput } from './items-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutGameIndicesInput } from './items-create-or-connect-without-game-indices.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutGameIndicesInput {

    @Field(() => ItemsCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsCreateWithoutGameIndicesInput)
    create?: Identity<ItemsCreateWithoutGameIndicesInput>;

    @Field(() => ItemsCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutGameIndicesInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
