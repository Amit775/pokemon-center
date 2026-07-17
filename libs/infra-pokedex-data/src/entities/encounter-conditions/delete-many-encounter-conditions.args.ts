import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncounterConditionsArgs {

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: EncounterConditionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
