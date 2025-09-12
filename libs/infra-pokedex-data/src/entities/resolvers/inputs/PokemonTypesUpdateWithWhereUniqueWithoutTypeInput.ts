import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesUpdateWithoutTypeInput } from "../inputs/PokemonTypesUpdateWithoutTypeInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesUpdateWithWhereUniqueWithoutTypeInput", {})
export class PokemonTypesUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: PokemonTypesUpdateWithoutTypeInput;
}
