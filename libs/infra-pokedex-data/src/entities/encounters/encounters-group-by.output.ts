import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncountersCountAggregate } from './encounters-count-aggregate.output';
import { EncountersAvgAggregate } from './encounters-avg-aggregate.output';
import { EncountersSumAggregate } from './encounters-sum-aggregate.output';
import { EncountersMinAggregate } from './encounters-min-aggregate.output';
import { EncountersMaxAggregate } from './encounters-max-aggregate.output';

@ObjectType()
export class EncountersGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_slot_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => EncountersCountAggregate, {nullable:true})
    _count?: EncountersCountAggregate;

    @Field(() => EncountersAvgAggregate, {nullable:true})
    _avg?: EncountersAvgAggregate;

    @Field(() => EncountersSumAggregate, {nullable:true})
    _sum?: EncountersSumAggregate;

    @Field(() => EncountersMinAggregate, {nullable:true})
    _min?: EncountersMinAggregate;

    @Field(() => EncountersMaxAggregate, {nullable:true})
    _max?: EncountersMaxAggregate;
}
