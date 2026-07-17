import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GendersUpdateWithoutEvolutionInput } from './genders-update-without-evolution.input';
import { Type } from 'class-transformer';
import { GendersCreateWithoutEvolutionInput } from './genders-create-without-evolution.input';
import { GendersWhereInput } from './genders-where.input';

@InputType()
export class GendersUpsertWithoutEvolutionInput {

    @Field(() => GendersUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => GendersUpdateWithoutEvolutionInput)
    update!: GendersUpdateWithoutEvolutionInput;

    @Field(() => GendersCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => GendersCreateWithoutEvolutionInput)
    create!: GendersCreateWithoutEvolutionInput;

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    where?: GendersWhereInput;
}
