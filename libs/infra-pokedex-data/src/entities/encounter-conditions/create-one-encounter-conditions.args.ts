import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionsCreateInput } from './encounter-conditions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterConditionsArgs {

    @Field(() => EncounterConditionsCreateInput, {nullable:false})
    @Type(() => EncounterConditionsCreateInput)
    data!: EncounterConditionsCreateInput;
}
