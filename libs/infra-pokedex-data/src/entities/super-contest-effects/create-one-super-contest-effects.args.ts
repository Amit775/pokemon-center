import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestEffectsCreateInput } from './super-contest-effects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSuperContestEffectsArgs {

    @Field(() => SuperContestEffectsCreateInput, {nullable:false})
    @Type(() => SuperContestEffectsCreateInput)
    data!: Identity<SuperContestEffectsCreateInput>;
}
