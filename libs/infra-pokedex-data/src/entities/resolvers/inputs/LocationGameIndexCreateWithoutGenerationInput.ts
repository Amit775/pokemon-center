import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutGameIndicesInput } from "../inputs/LocationCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("LocationGameIndexCreateWithoutGenerationInput", {})
export class LocationGameIndexCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutGameIndicesInput;
}
