import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateWithoutEncountersInput } from "../inputs/LocationAreaCreateWithoutEncountersInput";
import { LocationAreaUpdateWithoutEncountersInput } from "../inputs/LocationAreaUpdateWithoutEncountersInput";
import { LocationAreaWhereInput } from "../inputs/LocationAreaWhereInput";

@TypeGraphQL.InputType("LocationAreaUpsertWithoutEncountersInput", {})
export class LocationAreaUpsertWithoutEncountersInput {
  @TypeGraphQL.Field(_type => LocationAreaUpdateWithoutEncountersInput, {
    nullable: false
  })
  update!: LocationAreaUpdateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: LocationAreaCreateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;
}
