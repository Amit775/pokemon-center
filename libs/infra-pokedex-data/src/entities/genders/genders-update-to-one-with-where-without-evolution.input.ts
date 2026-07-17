import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GendersWhereInput } from './genders-where.input';
import { Type } from 'class-transformer';
import { GendersUpdateWithoutEvolutionInput } from './genders-update-without-evolution.input';

@InputType()
export class GendersUpdateToOneWithWhereWithoutEvolutionInput {

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    where?: Identity<GendersWhereInput>;

    @Field(() => GendersUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => GendersUpdateWithoutEvolutionInput)
    data!: Identity<GendersUpdateWithoutEvolutionInput>;
}
