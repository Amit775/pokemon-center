import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutEvolutionInput } from "../inputs/LocationCreateWithoutEvolutionInput";
import { LocationUpdateWithoutEvolutionInput } from "../inputs/LocationUpdateWithoutEvolutionInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutEvolutionInput", {})
export class LocationUpsertWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutEvolutionInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: LocationCreateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
