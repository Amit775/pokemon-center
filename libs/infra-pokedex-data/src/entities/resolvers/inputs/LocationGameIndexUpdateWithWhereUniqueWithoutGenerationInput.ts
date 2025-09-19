import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexUpdateWithoutGenerationInput } from "../inputs/LocationGameIndexUpdateWithoutGenerationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexUpdateWithWhereUniqueWithoutGenerationInput", {})
export class LocationGameIndexUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: LocationGameIndexUpdateWithoutGenerationInput;
}
