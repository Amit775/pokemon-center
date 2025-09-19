import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeUpdateWithoutTypeInput } from "../inputs/PokemonFormTypeUpdateWithoutTypeInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeUpdateWithWhereUniqueWithoutTypeInput", {})
export class PokemonFormTypeUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: PokemonFormTypeUpdateWithoutTypeInput;
}
