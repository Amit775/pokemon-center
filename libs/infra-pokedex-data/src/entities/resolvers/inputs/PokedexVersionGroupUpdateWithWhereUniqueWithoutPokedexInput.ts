import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupUpdateWithoutPokedexInput } from "../inputs/PokedexVersionGroupUpdateWithoutPokedexInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateWithWhereUniqueWithoutPokedexInput", {})
export class PokedexVersionGroupUpdateWithWhereUniqueWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateWithoutPokedexInput, {
    nullable: false
  })
  data!: PokedexVersionGroupUpdateWithoutPokedexInput;
}
