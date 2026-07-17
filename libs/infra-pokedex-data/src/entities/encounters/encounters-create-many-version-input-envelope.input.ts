import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateManyVersionInput } from './encounters-create-many-version.input';
import { Type } from 'class-transformer';

@InputType()
export class EncountersCreateManyVersionInputEnvelope {

    @Field(() => [EncountersCreateManyVersionInput], {nullable:false})
    @Type(() => EncountersCreateManyVersionInput)
    data!: Array<EncountersCreateManyVersionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
