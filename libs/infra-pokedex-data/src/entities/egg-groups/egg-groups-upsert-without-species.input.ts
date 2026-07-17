import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EggGroupsUpdateWithoutSpeciesInput } from './egg-groups-update-without-species.input';
import { Type } from 'class-transformer';
import { EggGroupsCreateWithoutSpeciesInput } from './egg-groups-create-without-species.input';
import { EggGroupsWhereInput } from './egg-groups-where.input';

@InputType()
export class EggGroupsUpsertWithoutSpeciesInput {

    @Field(() => EggGroupsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => EggGroupsUpdateWithoutSpeciesInput)
    update!: Identity<EggGroupsUpdateWithoutSpeciesInput>;

    @Field(() => EggGroupsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => EggGroupsCreateWithoutSpeciesInput)
    create!: Identity<EggGroupsCreateWithoutSpeciesInput>;

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: Identity<EggGroupsWhereInput>;
}
