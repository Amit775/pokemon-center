import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutMovesInput } from './types-create-without-moves.input';

@InputType()
export class TypesCreateOrConnectWithoutMovesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutMovesInput, {nullable:false})
    @Type(() => TypesCreateWithoutMovesInput)
    create!: Identity<TypesCreateWithoutMovesInput>;
}
