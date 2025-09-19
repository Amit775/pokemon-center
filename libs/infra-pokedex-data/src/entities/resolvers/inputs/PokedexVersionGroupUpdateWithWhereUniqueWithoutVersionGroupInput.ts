import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupUpdateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupUpdateWithoutVersionGroupInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class PokedexVersionGroupUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: PokedexVersionGroupUpdateWithoutVersionGroupInput;
}
