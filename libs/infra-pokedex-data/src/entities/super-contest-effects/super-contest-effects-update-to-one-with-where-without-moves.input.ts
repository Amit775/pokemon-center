import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsUpdateWithoutMovesInput } from './super-contest-effects-update-without-moves.input';

@InputType()
export class SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    where?: SuperContestEffectsWhereInput;

    @Field(() => SuperContestEffectsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => SuperContestEffectsUpdateWithoutMovesInput)
    data!: SuperContestEffectsUpdateWithoutMovesInput;
}
