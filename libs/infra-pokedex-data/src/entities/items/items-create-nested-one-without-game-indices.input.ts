import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutGameIndicesInput } from './items-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutGameIndicesInput } from './items-create-or-connect-without-game-indices.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutGameIndicesInput {

    @Field(() => ItemsCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsCreateWithoutGameIndicesInput)
    create?: ItemsCreateWithoutGameIndicesInput;

    @Field(() => ItemsCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutGameIndicesInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
