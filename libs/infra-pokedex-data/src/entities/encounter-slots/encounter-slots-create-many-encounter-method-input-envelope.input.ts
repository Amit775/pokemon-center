import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsCreateManyEncounterMethodInput } from './encounter-slots-create-many-encounter-method.input';
import { Type } from 'class-transformer';

@InputType()
export class EncounterSlotsCreateManyEncounterMethodInputEnvelope {

    @Field(() => [EncounterSlotsCreateManyEncounterMethodInput], {nullable:false})
    @Type(() => EncounterSlotsCreateManyEncounterMethodInput)
    data!: Array<EncounterSlotsCreateManyEncounterMethodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
