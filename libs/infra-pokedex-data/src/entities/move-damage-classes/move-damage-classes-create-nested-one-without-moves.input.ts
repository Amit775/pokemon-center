import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveDamageClassesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateOrConnectWithoutMovesInput } from './move-damage-classes-create-or-connect-without-moves.input';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';

@InputType()
export class MoveDamageClassesCreateNestedOneWithoutMovesInput {

    @Field(() => MoveDamageClassesCreateWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateWithoutMovesInput)
    create?: MoveDamageClassesCreateWithoutMovesInput;

    @Field(() => MoveDamageClassesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: MoveDamageClassesCreateOrConnectWithoutMovesInput;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;
}
