import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterSlotsCreateInput } from './encounter-slots-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterSlotsArgs {

    @Field(() => EncounterSlotsCreateInput, {nullable:false})
    @Type(() => EncounterSlotsCreateInput)
    data!: EncounterSlotsCreateInput;
}
