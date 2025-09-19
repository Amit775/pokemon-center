import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateWithoutTypeInput } from "../inputs/PokemonFormTypeCreateWithoutTypeInput";
import { PokemonFormTypeUpdateWithoutTypeInput } from "../inputs/PokemonFormTypeUpdateWithoutTypeInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeUpsertWithWhereUniqueWithoutTypeInput", {})
export class PokemonFormTypeUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: PokemonFormTypeUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonFormTypeCreateWithoutTypeInput;
}
