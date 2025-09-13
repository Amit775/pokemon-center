import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateNestedOneWithoutLocationGameIndicesInput } from "../inputs/GenerationsCreateNestedOneWithoutLocationGameIndicesInput";

@TypeGraphQL.InputType("LocationGameIndicesCreateWithoutLocationInput", {})
export class LocationGameIndicesCreateWithoutLocationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutLocationGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutLocationGameIndicesInput;
}
