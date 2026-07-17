import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsCreateInput } from './encounter-conditions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterConditionsArgs {

    @Field(() => EncounterConditionsCreateInput, {nullable:false})
    @Type(() => EncounterConditionsCreateInput)
    data!: Identity<EncounterConditionsCreateInput>;
}
