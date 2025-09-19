import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateWithoutGenerationInput } from "../inputs/LocationGameIndexCreateWithoutGenerationInput";
import { LocationGameIndexUpdateWithoutGenerationInput } from "../inputs/LocationGameIndexUpdateWithoutGenerationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexUpsertWithWhereUniqueWithoutGenerationInput", {})
export class LocationGameIndexUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: LocationGameIndexUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: LocationGameIndexCreateWithoutGenerationInput;
}
