import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestEffectsUpdateWithoutMovesInput } from './super-contest-effects-update-without-moves.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsCreateWithoutMovesInput } from './super-contest-effects-create-without-moves.input';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';

@InputType()
export class SuperContestEffectsUpsertWithoutMovesInput {

    @Field(() => SuperContestEffectsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => SuperContestEffectsUpdateWithoutMovesInput)
    update!: Identity<SuperContestEffectsUpdateWithoutMovesInput>;

    @Field(() => SuperContestEffectsCreateWithoutMovesInput, {nullable:false})
    @Type(() => SuperContestEffectsCreateWithoutMovesInput)
    create!: Identity<SuperContestEffectsCreateWithoutMovesInput>;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    where?: Identity<SuperContestEffectsWhereInput>;
}
