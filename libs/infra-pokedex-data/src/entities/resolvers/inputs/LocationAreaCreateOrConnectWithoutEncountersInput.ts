import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateWithoutEncountersInput } from "../inputs/LocationAreaCreateWithoutEncountersInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaCreateOrConnectWithoutEncountersInput", {})
export class LocationAreaCreateOrConnectWithoutEncountersInput {
  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: LocationAreaCreateWithoutEncountersInput;
}
