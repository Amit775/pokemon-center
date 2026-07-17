import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsCreateManyVersionGroupInput } from './encounter-slots-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class EncounterSlotsCreateManyVersionGroupInputEnvelope {

    @Field(() => [EncounterSlotsCreateManyVersionGroupInput], {nullable:false})
    @Type(() => EncounterSlotsCreateManyVersionGroupInput)
    data!: Array<EncounterSlotsCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
