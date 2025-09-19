import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateWithoutStatInput } from "../inputs/PokemonStatCreateWithoutStatInput";
import { PokemonStatUpdateWithoutStatInput } from "../inputs/PokemonStatUpdateWithoutStatInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatUpsertWithWhereUniqueWithoutStatInput", {})
export class PokemonStatUpsertWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatUpdateWithoutStatInput, {
    nullable: false
  })
  update!: PokemonStatUpdateWithoutStatInput;

  @TypeGraphQL.Field(_type => PokemonStatCreateWithoutStatInput, {
    nullable: false
  })
  create!: PokemonStatCreateWithoutStatInput;
}
