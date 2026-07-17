import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutKnownMovesInput } from './moves-create-without-known-moves.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutKnownMovesInput } from './moves-create-or-connect-without-known-moves.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutKnownMovesInput {

    @Field(() => MovesCreateWithoutKnownMovesInput, {nullable:true})
    @Type(() => MovesCreateWithoutKnownMovesInput)
    create?: MovesCreateWithoutKnownMovesInput;

    @Field(() => MovesCreateOrConnectWithoutKnownMovesInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutKnownMovesInput)
    connectOrCreate?: MovesCreateOrConnectWithoutKnownMovesInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
