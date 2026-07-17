import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateManyInput } from './encounter-condition-value-map-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEncounterConditionValueMapArgs {

    @Field(() => [EncounterConditionValueMapCreateManyInput], {nullable:false})
    @Type(() => EncounterConditionValueMapCreateManyInput)
    data!: Array<EncounterConditionValueMapCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
