import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesUpdateWithoutMovesInput } from './move-damage-classes-update-without-moves.input';

@InputType()
export class MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: Identity<MoveDamageClassesWhereInput>;

    @Field(() => MoveDamageClassesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateWithoutMovesInput)
    data!: Identity<MoveDamageClassesUpdateWithoutMovesInput>;
}
