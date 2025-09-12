import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateOrConnectWithoutEvolutionInput } from "../inputs/LocationsCreateOrConnectWithoutEvolutionInput";
import { LocationsCreateWithoutEvolutionInput } from "../inputs/LocationsCreateWithoutEvolutionInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsCreateNestedOneWithoutEvolutionInput", {})
export class LocationsCreateNestedOneWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => LocationsCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: LocationsCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: LocationsCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationsWhereUniqueInput | undefined;
}
