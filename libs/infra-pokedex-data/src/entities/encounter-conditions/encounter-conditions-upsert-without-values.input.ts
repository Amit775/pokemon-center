import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionsUpdateWithoutValuesInput } from './encounter-conditions-update-without-values.input';
import { Type } from 'class-transformer';
import { EncounterConditionsCreateWithoutValuesInput } from './encounter-conditions-create-without-values.input';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';

@InputType()
export class EncounterConditionsUpsertWithoutValuesInput {

    @Field(() => EncounterConditionsUpdateWithoutValuesInput, {nullable:false})
    @Type(() => EncounterConditionsUpdateWithoutValuesInput)
    update!: EncounterConditionsUpdateWithoutValuesInput;

    @Field(() => EncounterConditionsCreateWithoutValuesInput, {nullable:false})
    @Type(() => EncounterConditionsCreateWithoutValuesInput)
    create!: EncounterConditionsCreateWithoutValuesInput;

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: EncounterConditionsWhereInput;
}
