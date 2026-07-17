import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterMethodsCreateInput } from './encounter-methods-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterMethodsArgs {

    @Field(() => EncounterMethodsCreateInput, {nullable:false})
    @Type(() => EncounterMethodsCreateInput)
    data!: EncounterMethodsCreateInput;
}
