import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupCreateWithoutPokedexInput";
import { PokedexVersionGroupUpdateWithoutPokedexInput } from "../inputs/PokedexVersionGroupUpdateWithoutPokedexInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpsertWithWhereUniqueWithoutPokedexInput", {})
export class PokedexVersionGroupUpsertWithWhereUniqueWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateWithoutPokedexInput, {
    nullable: false
  })
  update!: PokedexVersionGroupUpdateWithoutPokedexInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateWithoutPokedexInput, {
    nullable: false
  })
  create!: PokedexVersionGroupCreateWithoutPokedexInput;
}
