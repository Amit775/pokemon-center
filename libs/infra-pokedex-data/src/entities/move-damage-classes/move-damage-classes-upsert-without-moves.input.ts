import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveDamageClassesUpdateWithoutMovesInput } from './move-damage-classes-update-without-moves.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';

@InputType()
export class MoveDamageClassesUpsertWithoutMovesInput {

    @Field(() => MoveDamageClassesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateWithoutMovesInput)
    update!: MoveDamageClassesUpdateWithoutMovesInput;

    @Field(() => MoveDamageClassesCreateWithoutMovesInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateWithoutMovesInput)
    create!: MoveDamageClassesCreateWithoutMovesInput;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;
}
