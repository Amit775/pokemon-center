import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsUpdateWithoutEvolutionInput } from "../inputs/LocationsUpdateWithoutEvolutionInput";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsUpdateToOneWithWhereWithoutEvolutionInput", {})
export class LocationsUpdateToOneWithWhereWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateWithoutEvolutionInput, {
    nullable: false
  })
  data!: LocationsUpdateWithoutEvolutionInput;
}
