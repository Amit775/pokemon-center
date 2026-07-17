import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterSlotsCreateManyInput } from './encounter-slots-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEncounterSlotsArgs {

    @Field(() => [EncounterSlotsCreateManyInput], {nullable:false})
    @Type(() => EncounterSlotsCreateManyInput)
    data!: Array<EncounterSlotsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
