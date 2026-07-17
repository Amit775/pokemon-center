import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutMovesInput } from './types-create-without-moves.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutMovesInput } from './types-create-or-connect-without-moves.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutMovesInput {

    @Field(() => TypesCreateWithoutMovesInput, {nullable:true})
    @Type(() => TypesCreateWithoutMovesInput)
    create?: TypesCreateWithoutMovesInput;

    @Field(() => TypesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutMovesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
