import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersCreateInput } from './encounters-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncountersArgs {

    @Field(() => EncountersCreateInput, {nullable:false})
    @Type(() => EncountersCreateInput)
    data!: Identity<EncountersCreateInput>;
}
