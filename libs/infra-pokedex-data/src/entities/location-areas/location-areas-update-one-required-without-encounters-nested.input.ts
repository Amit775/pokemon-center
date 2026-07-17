import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutEncountersInput } from './location-areas-create-or-connect-without-encounters.input';
import { LocationAreasUpsertWithoutEncountersInput } from './location-areas-upsert-without-encounters.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { LocationAreasUpdateToOneWithWhereWithoutEncountersInput } from './location-areas-update-to-one-with-where-without-encounters.input';

@InputType()
export class LocationAreasUpdateOneRequiredWithoutEncountersNestedInput {

    @Field(() => LocationAreasCreateWithoutEncountersInput, {nullable:true})
    @Type(() => LocationAreasCreateWithoutEncountersInput)
    create?: LocationAreasCreateWithoutEncountersInput;

    @Field(() => LocationAreasCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: LocationAreasCreateOrConnectWithoutEncountersInput;

    @Field(() => LocationAreasUpsertWithoutEncountersInput, {nullable:true})
    @Type(() => LocationAreasUpsertWithoutEncountersInput)
    upsert?: LocationAreasUpsertWithoutEncountersInput;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasUpdateToOneWithWhereWithoutEncountersInput, {nullable:true})
    @Type(() => LocationAreasUpdateToOneWithWhereWithoutEncountersInput)
    update?: LocationAreasUpdateToOneWithWhereWithoutEncountersInput;
}
