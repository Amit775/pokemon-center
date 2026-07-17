import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { LocationsUpdateWithoutEvolutionInput } from './locations-update-without-evolution.input';

@InputType()
export class LocationsUpdateToOneWithWhereWithoutEvolutionInput {

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: LocationsWhereInput;

    @Field(() => LocationsUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutEvolutionInput)
    data!: LocationsUpdateWithoutEvolutionInput;
}
