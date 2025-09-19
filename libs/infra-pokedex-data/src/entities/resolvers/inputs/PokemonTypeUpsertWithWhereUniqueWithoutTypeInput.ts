import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateWithoutTypeInput } from "../inputs/PokemonTypeCreateWithoutTypeInput";
import { PokemonTypeUpdateWithoutTypeInput } from "../inputs/PokemonTypeUpdateWithoutTypeInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeUpsertWithWhereUniqueWithoutTypeInput", {})
export class PokemonTypeUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypeUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: PokemonTypeUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => PokemonTypeCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonTypeCreateWithoutTypeInput;
}
