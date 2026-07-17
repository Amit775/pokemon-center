import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';

@InputType()
export class MoveDamageClassesCreateOrConnectWithoutMovesInput {

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:false})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => MoveDamageClassesCreateWithoutMovesInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateWithoutMovesInput)
    create!: MoveDamageClassesCreateWithoutMovesInput;
}
