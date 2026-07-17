import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsUpdateWithoutValuesInput } from './encounter-conditions-update-without-values.input';
import { Type } from 'class-transformer';
import { EncounterConditionsCreateWithoutValuesInput } from './encounter-conditions-create-without-values.input';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';

@InputType()
export class EncounterConditionsUpsertWithoutValuesInput {

    @Field(() => EncounterConditionsUpdateWithoutValuesInput, {nullable:false})
    @Type(() => EncounterConditionsUpdateWithoutValuesInput)
    update!: Identity<EncounterConditionsUpdateWithoutValuesInput>;

    @Field(() => EncounterConditionsCreateWithoutValuesInput, {nullable:false})
    @Type(() => EncounterConditionsCreateWithoutValuesInput)
    create!: Identity<EncounterConditionsCreateWithoutValuesInput>;

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: Identity<EncounterConditionsWhereInput>;
}
