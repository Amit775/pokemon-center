import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesUpdateWithoutTypeInput } from "../inputs/PokemonFormTypesUpdateWithoutTypeInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput", {})
export class PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: PokemonFormTypesUpdateWithoutTypeInput;
}
