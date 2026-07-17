import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncounterMethodsArgs {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: Identity<EncounterMethodsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
