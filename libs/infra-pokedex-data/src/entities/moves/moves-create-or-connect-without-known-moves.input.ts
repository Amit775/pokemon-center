import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutKnownMovesInput } from './moves-create-without-known-moves.input';

@InputType()
export class MovesCreateOrConnectWithoutKnownMovesInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutKnownMovesInput, {nullable:false})
    @Type(() => MovesCreateWithoutKnownMovesInput)
    create!: MovesCreateWithoutKnownMovesInput;
}
