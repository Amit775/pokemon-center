import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateManyEncounterSlotInput } from './encounters-create-many-encounter-slot.input';
import { Type } from 'class-transformer';

@InputType()
export class EncountersCreateManyEncounterSlotInputEnvelope {

    @Field(() => [EncountersCreateManyEncounterSlotInput], {nullable:false})
    @Type(() => EncountersCreateManyEncounterSlotInput)
    data!: Array<EncountersCreateManyEncounterSlotInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
