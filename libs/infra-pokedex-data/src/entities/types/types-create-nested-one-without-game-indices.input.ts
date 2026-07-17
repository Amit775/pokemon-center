import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutGameIndicesInput } from './types-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutGameIndicesInput } from './types-create-or-connect-without-game-indices.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutGameIndicesInput {

    @Field(() => TypesCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => TypesCreateWithoutGameIndicesInput)
    create?: TypesCreateWithoutGameIndicesInput;

    @Field(() => TypesCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutGameIndicesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
