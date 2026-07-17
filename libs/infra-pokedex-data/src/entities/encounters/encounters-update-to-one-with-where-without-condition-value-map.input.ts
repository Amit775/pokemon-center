import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { EncountersUpdateWithoutConditionValueMapInput } from './encounters-update-without-condition-value-map.input';

@InputType()
export class EncountersUpdateToOneWithWhereWithoutConditionValueMapInput {

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: EncountersWhereInput;

    @Field(() => EncountersUpdateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutConditionValueMapInput)
    data!: EncountersUpdateWithoutConditionValueMapInput;
}
