import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsCreateWithoutEvolutionInput } from './locations-create-without-evolution.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutEvolutionInput } from './locations-create-or-connect-without-evolution.input';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class LocationsCreateNestedOneWithoutEvolutionInput {

    @Field(() => LocationsCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => LocationsCreateWithoutEvolutionInput)
    create?: LocationsCreateWithoutEvolutionInput;

    @Field(() => LocationsCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: LocationsCreateOrConnectWithoutEvolutionInput;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;
}
