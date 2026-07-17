import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutKnownMovesInput } from './moves-create-without-known-moves.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutKnownMovesInput } from './moves-create-or-connect-without-known-moves.input';
import { MovesUpsertWithoutKnownMovesInput } from './moves-upsert-without-known-moves.input';
import { MovesWhereInput } from './moves-where.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutKnownMovesInput } from './moves-update-to-one-with-where-without-known-moves.input';

@InputType()
export class MovesUpdateOneWithoutKnownMovesNestedInput {

    @Field(() => MovesCreateWithoutKnownMovesInput, {nullable:true})
    @Type(() => MovesCreateWithoutKnownMovesInput)
    create?: MovesCreateWithoutKnownMovesInput;

    @Field(() => MovesCreateOrConnectWithoutKnownMovesInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutKnownMovesInput)
    connectOrCreate?: MovesCreateOrConnectWithoutKnownMovesInput;

    @Field(() => MovesUpsertWithoutKnownMovesInput, {nullable:true})
    @Type(() => MovesUpsertWithoutKnownMovesInput)
    upsert?: MovesUpsertWithoutKnownMovesInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    disconnect?: MovesWhereInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    delete?: MovesWhereInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutKnownMovesInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutKnownMovesInput)
    update?: MovesUpdateToOneWithWhereWithoutKnownMovesInput;
}
