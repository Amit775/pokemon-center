import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateWithoutEvolutionInput } from "../inputs/LocationsCreateWithoutEvolutionInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsCreateOrConnectWithoutEvolutionInput", {})
export class LocationsCreateOrConnectWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationsCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: LocationsCreateWithoutEvolutionInput;
}
