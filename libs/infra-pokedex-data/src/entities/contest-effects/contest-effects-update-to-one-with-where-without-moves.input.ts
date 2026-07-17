import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { Type } from 'class-transformer';
import { ContestEffectsUpdateWithoutMovesInput } from './contest-effects-update-without-moves.input';

@InputType()
export class ContestEffectsUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    where?: ContestEffectsWhereInput;

    @Field(() => ContestEffectsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => ContestEffectsUpdateWithoutMovesInput)
    data!: ContestEffectsUpdateWithoutMovesInput;
}
