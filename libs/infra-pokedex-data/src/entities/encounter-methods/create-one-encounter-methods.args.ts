import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsCreateInput } from './encounter-methods-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterMethodsArgs {

    @Field(() => EncounterMethodsCreateInput, {nullable:false})
    @Type(() => EncounterMethodsCreateInput)
    data!: Identity<EncounterMethodsCreateInput>;
}
