import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionsUpdateWithoutValuesInput } from './encounter-conditions-update-without-values.input';

@InputType()
export class EncounterConditionsUpdateToOneWithWhereWithoutValuesInput {

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: Identity<EncounterConditionsWhereInput>;

    @Field(() => EncounterConditionsUpdateWithoutValuesInput, {nullable:false})
    @Type(() => EncounterConditionsUpdateWithoutValuesInput)
    data!: Identity<EncounterConditionsUpdateWithoutValuesInput>;
}
