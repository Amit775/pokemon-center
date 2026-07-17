import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveDamageClassesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateOrConnectWithoutMovesInput } from './move-damage-classes-create-or-connect-without-moves.input';
import { MoveDamageClassesUpsertWithoutMovesInput } from './move-damage-classes-upsert-without-moves.input';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput } from './move-damage-classes-update-to-one-with-where-without-moves.input';

@InputType()
export class MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => MoveDamageClassesCreateWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateWithoutMovesInput)
    create?: MoveDamageClassesCreateWithoutMovesInput;

    @Field(() => MoveDamageClassesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: MoveDamageClassesCreateOrConnectWithoutMovesInput;

    @Field(() => MoveDamageClassesUpsertWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesUpsertWithoutMovesInput)
    upsert?: MoveDamageClassesUpsertWithoutMovesInput;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput)
    update?: MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput;
}
