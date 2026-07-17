import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValueMapUncheckedUpdateManyInput } from './encounter-condition-value-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterConditionValueMapArgs {

    @Field(() => EncounterConditionValueMapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUncheckedUpdateManyInput)
    data!: EncounterConditionValueMapUncheckedUpdateManyInput;

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    @Type(() => EncounterConditionValueMapWhereInput)
    where?: EncounterConditionValueMapWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
