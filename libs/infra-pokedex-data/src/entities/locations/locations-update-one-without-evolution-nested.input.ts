import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsCreateWithoutEvolutionInput } from './locations-create-without-evolution.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutEvolutionInput } from './locations-create-or-connect-without-evolution.input';
import { LocationsUpsertWithoutEvolutionInput } from './locations-upsert-without-evolution.input';
import { LocationsWhereInput } from './locations-where.input';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { LocationsUpdateToOneWithWhereWithoutEvolutionInput } from './locations-update-to-one-with-where-without-evolution.input';

@InputType()
export class LocationsUpdateOneWithoutEvolutionNestedInput {

    @Field(() => LocationsCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => LocationsCreateWithoutEvolutionInput)
    create?: LocationsCreateWithoutEvolutionInput;

    @Field(() => LocationsCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: LocationsCreateOrConnectWithoutEvolutionInput;

    @Field(() => LocationsUpsertWithoutEvolutionInput, {nullable:true})
    @Type(() => LocationsUpsertWithoutEvolutionInput)
    upsert?: LocationsUpsertWithoutEvolutionInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    disconnect?: LocationsWhereInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    delete?: LocationsWhereInput;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsUpdateToOneWithWhereWithoutEvolutionInput, {nullable:true})
    @Type(() => LocationsUpdateToOneWithWhereWithoutEvolutionInput)
    update?: LocationsUpdateToOneWithWhereWithoutEvolutionInput;
}
