import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncounterMethodsArgs {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: EncounterMethodsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
