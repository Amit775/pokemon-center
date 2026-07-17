import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutMovesInput } from './types-create-without-moves.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutMovesInput } from './types-create-or-connect-without-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutMovesInput {

    @Field(() => TypesCreateWithoutMovesInput, {nullable:true})
    @Type(() => TypesCreateWithoutMovesInput)
    create?: Identity<TypesCreateWithoutMovesInput>;

    @Field(() => TypesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutMovesInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
