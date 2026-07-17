import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncountersCreateInput } from './encounters-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncountersArgs {

    @Field(() => EncountersCreateInput, {nullable:false})
    @Type(() => EncountersCreateInput)
    data!: EncountersCreateInput;
}
