import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateNestedOneWithoutGameIndicesInput } from "../inputs/LocationsCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("LocationGameIndicesCreateWithoutGenerationInput", {})
export class LocationGameIndicesCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => LocationsCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  location!: LocationsCreateNestedOneWithoutGameIndicesInput;
}
