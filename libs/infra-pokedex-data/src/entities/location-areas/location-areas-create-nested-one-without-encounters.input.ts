import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutEncountersInput } from './location-areas-create-or-connect-without-encounters.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';

@InputType()
export class LocationAreasCreateNestedOneWithoutEncountersInput {

    @Field(() => LocationAreasCreateWithoutEncountersInput, {nullable:true})
    @Type(() => LocationAreasCreateWithoutEncountersInput)
    create?: LocationAreasCreateWithoutEncountersInput;

    @Field(() => LocationAreasCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: LocationAreasCreateOrConnectWithoutEncountersInput;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;
}
