import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutEvolutionInput } from "../inputs/LocationUpdateWithoutEvolutionInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutEvolutionInput", {})
export class LocationUpdateToOneWithWhereWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutEvolutionInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutEvolutionInput;
}
