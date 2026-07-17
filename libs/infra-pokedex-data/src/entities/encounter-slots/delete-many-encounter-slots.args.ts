import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncounterSlotsArgs {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: EncounterSlotsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
