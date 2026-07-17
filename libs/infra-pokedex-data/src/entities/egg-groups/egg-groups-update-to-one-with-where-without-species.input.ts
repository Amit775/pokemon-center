import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { Type } from 'class-transformer';
import { EggGroupsUpdateWithoutSpeciesInput } from './egg-groups-update-without-species.input';

@InputType()
export class EggGroupsUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: EggGroupsWhereInput;

    @Field(() => EggGroupsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => EggGroupsUpdateWithoutSpeciesInput)
    data!: EggGroupsUpdateWithoutSpeciesInput;
}
