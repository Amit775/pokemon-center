import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateWithoutTypeInput } from "../inputs/PokemonFormTypesCreateWithoutTypeInput";
import { PokemonFormTypesUpdateWithoutTypeInput } from "../inputs/PokemonFormTypesUpdateWithoutTypeInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput", {})
export class PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: PokemonFormTypesUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonFormTypesCreateWithoutTypeInput;
}
