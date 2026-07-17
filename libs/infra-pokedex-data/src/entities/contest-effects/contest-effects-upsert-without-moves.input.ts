import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestEffectsUpdateWithoutMovesInput } from './contest-effects-update-without-moves.input';
import { Type } from 'class-transformer';
import { ContestEffectsCreateWithoutMovesInput } from './contest-effects-create-without-moves.input';
import { ContestEffectsWhereInput } from './contest-effects-where.input';

@InputType()
export class ContestEffectsUpsertWithoutMovesInput {

    @Field(() => ContestEffectsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => ContestEffectsUpdateWithoutMovesInput)
    update!: ContestEffectsUpdateWithoutMovesInput;

    @Field(() => ContestEffectsCreateWithoutMovesInput, {nullable:false})
    @Type(() => ContestEffectsCreateWithoutMovesInput)
    create!: ContestEffectsCreateWithoutMovesInput;

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    where?: ContestEffectsWhereInput;
}
