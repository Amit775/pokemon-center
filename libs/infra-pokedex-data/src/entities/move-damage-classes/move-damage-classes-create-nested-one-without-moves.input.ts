import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateOrConnectWithoutMovesInput } from './move-damage-classes-create-or-connect-without-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';

@InputType()
export class MoveDamageClassesCreateNestedOneWithoutMovesInput {

    @Field(() => MoveDamageClassesCreateWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateWithoutMovesInput)
    create?: Identity<MoveDamageClassesCreateWithoutMovesInput>;

    @Field(() => MoveDamageClassesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<MoveDamageClassesCreateOrConnectWithoutMovesInput>;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;
}
