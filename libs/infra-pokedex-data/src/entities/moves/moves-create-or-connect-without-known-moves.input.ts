import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutKnownMovesInput } from './moves-create-without-known-moves.input';

@InputType()
export class MovesCreateOrConnectWithoutKnownMovesInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutKnownMovesInput, {nullable:false})
    @Type(() => MovesCreateWithoutKnownMovesInput)
    create!: Identity<MovesCreateWithoutKnownMovesInput>;
}
