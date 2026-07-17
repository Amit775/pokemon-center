import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterMethodsCreateManyInput } from './encounter-methods-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEncounterMethodsArgs {

    @Field(() => [EncounterMethodsCreateManyInput], {nullable:false})
    @Type(() => EncounterMethodsCreateManyInput)
    data!: Array<EncounterMethodsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
