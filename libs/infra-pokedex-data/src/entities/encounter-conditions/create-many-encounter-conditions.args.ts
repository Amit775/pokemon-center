import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionsCreateManyInput } from './encounter-conditions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEncounterConditionsArgs {

    @Field(() => [EncounterConditionsCreateManyInput], {nullable:false})
    @Type(() => EncounterConditionsCreateManyInput)
    data!: Array<EncounterConditionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
