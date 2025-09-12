import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateWithoutEvolutionInput } from "../inputs/LocationsCreateWithoutEvolutionInput";
import { LocationsUpdateWithoutEvolutionInput } from "../inputs/LocationsUpdateWithoutEvolutionInput";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsUpsertWithoutEvolutionInput", {})
export class LocationsUpsertWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => LocationsUpdateWithoutEvolutionInput, {
    nullable: false
  })
  update!: LocationsUpdateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => LocationsCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: LocationsCreateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;
}
