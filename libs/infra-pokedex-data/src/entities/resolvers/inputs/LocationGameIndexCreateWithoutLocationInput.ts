import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateNestedOneWithoutLocationGameIndicesInput } from "../inputs/GenerationCreateNestedOneWithoutLocationGameIndicesInput";

@TypeGraphQL.InputType("LocationGameIndexCreateWithoutLocationInput", {})
export class LocationGameIndexCreateWithoutLocationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutLocationGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutLocationGameIndicesInput;
}
