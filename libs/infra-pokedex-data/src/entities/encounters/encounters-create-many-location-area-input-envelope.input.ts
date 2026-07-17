import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateManyLocationAreaInput } from './encounters-create-many-location-area.input';
import { Type } from 'class-transformer';

@InputType()
export class EncountersCreateManyLocationAreaInputEnvelope {

    @Field(() => [EncountersCreateManyLocationAreaInput], {nullable:false})
    @Type(() => EncountersCreateManyLocationAreaInput)
    data!: Array<EncountersCreateManyLocationAreaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
