import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatsCreateNestedOneWithoutCharacteristicsInput } from '../stats/stats-create-nested-one-without-characteristics.input';

@InputType()
export class CharacteristicsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    gene_mod_5!: number;

    @Field(() => StatsCreateNestedOneWithoutCharacteristicsInput, {nullable:false})
    stat!: StatsCreateNestedOneWithoutCharacteristicsInput;
}
